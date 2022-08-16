import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import eslint from '@rollup/plugin-eslint';

const plugins = [
  nodeResolve(),
  typescript(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }),
  terser(),
  eslint()
];

export default {
  input: 'src/index.ts',
  plugins,
  output: {
    name: 'example-plugin',
    format: 'umd',
    file: 'dist/example-plugin.min.js',
    minifyInternalExports: true,
  }
};
