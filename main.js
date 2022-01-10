const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./background.png")
ASSET_MANAGER.queueDownload("./samus.png")
ASSET_MANAGER.queueDownload("./AmongUs.png")
ASSET_MANAGER.queueDownload("./paperMario.png")

// music
ASSET_MANAGER.queueDownload(".Rogueport.mp3");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new imposter(gameEngine));
	gameEngine.addEntity(new samus(gameEngine));
	gameEngine.addEntity(new paperMario(gameEngine));
	gameEngine.addEntity(new backgroundScene(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
