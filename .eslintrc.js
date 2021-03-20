module.exports = {
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript/recommended",

    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0
  }
};
