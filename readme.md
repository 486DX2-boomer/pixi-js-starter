# Pixi JS Starter

This is my own starter template for PixiJS projects.

First run `npm install`. The project will be ready to go with Typescript definitions enabled.

After that, `npm run dev` will run the Typescript compiler, build the project with ESBuild, and start a local server with `serve`. `npm run build` will compile and build the project, but forego running the web server.

# Tips and FAQ

**My assets aren't loading.**

This project uses ESBuild, not webpack, so your static assets like sound effects, spritesheets etc should be placed in the *dist* directory, not *src.* *src* should only contain your Typescript files.

**But ESBuild does support external file loading.**

Yeah, but I couldn't figure it out.

**Why not use webpack?**

I initially did, but it was way too slow. On my machine webpack builds were taking upwards of 15 seconds. ESBuild is significantly faster.

**Hot reload?**

I initially had a hot-reloading dev script using nodemon but it was acting weird and I couldn't figure it out.