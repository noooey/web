const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 1, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, -1, -1));

    const skybox = BABYLON.Mesh.CreateBox("skyBox", 1000, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('textures/texture');
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    const ground = buildGround();
    const spaceship = buildSpaceship();

    return scene;
}

const buildGround = () => {
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    // groundMat.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
    groundMat.diffuseTexture = new BABYLON.Texture('https://t4.ftcdn.net/jpg/03/09/04/59/360_F_309045980_zKAgyd8feCR69CMWQ1PlhCHhteODo9zd.jpg');

    const ground = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 15});
    ground.material = groundMat;

    ground.position.y = -8;
}

const buildSpaceship = () => {
    const body = buildBody();
    const head = buildHead();
    const window = buildWindow();
    const leg = buildLeg();

    const legs = [];
    const places = []; // [rotationY, x, y, z]
    // places.push([Math.PI/2, 0.7, -0.2, -0.7])
    places.push([-Math.PI/2, 0.6, -0.2, 0.6])
    places.push([-Math.PI, -0.6, -0.2, -0.6])
    places.push([-Math.PI/2, -0.6, -0.2, 0.6])
    for(let i=0; i< places.length; i++) {
        legs[i] = leg.clone("leg"+i+1);
        legs[i].rotation.y = places[i][0];
        legs[i].position.x = places[i][1];
        legs[i].position.y = places[i][2];
        legs[i].position.z = places[i][3];
    }

    return BABYLON.Mesh.MergeMeshes([body, head, window, leg], true, false, null, false, true);
}

const buildBody = () => {
    const bodyMat = new BABYLON.StandardMaterial("bodyMat");
    bodyMat.diffuseColor = new BABYLON.Color3(1, 1, 0);

    const body = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.8, diameterY: 2.5, diameterZ: 1.8, slice: 0.65});
    body.material = bodyMat;

    body.rotation.z = Math.PI;
    body.position.y = 1;

    return body;
}

const buildHead = () => {
    const headMat = new BABYLON.StandardMaterial("headMat");
    headMat.diffuseColor = new BABYLON.Color3(1, 0, 0);

    const head = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1.8, diameterY: 2.5, diameterZ: 1.8, slice: 0.35});
    head.material = headMat;

    // head.scaling.y = 0.3;
    head.position.y = 1;

    return head;
}

const buildWindow = () => {
    const glass = buildGlass();
    const frame = buildFrame();
    
    return BABYLON.Mesh.MergeMeshes([glass, frame], true, false, null, false, true);
}

const buildGlass = () => {
    const glassMat = new BABYLON.StandardMaterial("glassMat");
    glassMat.diffuseTexture = new BABYLON.Texture('https://media.istockphoto.com/vectors/texture-transparent-matte-white-and-grey-frosted-glass-blur-effect-vector-id1206130268?k=20&m=1206130268&s=612x612&w=0&h=K_upCTIrDyoyfDqPWuvfppzpjSOUIwakfSaEAL_F5NA=');
    // glassMat.diffuseColor = new BABYLON.Color3(1, 1, 1);

    const glass = BABYLON.MeshBuilder.CreateCylinder("cylinder", {height: 0.1, diameterTop: 0.9, diameterBottom: 0.8});
    glass.material = glassMat;

    glass.rotation.x = Math.PI/2;
    glass.position.z = -0.85;
    glass.position.y = 0.85;

    return glass
}

const buildFrame = () => {
    const frameMat = new BABYLON.StandardMaterial("frameMat");
    frameMat.diffuseColor = new BABYLON.Color3(0, 0, 1);

    const frame = BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 0.9, thickness: 0.15});
    frame.material = frameMat;

    frame.rotation.x = Math.PI/2;
    frame.position.z = -0.85;
    frame.position.y = 0.85;

    return frame;
}

const buildLeg = () => {
    const places = []; // [rotationX, x, y, z]
    // places.push([Math.PI/2, 0.7, -0.2, -0.7])
    places.push([Math.PI/2, 0.7, -0.2, 0.7])
    places.push([Math.PI, -0.7, -0.2, -0.7])
    places.push([-Math.PI/2, -0.7, -0.2, 0.7])

    const legMat = new BABYLON.StandardMaterial("legMat");
    legMat.diffuseColor = new BABYLON.Color3(1, 0, 0);

    const leg = BABYLON.MeshBuilder.CreateCylinder("cylinder", {tessellation:3, diameterBottom: 0, diameterTop: 0.5, height: 0.8});
    leg.material = legMat;

    leg.position.x = 0.6;
    leg.position.y = -0.2;
    leg.position.z = -0.6;

    return leg;
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
