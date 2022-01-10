class backgroundScene { 
    constructor(game) {
    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./background.png"), 0, 0, gameEngine.width, gameEngine.height);
    };
};