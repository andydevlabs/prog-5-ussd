import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import path from "path";



export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parserOptions: {
                project: path.resolve("./tsconfig.json"),
                tsconfigRootDir: path.resolve(),
            },
        },
        rules: {
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variableLike",
                    format: ["camelCase"],
                },
                {
                    selector: "variable",
                    types: ["boolean"],
                    format: ["camelCase"],
                    prefix: ["is", "should", "has", "can", "did", "will"],
                },
            ],
        },
    },
]);
