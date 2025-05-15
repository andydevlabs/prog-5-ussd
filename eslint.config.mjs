import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{ts,tsx}"],
        ...tseslint.configs.recommended,
        rules: {
            ...tseslint.configs.recommended.rules,
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
