import { Application, Sprite, Container, ParticleContainer } from 'pixi.js'

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

const particleConty: ParticleContainer = new ParticleContainer();
// Pretty much everything that worked on a Container will work with a ParticleContainer.

app.stage.addChild(conty, particleConty);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = window.innerHeight / 2;
clampy.y = window.innerWidth / 2;
clampy.anchor.set(0.5, 0.5);

conty.addChild(clampy);