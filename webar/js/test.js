
var requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

document.body.onload = function () {
    let canvas = document.querySelector('#mainCanvas');
    let scene = null;
    let camera = null;
    let renderer = null;
    let controls = null;
    let light = null;

    var i = 0;

    const app = {
        things: {},
        init() {
            this.setCanvas();
        },
        setCanvas() {
            canvas.width = document.body.offsetWidth;
            canvas.height = window.innerHeight;
            this.createWorld();
        },
        createWorld() {
            renderer = new THREE.WebGLRenderer({
                canvas,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setPixelRatio( window.devicePixelRatio );
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x393939);

            camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 4000);
            camera.position.set(5, 5, 5);
            camera.lookAt(new THREE.Vector3(0, 0, 0));
            scene.add(camera);

            controls = new THREE.OrbitControls(camera, renderer.domElement);// 初始化控制器
            controls.target.set(0, 0, 0);// 设置控制器的焦点，使控制器围绕这个焦点进行旋转
            controls.maxDistance = 100;// 设置移动的最长距离（默认为无穷）
            controls.maxPolarAngle = Math.PI;//绕垂直轨道的距离（范围是0-Math.PI,默认为Math.PI）
            this.createAxes();
            this.createThing();
        },
        createAxes() {
            var xGeo = new THREE.Geometry();
            xGeo.vertices.push(
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(1, 0, 0)
            )
            var xMat = new THREE.LineBasicMaterial({
                color: 0xff0000
            });
            scene.add(new THREE.Line(xGeo, xMat));

            var yGeo = new THREE.Geometry();
            yGeo.vertices.push(
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 1, 0)
            )
            var yMat = new THREE.LineBasicMaterial({
                color: 0xff0000
            });
            scene.add(new THREE.Line(yGeo, yMat));

            var zGeo = new THREE.Geometry();
            zGeo.vertices.push(
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, 0, 1)
            )
            var zMat = new THREE.LineBasicMaterial({
                color: 0xff0000
            });
            scene.add(new THREE.Line(zGeo, zMat));
        },
        createThing() {
            renderer.shadowMapEnabled = true;
            renderer.shadowMapSoft = true;
            // var material = new THREE.MeshLambertMaterial({
            //     color: 0x00ff00
            // });
            // var geometry = new THREE.BoxGeometry(1, 1, 1);

            // for (var i = 0; i < geometry.faces.length; i += 2) {

            //     var hex = Math.random() * 0xffffff;
            //     geometry.faces[i].color.setHex(hex);
            //     geometry.faces[i + 1].color.setHex(hex);

            // }
            // var cube = new THREE.Mesh(geometry, material)
            // cube.position.set(0.5, 0.5, 0.5)
            // scene.add(cube);

            var ambient = new THREE.AmbientLight(0xffffff, 1);
            scene.add(ambient);

            spotLight = new THREE.SpotLight(0xffffff, 1);
            spotLight.position.set(10, 10, 0);
            spotLight.angle = Math.PI / 4;
            spotLight.penumbra = 0.05;
            spotLight.decay = 2;
            spotLight.distance = 30;
            spotLight.castShadow = true;
            spotLight.shadow.mapSize.width = 30;
            spotLight.shadow.mapSize.height = 30;
            spotLight.shadow.camera.near = 10;
            spotLight.shadow.camera.far = 30;
            scene.add(spotLight);
            // lightHelper = new THREE.SpotLightHelper(spotLight);
            // scene.add(lightHelper);

            var texture = THREE.ImageUtils.loadTexture('images/pavement.png');
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(4,0);
            var material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide});
            var geometry = new THREE.PlaneBufferGeometry(30, 30);
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, -0.1, 0);
            mesh.rotation.x = - Math.PI * 0.5;
            mesh.receiveShadow = true;
            scene.add( mesh );

            var material = new THREE.MeshPhongMaterial( { color: 0x4080ff, specular: 0xff0000, shininess: 100} );
            var geometry = new THREE.BoxBufferGeometry( 0.5, 0.5, 0.5);
            
            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.set( 3, 0.2, 0 );
            mesh.castShadow = true;
            scene.add( mesh );


            var material = new THREE.MeshPhongMaterial({ color: 0x4080ff })
            var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.set( 1.2, 1.2, 1.2 );
            mesh.castShadow = true;
            scene.add(mesh);

            this.render(mesh);
        },
        render(mesh) {
            mesh.position.x += 0.01;
            renderer.render(scene, camera)
            controls.update();// 照相机转动时，必须更新该控制器
            requestAnimationFrame(this.render.bind(this, mesh))
        },
    }

    function onDocumentMouseDown(event) {

        event.preventDefault();

        document.addEventListener('mousemove', onDocumentMouseMove, false);
        document.addEventListener('mouseup', onDocumentMouseUp, false);
        document.addEventListener('mouseout', onDocumentMouseOut, false);

        mouseXOnMouseDown = event.clientX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;

    }

    function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;

        targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;

    }

    function onDocumentMouseUp(event) {

        document.removeEventListener('mousemove', onDocumentMouseMove, false);
        document.removeEventListener('mouseup', onDocumentMouseUp, false);
        document.removeEventListener('mouseout', onDocumentMouseOut, false);

    }

    function onDocumentMouseOut(event) {

        document.removeEventListener('mousemove', onDocumentMouseMove, false);
        document.removeEventListener('mouseup', onDocumentMouseUp, false);
        document.removeEventListener('mouseout', onDocumentMouseOut, false);

    }
    app.init();
}