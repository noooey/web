const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI, 0, 30, new BABYLON.Vector3(0, 0, 1));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, -1));
    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 15;
    camera.lowerAlphaLimit = Math.PI+Math.PI/8;
    camera.upperAlphaLimit = 2*Math.PI-Math.PI/8;
    camera.lowerBetaLimit = 0;
    camera.upperBetaLimit = Math.PI/2;

    const skybox = BABYLON.Mesh.CreateBox("skyBox", 100);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox");
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;


    const ground = buildGround();
    const wall = buildWall();
    const subwall = buildSubWall();
    const photos = buildPhotos();

    return scene;
}

const buildPhotos = () => {
    const uri = [
        '/',
        '/',
        '/',
        '/',
        '/',
    ];
    const photos = [];
    const places = []; // [x]
    for(let j=-2; j<3; j++){
        places.push(3.5*j)
    }
    
    for(let i=0; i<places.length; i++) {
        photos[i] = buildPhoto(uri[i]);
        photos[i].position.x = places[i];
    }

    return BABYLON.Mesh.MergeMeshes(photos, true, false, null, false, true);
}

const buildPhoto = (uri) => {
    const photoMat = new BABYLON.StandardMaterial("photoMat");
    // photoMat.diffuseColor = new BABYLON.Color3(1, 1, 1);
    photoMat.diffuseTexture = new BABYLON.Texture(uri);

    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0, 0.0, 1, 1); //rear face
    faceUV[1] = new BABYLON.Vector4(0, 0, 1, 1.0); //front face
    faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.1, 1.0); //right side
    faceUV[3] = new BABYLON.Vector4(0, 0, 0.1, 1.0); //left side
    faceUV[4] = new BABYLON.Vector4(0, 1, 1, 0.9); //up side
    faceUV[5] = new BABYLON.Vector4(0, 0, 1, 0.1); //down side
    
    const photo = BABYLON.MeshBuilder.CreateBox("box", {height: 3, width:3, depth: 0.3, faceUV: faceUV, wrap: true});
    photo.material = photoMat;

    return photo;
}

const buildGround = () => {
    // color
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseTexture = new BABYLON.Texture('https://cdn.pixabay.com/photo/2020/05/11/02/13/cement-swirl-texture-5156203_960_720.jpg');
    // groundMat.diffuseColor = new BABYLON.Color3(1, 1, 1);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:20, height:20});
    ground.material = groundMat;

    ground.position.y = -4;
    ground.position.z = -6;
}

const buildWall = () => {
    // color
    const wallMat = new BABYLON.StandardMaterial("wallMat");
    wallMat.diffuseTexture = new BABYLON.Texture('https://media.istockphoto.com/photos/white-concrete-wall-texture-background-picture-id946853908?k=20&m=946853908&s=612x612&w=0&h=Jyzu0ExkiacHooTtHMPhhg0p51-14-0TXlySzHDfPao=');
    // groundMat.diffuseColor = new BABYLON.Color3(1, 1, 1);

    const wall = BABYLON.MeshBuilder.CreateBox("box", {width:20, height:5, depth: 1});
    wall.material = wallMat;

    wall.position.z = 1;
}

const buildSubWall = () => {
    // color
    const SubWallMat = new BABYLON.StandardMaterial("SubWallMat");
    SubWallMat.diffuseTexture = new BABYLON.Texture('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbFEZKkTmwKMnIyjaSE0nyCTJudAQyaq_jA&usqp=CAU');
    // groundMat.diffuseColor = new BABYLON.Color3(1, 1, 1);

    const subwall = BABYLON.MeshBuilder.CreateBox("box", {width:20, height:7, depth: 0.2});
    subwall.material = SubWallMat;

    subwall.position.z = 2;
    subwall.position.y = -0.5;
}

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
        engine.resize();
});