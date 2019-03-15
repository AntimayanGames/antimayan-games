var config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 900,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [menu]
};

var game = new Phaser.Game(config);
