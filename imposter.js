class imposter {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./AmongUs.png"), 11, 0, 118, 120, 4, 0.1);

        this.x = 0;
        this.y = 0;
        this.speed = 250;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, 380);
    };
};