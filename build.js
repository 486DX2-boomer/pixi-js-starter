require('esbuild').build({
    entryPoints: ['./src/game.js'],
    bundle: true,
    outfile: './dist/game.js',
    minify: true,
}).catch(() => process.exit(1));