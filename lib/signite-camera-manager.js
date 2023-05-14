function CameraManager({ sceneManager, playerManager }) {
    let camera = null;
    let camRoot = null;
    Object.defineProperty(this, 'create', { writable: false, configurable: false, value: () => {

        //root camera parent that handles positioning of the camera to follow the player
        camRoot = new BABYLON.TransformNode("root");
        camRoot.position = new BABYLON.Vector3(0, 0, 0); //initialized at (0,0,0)
        //to face the player from behind (180 degrees)
        camRoot.rotation = new BABYLON.Vector3(0, Math.PI, 0);

        let yTilt = new BABYLON.TransformNode("ytilt");
        //adjustments to camera view to point down at our player
        yTilt.rotation = new BABYLON.Vector3(0.5934119456780721, 0, 0);
        this._yTilt = yTilt;
        yTilt.parent = camRoot;
        
        const scene = sceneManager.getScene();

        camera = new BABYLON.UniversalCamera("camera", new BABYLON.Vector3(0, 0, -30), scene);
        camera.lockedTarget = camRoot.position;
        camera.fov = 0.47350045992678597;
        camera.parent = yTilt;
    }});
    Object.defineProperty(this, 'update', { writable: false, configurable: false, value: () => {
        const playerEntity = playerManager.getEntity();
        let centerPlayer = playerEntity.position.y + 2;
        camRoot.position = BABYLON.Vector3.Lerp(camRoot.position, new BABYLON.Vector3(playerEntity.position.x, centerPlayer, playerEntity.position.z), 0.4);
    }});
}