// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
    {
        ignores: [
            "eslint.config.mjs",
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                // @ts-expect-error dirname
                tsconfigRootDir: import.meta.dirname,
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
                    selector: "function",
                    format: ["camelCase"]
                  },
                {
                    selector: "variable",
                    types: ["boolean"],
                    format: ["PascalCase"],
                    prefix: ["is", "should", "has", "can", "did", "will"],
                },
            ],
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: globals.browser },
    },
    {
        files: ["**/*.js"],
        extends: [tseslint.configs.disableTypeChecked],
    }
);
