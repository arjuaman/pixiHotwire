import { Application, ParticleContainer, Sprite, BlurFilter, Container } from 'pixi.js'

const app = new Application({
    view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
    resolution: window.devicePixelRatio || 1,
  autoDensity: true,
    backgroundColor: 0x6495ed,
    width: window.innerWidth,
    height: window.innerHeight
});

const conty: Container = new Container();
const particleConty: ParticleContainer = new ParticleContainer();
// Pretty much everything that worked on a Container will work with a ParticleContainer.

app.stage.addChild(conty, particleConty);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = window.innerHeight / 2;
clampy.y = window.innerWidth / 2;
clampy.anchor.set(0.5, 0.5);

// NOTE: Didn't worked with particle container
// Make your filter
const myBlurFilter = new BlurFilter();
// Add it to the `.filters` array of any DisplayObject
clampy.filters = [myBlurFilter];

//resources: https://github.com/pixijs/filters http://filters.pixijs.download/dev/demo/index.html

conty.addChild(clampy);  
