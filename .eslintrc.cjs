/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
        "prettier",
    ],
    plugins: ["prettier"],
    "prettier/prettier": [
        "error",
        {
            trailingComma: "es5",
            singleQuote: true,
            printWidth: 80,
            tabWidth: 4,
            endOfLine: "lf",
            arrowParens: "always",
        },
    ],
};
