const alias = require('rollup-plugin-alias');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const pkg = require('./package');

const now = new Date();
const banner = `/*!
 * jQuery Viewer v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) ${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/jquery-viewer.js',
      format: 'umd',
      name: 'Viewer',
      globals: {
        jquery: 'jQuery',
        viewerjs: 'Viewer',
      },
    },
    {
      banner,
      file: 'dist/jquery-viewer.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/jquery-viewer.esm.js',
      format: 'es',
    },
    {
      banner,
      file: 'docs/js/jquery-viewer.js',
      format: 'umd',
      name: 'Viewer',
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
    babel({
      plugins: ['external-helpers'],
    }),
  ],
};
