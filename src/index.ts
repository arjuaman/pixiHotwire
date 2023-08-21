import { Application, Container, ParticleContainer, Graphics, TextStyle, Text, BitmapFont, BitmapText } from 'pixi.js'

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

const styly: TextStyle = new TextStyle({
  align: "center",
  fill: "#754c24",
  fontSize: 42
});
const texty: Text = new Text('私に気づいて先輩！', styly); // Text supports unicode!
// texty.text = "This is expensive to change, please do not abuse";

app.stage.addChild(texty);

// If you need to know, this is the expensive part. This creates the font atlas
BitmapFont.from("comic 32", {
  fill: "#ffffff", // White, will be colored later
  fontFamily: "Comic Sans MS",
  fontSize: 32
})

// Remember, this font only has letters and numbers. No commas or any other symbol.
const bitmapTexty: BitmapText = new BitmapText("I love baking, my family, and my friends",
  {
      fontName: "comic 32",
      fontSize: 32, // Making it too big or too small will look bad
      tint: 0xFF0000 // Here we make it red.
  });

bitmapTexty.text = "This is cheap";
bitmapTexty.text = "Change it as much as you want";
bitmapTexty.x = 300;
bitmapTexty.y = 300;

app.stage.addChild(bitmapTexty);