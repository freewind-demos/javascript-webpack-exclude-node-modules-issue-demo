Webpack Exclude "node_module" Issue Demo
========================================

```
npm install
npm run demo
```

Output

```
Hash: 3d4b3f13f73f8b4ff12f
Version: webpack 4.17.1
Time: 319ms
Built at: 2018-09-12 19:41:09
    Asset    Size  Chunks             Chunk Names
bundle.js  23 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./entry.js] 78 bytes {main} [built]
[./index.css] 1.04 KiB {main} [built]
[./node_modules/css-loader/index.js!./index.css] ./node_modules/css-loader!./index.css 196 bytes {main} [built]
    + 3 hidden modules

```

Seems like files under `node_modules` are handled by webpack, but I already defined:

```
exclude: /node_modules/,
```

in `webpack.config.js`.

Not sure where is the problem, see my question in stackoverflow: <https://stackoverflow.com/questions/52292862/how-to-exclude-css-files-inside-node-modules-with-webpack>

