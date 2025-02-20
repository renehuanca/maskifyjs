import { terser } from 'rollup-plugin-terser'

export default {
    input: "src/maskify.js",
    output: [
        // to import ESM
        {
            file: "dist/maskify.mjs",
            format: 'esm'
        },
        {
            file: "dist/maskify.min.js",
            format: 'cjs',
            name: "maskify"
        }
    ],
    plugins: [terser()]
}