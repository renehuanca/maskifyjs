import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",

    output: [
        {
            file: "dist/maskify.cjs.js", 
            format: 'cjs',
            sourcemap: true,
            plugins: [terser()],
        },
        {
            file: "dist/maskify.esm.js",
            format: 'esm',
            sourcemap: true,
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
    ],

    external: [],
};
