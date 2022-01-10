class samus {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./samus.png"), 0, 190, 100, 120, 10, 0.2);

        this.x = 1024;
        this.y = 0;
        this.speed = 250;
    };

    update() {
        this.x -= this.speed * this.game.clockTick * 1.5;
        if (this.x < 0) this.x = 1024;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, 380);
    };
};