function PlayerManager({ sceneManager }) {
    let entity = null;
    Object.defineProperty(this, 'create', { writable: false, configurable: false, value: () => {
        // Built-in 'sphere' shape.
        const scene = sceneManager.getScene();
        entity = BABYLON.MeshBuilder.CreateSphere("sphere",  { diameter: 2, segments: 32 }, scene);
    }});
    Object.defineProperty(this, 'update', { writable: false, configurable: false, value: () => {
        entity.position.y = 1;
        entity.position.z = entity.position.z - 0.01;
    }});
}