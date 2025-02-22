import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: "src/index.ts",
    output: [
        // Formato ESM
        {
            file: "dist/maskify.mjs",
            format: 'esm',
            plugins: [terser()]  // Minificación para la versión ESM
        },
        // Formato CommonJS
        {
            file: "dist/maskify.min.js",
            format: 'cjs',
            name: "maskify",  // Asegura que CommonJS tenga el nombre correcto
            plugins: [terser()]  // Minificación para la versión CJS
        }
    ],
    plugins: [
        typescript() // Transpila el código TypeScript
    ]
};
