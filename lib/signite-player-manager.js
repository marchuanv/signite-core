function PlayerManager({ sceneManager }) {
    // Built-in 'sphere' shape.
    const scene = sceneManager.getScene();
    const entity = BABYLON.MeshBuilder.CreateSphere("sphere",  { diameter: 2, segments: 32 }, scene);
    Object.defineProperty(this, 'getEntity', { writable: false, configurable: false, value: () => {
       return entity;
    }});
    Object.defineProperty(this, 'update', { writable: false, configurable: false, value: () => {
        entity.position.y = 1;
        entity.position.z = entity.position.z - 0.01;
    }});
}