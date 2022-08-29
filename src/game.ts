import * as PIXI from "pixi.js";

const app = new PIXI.Application({
    resolution: window.devicePixelRatio || 1,
    backgroundColor: 0xffffff,
    width: 640,
    height: 480,
});

document.body.appendChild(app.view);