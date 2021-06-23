import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import { terser } from 'rollup-plugin-terser'
import image from '@rollup/plugin-image'
import sass from 'rollup-plugin-sass'
import pkg from './package.json'
import nodeSass from 'node-sass'

const input = './src/index.js'
const name = 'ReactBigCalendar'
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

const babelOptions = {
  exclude: /node_modules/,
  runtimeHelpers: true,
}

const commonjsOptions = {
  include: /node_modules/,
}

export default [
  {
    input,
    output: {
      file: './dist/react-big-calendar.js',
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      sass(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      image(),
      sizeSnapshot(),
    ],
  },

  {
    input,
    output: {
      file: './dist/react-big-calendar.min.js',
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      sass(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      image(),
      sizeSnapshot(),
      terser(),
    ],
  },

  {
    input,
    output: { file: pkg.module, format: 'esm' },
    // prevent bundling all dependencies
    external: id => !id.startsWith('.') && !id.startsWith('/'),
    plugins: [babel(babelOptions)],
  },
]
