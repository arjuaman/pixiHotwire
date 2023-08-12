import { Application, Sprite, Container, ParticleContainer } from 'pixi.js'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
  autoDensity: true,
    backgroundColor: 0x6495ed,
    width: window.innerWidth,
    height: window.innerHeight
});

const particleConty: ParticleContainer = new ParticleContainer();
// Pretty much everything that worked on a Container will work with a ParticleContainer.

const conty: Container = new Container();
conty.x = 0;
conty.y = 0;
app.stage.addChild(conty, particleConty);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = window.innerHeight / 2 - 50;
clampy.y = window.innerWidth / 2 - 250;
particleConty.addChild(clampy);