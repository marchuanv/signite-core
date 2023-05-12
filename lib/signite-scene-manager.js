function SceneManager({ engine, canvas }) {
    const scene = new BABYLON.Scene(engine);
    let camera = null;
    let light = null;
    let entity = null;
    let entity2 = null;
    Object.defineProperty(this, 'create', { writable: false, configurable: false, value: () => {
        // Creates and positions a free camera
        camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
        // Creates a light, aiming 0,1,0 - to the sky
        light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        // Built-in 'sphere' shape.
        entity = BABYLON.MeshBuilder.CreateSphere("sphere",  { diameter: 2, segments: 32 }, scene);
        // Built-in 'ground' shape.
        entity2 = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
    }});
    Object.defineProperty(this, 'update', { writable: false, configurable: false, value: () => {
        // Targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
        // Dim the light a small amount - 0 to 1
        light.intensity = 0.7;
        // Move the sphere upward 1/2 its height
        entity.position.y = 1;
    }});
    Object.defineProperty(this, 'render', { writable: false, configurable: false, value: () => {
        scene.render();
    }});
    
}