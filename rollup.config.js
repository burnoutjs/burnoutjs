import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import filesize from 'rollup-plugin-filesize';
import { minify } from 'uglify-es';
import pkg from './package.json';

export default {
  entry: 'src/burnout.js',
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' }
  ],
  plugins: [
    eslint(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({}, minify),
    filesize()
  ]
};
