$(function () {
    //主程序
    function App() {
        return {
            camera: new Camera(),
            model: new Model(),
            webar: new Webar(),
            init() {
                this.addEvent();
            },
            resetVideoRect() {
                var bodyWidth = document.body.offsetWidth;
                var bodyHeight = document.body.offsetHeight;
                var videoWidth = bodyWidth;
                var videoHeight = bodyHeight;
                if (bodyWidth > bodyHeight) {
                    $('#video').css('widith', bodyWidth)
                    videoHeight = $("#video").offset().height;
                    $('#video').css('top', (bodyHeight - videoHeight) / 2)
                }
                else {
                    $('#video').css('height', bodyHeight)
                    videoWidth = $("#video").offset().width;
                    $('#video').css('left', (bodyWidth - videoWidth) / 2)
                }
                $('#pictrueCanvas').attr('width', videoWidth + 'px')
                $('#pictrueCanvas').attr('height', videoHeight + 'px')
            },
            addEvent() {
                var that = this;
                window.addEventListener('resize', function () {
                    that.resetVideoRect();
                })
                $("#btnSelect").on('click', function () {
                    var cameraList = that.camera.cameraList
                    if (cameraList.length === 1) {
                        that.camera.cameraId = cameraList[0].id;
                    }
                    else {
                        cameraList.forEach(item => {
                            if (item.text.indexOf('back') >= 0) {
                                that.camera.cameraId = item.id;
                            }
                        })
                    }
                    that.camera.openCamera(() => {
                        that.resetVideoRect();
                        that.model.init();
                        that.webar.startRecognize((result) => {
                            //识别成功
                            document.title = '识别成功';
                            $("#text").text(JSON.stringify(result));
                            $("#scan-line").removeClass("active");
                            that.model.loadModel();
                        });
                    });
                })
            }
        }
    }

    //相机相关
    function Camera() {
        var that = this;
        var cameraList = [];
        getCameraList();

        function getCameraList() {
            navigator.mediaDevices.enumerateDevices().then(list => {
                list.map(item => {
                    if ("videoinput" === item.kind) {
                        cameraList.push({
                            text: item.label || "camera " + (videoDeviceElement.length + 1).toString(),
                            id: item.deviceId,
                        })
                    }
                })
            })
        }

        return {
            cameraList: cameraList,
            cameraId: '',
            openCamera(cb) {
                var videoElement = $("#video")[0];
                var constraints = {
                    audio: false,
                    // video: {
                    //     deviceId: {
                    //         exact: this.cameraId
                    //     }
                    // },
                    video: { 
                        frameRate: { ideal: 10, max: 15 } ,
                        deviceId: {
                            exact: this.cameraId
                        }
                    }
                };
                alert(JSON.stringify(navigator.mediaDevices.getSupportedConstraints()))
                videoElement.srcObject && videoElement.srcObject.getTracks().forEach(e => {
                    e.stop()
                })
                navigator.mediaDevices.getUserMedia(constraints).then(stream => {
                    videoElement.style.display = "block",
                        videoElement.srcObject = stream
                    videoElement.onloadedmetadata = (() => {
                    });
                    const videoPlay = videoElement.play();
                    videoPlay && videoPlay.then(e => {
                        $("#btnSelect").removeClass('active');
                        $("#scan-line").addClass("active");
                        cb && cb();
                    })
                }).catch((e) => {
                    alert(JSON.stringify(e))
                    console.log(e)
                })
            }
        }

    }

    //加载模型相关
    function Model() {
        var scene, camera, renderer, controls, light, mixer;
        var clock = new THREE.Clock();

        function init() {
            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setClearAlpha(0);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
            renderer.domElement.setAttribute('id', 'canvas');
            document.body.appendChild(renderer.domElement)
            renderer.shadowMap.enabled = true;
            initScene();
            animation();
        }

        function initScene() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, document.body.offsetWidth / document.body.offsetHeight, 1, 4000);
            camera.position.set(80, 80, 80);
            camera.lookAt(new THREE.Vector3(0, 0, 0));

            scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

            light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, 100, 80);
            light.castShadow = true;
            light.shadow.camera.top = 180;
            light.shadow.camera.bottom = - 100;
            light.shadow.camera.left = - 120;
            light.shadow.camera.right = 120;
            scene.add(light);
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            var ambient = new THREE.AmbientLight({ color: 0xffffff })
            scene.add(ambient)
        }

        function render() {
            renderer.render(scene, camera);
            renderer.setClearColor(0xffffff, 0);
            controls.update();// 照相机转动时，必须更新该控制器
        }

        function animation() {
            var delta = clock.getDelta();
            if (mixer) mixer.update(delta);
            render();
            requestAnimationFrame(animation)
        }

        function loadModel(modelUrl) {
            var loader = new THREE.FBXLoader();
            loader.load('./objs/Samba Dancing.fbx', function (object) {
                mixer = new THREE.AnimationMixer(object);
                var action = mixer.clipAction(object.animations[0]);
                action.play();
                object.scale.set(0.4, 0.4, 0.4);
                object.position.set(0, 0, 0);

                object.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                scene.add(object);
            });

        }

        return {
            init,
            loadModel,
        }
    }


    function Webar() {
        var timer = null;
        var loading = false; //请求中
        var url = 'http://ae0b6dd0a29521504eee50907b34a85a.cn1.crs.easyar.com:8080/search';
        var headers = { Authorization: 'nlNhWSGa2B9jHEH2b9KP/ivUAGSP8zoQFKKBmtN3zenFhMdoNQoMYlEIKi1JTg3uJF016Evkz1Tm8MrZd5IUwg==' }
        var canvasEl = document.querySelector("#pictrueCanvas");
        var ctx = canvasEl.getContext('2d');
        var index = 0;
        return {
            //开始识别
            startRecognize(cb) {
                var that = this;
                timer = setInterval(function () {
                    if (loading || index >= 5) {
                        clearInterval(timer)
                        return false
                    }
                    index++;
                    document.title = index;
                    that.search(cb)
                }, 2000)
            },

            captureVideo() {
                ctx.drawImage(document.querySelector('#video'), 0, 0, canvasEl.width, canvasEl.height);
                return canvasEl.toDataURL("image/jpeg", .5).split("base64,")[1]
            },

            search(cb) {
                loading = true;
                var data = {
                    image: this.captureVideo(),
                }
                $.ajax({
                    type: 'POST',
                    url: url,
                    headers: {
                        'content-type': 'application/json',
                        ...headers
                    },
                    data: JSON.stringify(data),
                    success(res) {
                        if (res.statusCode == '0') {
                            let result = res.result;
                            cb && cb(result)
                        }
                    },
                    error(e) {
                        var res = JSON.parse(e.response)
                        if (res.statusCode == '17') {
                            loading = false;
                        }

                    },
                })
            },

            stopRecognize() {
                clearInterval(timer)
            }
        }
    }

    var app = new App();
    app.init();

})