import { Application, Sprite, Container } from 'pixi.js'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
  autoDensity: true,
    backgroundColor: 0x6495ed,
    width: window.innerWidth,
    height: window.innerHeight
});

const conty: Container = new Container();
conty.x = 0;
conty.y = 0;
app.stage.addChild(conty);

const clampy: Container = Sprite.from("clampy.png");
clampy.x = window.innerHeight / 2 - 50;
clampy.y = window.innerWidth / 2 - 250;
conty.addChild(clampy);