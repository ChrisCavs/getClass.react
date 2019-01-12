import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import {uglify} from 'rollup-plugin-uglify'

export default {
  input: 'src/getClass.js',
  output: {
    file: 'dist/getClass.js',
    format: 'umd',
    name: 'getClass'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        ["env", {
          "modules": false
        }]
      ],
      plugins: [
        "external-helpers"
      ]
    }),
    uglify(),
  ]
}