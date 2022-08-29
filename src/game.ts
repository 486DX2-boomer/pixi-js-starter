import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    resolution: window.devicePixelRatio || 1,
    backgroundColor: 0xffffff,
    width: 640,
    height: 480,
});

document.body.appendChild(app.view);

const textContainer: PIXI.Container = new PIXI.Container();
const helloWorldText: PIXI.Text = new PIXI.Text("Hello World!", {fontFamily : 'Arial', fontSize: 24, fill : 0x00000, align : 'center'});
helloWorldText.anchor.set(0.5, 0.5);
textContainer.x = app.screen.width / 2;
textContainer.y = app.screen.height / 2;
textContainer.addChild(helloWorldText);
app.stage.addChild(textContainer);