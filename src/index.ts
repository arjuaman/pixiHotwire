import { Application, Sprite, Container, Point } from 'pixi.js'

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

const bigConty: Container = new Container();
bigConty.scale.set(2); // You can use set and only one value to set x and y
bigConty.position.x = 100;
bigConty.y = 200; // this is a shortcut for .position.y and it also exists one for .position.x
app.stage.addChild(bigConty);

const littleConty: Container = new Container();
// position has a copy setter. It won't use your reference but copy the values from it!
littleConty.position = new Point(300,200);
bigConty.addChild(littleConty);