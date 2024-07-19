module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ["eslint:recommended", "plugin:react-hooks/recommended"],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.eslint.json",
    },
    plugins: ["react-refresh", "@typescript-eslint"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        // Replace no-constant-condition with no-unnecessary-condition
        "no-constant-condition": "off",
        "@typescript-eslint/no-unnecessary-condition": "error",

        // Allow `constructor(public propName) {}` shorthand
        "no-empty-function": ["warn", { allow: ["constructors"] }],

        "@typescript-eslint/no-floating-promises": "error",

        // Unnecessary with TS
        "no-undef": "off",

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "all",
                // Ignore args with leading or trailing underscore
                argsIgnorePattern: "(^_)|(_$)",
            },
        ],
        "no-unused-expressions": [
            "error",
            {
                allowTernary: true,
                allowShortCircuit: true,
            },
        ],

        // Stylistic stuff
        "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
        "object-shorthand": "warn",
        "spaced-comment": [
            "warn",
            "always",
            {
                exceptions: ["-", "#", "=", "/"], // Allows for comment blocks like //====  or //#### or //---- or //////
                markers: ["/"], // Allows for triple slash comments
            },
        ],
    },
    overrides: [
        {
            files: ["*.js"],
            rules: {
                "no-undef": "error",
            },
        },
    ],
};
