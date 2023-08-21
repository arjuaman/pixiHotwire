import { Application, Container, ParticleContainer, Graphics } from 'pixi.js'

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

const graphy: Graphics = new Graphics();

// we give instructions in order. begin fill, line style, draw circle, end filling
graphy.beginFill(0xFF00FF);
graphy.lineStyle(10, 0x00FF00);
graphy.drawCircle(0, 0, 25); // See how I set the drawing at 0,0? NOT AT 100, 100!
graphy.endFill();

app.stage.addChild(graphy); //I can add it before setting position, nothing bad will happen.

// Here we set it at 100,100
graphy.x = 100;
graphy.y = 100;