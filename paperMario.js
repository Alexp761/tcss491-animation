class paperMario {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./paperMario.png"), 190, 0, 230, 260, 1, 0.2);

        this.x = 400;
        this.y = 260;
        this.speed = 250;
    };

    update() {
        // this.y -= this.speed * this.game.clockTick * 1.5;
        // if (this.y < 0) this.y = 260;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
};