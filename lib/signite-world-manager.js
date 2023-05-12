function WorldManager({ engine, sceneManager }) {
    // Setup the world
    Object.defineProperty(this, 'update', { writable: false, configurable: false, value: async () => {
        await sceneManager.update();
    }});
    Object.defineProperty(this, 'render', { writable: false, configurable: false, value: async () => {
        engine.runRenderLoop(async () => {
            await sceneManager.render();
        });
    }});
}