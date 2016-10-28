import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default (
  { entry: 'src/index.js'
  , dest: 'dist/bundle.js'
  , format: 'umd'
  , moduleName: require('./package.json').name.split('-').map((x, i) => i === 0 ? x : `${x[0]}${x.slice(1)}`).join('')
  , plugins:  [ babel(babelrc())
              , nodeResolve({ jsnext: true, main: true })
              , commonjs({ include: 'node_modules/**' })
              ]
  }
)
