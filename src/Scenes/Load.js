class Load extends Phaser.Scene {
    constructor() {
        super("loadScene");
    }

    preload() {
        this.load.setPath("./assets/");

        // Load tilemap information
        this.load.image("player", "enemyBlack1.png");
    }

    create() {
         this.scene.start("hubScene");
    }

    // Never get here since a new scene is started in create()
    update() {
    }
}