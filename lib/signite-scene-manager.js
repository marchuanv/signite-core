function SceneManager({ engine }) {
    const scene = new BABYLON.Scene(engine);
    // Creates a light, aiming 0,1,0 - to the sky
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // Built-in 'ground' shape.
    const worldEntity = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
    Object.defineProperty(this, 'getScene', { writable: false, configurable: false, value: () => {
        return scene;
    }});
    Object.defineProperty(this, 'update', { writable: false, configurable: false, value: () => {
        // Dim the light a small amount - 0 to 1
        light.intensity = 0.7;
    }});
    Object.defineProperty(this, 'render', { writable: false, configurable: false, value: () => {
        scene.render();
    }});
}