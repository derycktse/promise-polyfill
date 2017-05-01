// import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry : 'src/index.js',
    format : 'iife',
    moduleName: 'lie',
    // sourceMap : true,
    plugins : [
        // resolve(),
        babel({
            exclude : 'node_modules/**'
        })
    ],
    dest : 'dist/bundle.js'
}