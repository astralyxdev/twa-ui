import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

import copy from "rollup-plugin-copy";

import pkg from "./package.json";

export default {
  external: ["react", "react-dom", "react/jsx-runtime"],
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: false,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: false,
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
    babel({
      presets: ["@babel/preset-react"],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    copy({
      targets: [
        {
          src: [
            "./src/styles/fonts/SFCompactRounded-Ultralight.eot",
            "./src/styles/fonts/SFCompactRounded-Ultralight.woff",
            "./src/styles/fonts/SFCompactRounded-Ultralight.woff2",
          ],
          dest: "dist",
        },
      ],
    }),
  ],
};
