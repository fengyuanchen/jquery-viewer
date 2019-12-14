const alias = require('rollup-plugin-alias');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const createBanner = require('create-banner');
const pkg = require('./package');

const banner = createBanner({
  data: {
    name: 'jQuery Viewer',
    year: '2018-present',
  },
});

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: `dist/${pkg.name}.js`,
      format: 'umd',
      globals: {
        jquery: 'jQuery',
        viewerjs: 'Viewer',
      },
    },
    {
      banner,
      file: `dist/${pkg.name}.common.js`,
      format: 'cjs',
    },
    {
      banner,
      file: `dist/${pkg.name}.esm.js`,
      format: 'esm',
    },
    {
      banner,
      file: `docs/js/${pkg.name}.js`,
      format: 'umd',
      globals: {
        jquery: 'jQuery',
        viewerjs: 'Viewer',
      },
    },
  ],
  external: ['jquery', 'viewerjs'],
  plugins: [
    alias({
      viewerjs: 'node_modules/viewerjs/src/index.js',
    }),
    nodeResolve(),
    commonjs(),
    babel(),
  ],
};
