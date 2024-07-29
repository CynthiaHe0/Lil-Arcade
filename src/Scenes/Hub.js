var clone = 0;
class Hub extends Phaser.Scene {
    constructor() {
        super("hubScene");
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        
    }

    create() {
        my.sprite.player = this.add.image(0, 0, "player");
        //Later make a player script and move the controls code there
        this.playerControls = {};
        this.playerControls.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.playerControls.up.on('down', ()=>{
            my.sprite.player.y--;
        });
        this.playerControls.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.playerControls.down.on('down', ()=>{
            my.sprite.player.y++;
        });
        this.playerControls.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.playerControls.right.on('down', ()=>{
            my.sprite.player.x++;
        });
        this.playerControls.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.playerControls.left.on('down', ()=>{
            my.sprite.player.x--;
        });
        this.playerControls.interact = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        
    }

}