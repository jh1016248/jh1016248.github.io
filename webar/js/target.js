var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
var ctx = null;

function request(method, url, data, headers) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest;
        xhr.onload = ((o) => {
            try {
                var e = JSON.parse(o.target.responseText);
                200 === o.status ? resolve(e) : reject(e)
            } catch (e) {
                reject(e)
            }
        })
        xhr.onerror = (e => {
            reject(e)
        })
        xhr.open(method, url)
        if(headers) {
            const keys =  Object.keys(headers);
            keys.forEach(key => {
                console.log(key, headers[key])
                xhr.setRequestHeader(key, headers[key])
            })
        }
        if(data) {
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.send("string" == typeof data ? data : JSON.stringify(data))
        }
        else {
            xhr.send()
        }
    })
}

function captureVideo() {
    let canvasEl = document.querySelector("#pictrueCanvas");
    if(!ctx) {
        ctx = canvasEl.getContext('2d');
    }
    ctx.drawImage(document.querySelector('#video'), 0, 0, canvasEl.width, canvasEl.height);
    return canvasEl.toDataURL("image/jpeg", .5).split("base64,")[1]
}

function checkPic() {
    const url = 'http://ae0b6dd0a29521504eee50907b34a85a.cn1.crs.easyar.com:8080/search';
    const headers = { Authorization: 'nlNhWSGa2B9jHEH2b9KP/ivUAGSP8zoQFKKBmtN3zenFhMdoNQoMYlEIKi1JTg3uJF016Evkz1Tm8MrZd5IUwg=='}
    const data = {
        image: captureVideo()
    }
    return request('POST', url, data, headers);
}

function loadCanvas() {
    var JThree = function (scene) {
        var _this = {};
        _this.createPlane = function (opts) {
            var textrue, material;
            if (opts.map) {
                textrue = new THREE.ImageUtils.loadTexture(opts.map);
                material = new THREE.MeshPhongMaterial({ map: textrue, side: opts.side })
            }
            else {
                material = new THREE.MeshPhongMaterial({ color: opts.color, side: opts.side })
            }
            var geometry = new THREE.PlaneBufferGeometry(opts.width, opts.height);
            var cube = new THREE.Mesh(geometry, material);
            cube.rotation.x = - Math.PI * 0.5;
            scene.add(cube);
            return cube;
        }
        return _this;
    }

    var scene, camera, renderer, controls, light, mixer;
    var clock = new THREE.Clock();
    var jthree = null;

    init();
    animation();

    function init() {
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearAlpha(0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
        renderer.domElement.setAttribute('id', 'canvas');
        document.body.appendChild(renderer.domElement)
        renderer.shadowMap.enabled = true;
        // renderer.setClearColor(1.0,1.0,1.0,1.0)
        initScene();
        // createAxes();
    }

    function initScene() {
        scene = new THREE.Scene();
        jthree = JThree(scene);
        camera = new THREE.PerspectiveCamera(75, document.body.offsetWidth / document.body.offsetHeight, 1, 4000);
        camera.position.set(80, 80, 80);
        camera.lookAt(new THREE.Vector3(0, 0, 0));


        scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

        light = new THREE.DirectionalLight(0xffffff);
        light.position.set(0, 100, 100);
        light.castShadow = true;
        light.shadow.camera.top = 180;
        light.shadow.camera.bottom = - 100;
        light.shadow.camera.left = - 120;
        light.shadow.camera.right = 120;
        scene.add(light);

        controls = new THREE.OrbitControls(camera, renderer.domElement);

        var ambient = new THREE.AmbientLight({ color: 0xffffff })
        scene.add(ambient)

        var loader = new THREE.FBXLoader();
        loader.load('./objs/Samba Dancing.fbx', function (object) {
            mixer = new THREE.AnimationMixer(object);
            var action = mixer.clipAction(object.animations[0]);
            action.play();
            object.scale.set(0.3, 0.3, 0.3);
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

}







