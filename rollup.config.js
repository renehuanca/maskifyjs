import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import copy from 'rollup-plugin-copy';

export default {
    input: "src/index.ts",

    output: [
        {
            file: "dist/maskify.cjs.js",
            format: 'cjs',
            plugins: [terser()],
        },
        {
            file: "dist/maskify.esm.js",
            format: 'esm',
            plugins: [terser()],
        },
        {
            file: "dist/maskify.min.js",
            format: 'umd',
            name: "Maskify",
            plugins: [terser()]
        }
    ],

    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        postcss({
            extract: 'style.min.css',
            plugins: [cssnano()],
        }),
        copy({
            targets: [
                { src: 'src/assets/*.svg', dest: 'dist/assets' }
            ]
        }),
    ],

    external: [],
};
