var clone = 0;
class Hub extends Phaser.Scene {
    constructor() {
        super("hubScene");
        this.my = {sprite : {}};
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {

    }

    create() {
        let my = this.my;
        my.sprite.player = this.add.image(this.game.config.width/2, this.game.config.height/2, "player");
        //Later make a player script and move the controls code there
        this.playerControls = {};
        this.playerControls.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.playerControls.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.playerControls.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.playerControls.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.playerControls.interact = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        let my = this.my;
        if (this.playerControls.left.isDown){
            my.sprite.player.x--;
        }
        if (this.playerControls.right.isDown){
            my.sprite.player.x++;
        }
        if (this.playerControls.up.isDown){
            my.sprite.player.y--;
        }
        if (this.playerControls.down.isDown){
            my.sprite.player.y++;
        }
    }

}