import commonjs from 'rollup-plugin-commonjs';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'bson',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      name: 'bson',
    }
  ],
  plugins: [
    nodeBuiltins(),
    nodeResolve(),
    commonjs(),
    babel({
      plugins: [ 'external-helpers' ],
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ]
    })
  ]
}
