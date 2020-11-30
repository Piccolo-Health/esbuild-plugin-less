# esbuild-plugin-less

A Less loader for [esbuild](https://esbuild.github.io/). Compiles Less to CSS.

## Install

Install both this plugin and [esbuild](https://github.com/evanw/esbuild)

An example build script looks like

```javascript
const esbuild = require('esbuild);
const lessPlugin = require('esbuild-plugin-less').default;

esbuild
  .build({
    entryPoints: ['app.js'],
    bundle: true,
    outfile: 'out.js',
    plugins: [
      lessPlugin({
        javascriptEnabled: true,
      }),
    ],
  })
  .catch(() => process.exit(1));
```

## Contributors

Todo
