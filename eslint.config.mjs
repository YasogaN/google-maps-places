import globals from "globals";
import unusedImports from "eslint-plugin-unused-imports";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  jsdoc.configs['flat/recommended'],
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    ignores: [
      ".now/*",
      "**/.changeset",
      "**/dist",
      "esm/*",
      "**/*.config.js",
      "**/*.config.mjs",
      "**/.DS_Store",
      "**/node_modules",
      "!**/.commitlintrc.cjs",
      "!**/.lintstagedrc.cjs",
    ],
    plugins: {
      "unused-imports": unusedImports,
      import: fixupPluginRules(_import),
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "warn",

      "import/order": ["warn", {
        groups: [
          "type",
          "builtin",
          "object",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],

        pathGroups: [{
          pattern: "~/**",
          group: "external",
          position: "after",
        }],

        "newlines-between": "always",
      }],

      "padding-line-between-statements": ["warn", {
        blankLine: "always",
        prev: "*",
        next: "return",
      }, {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        }, {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        }],


    }

  },
  pluginJs.configs.recommended,
];