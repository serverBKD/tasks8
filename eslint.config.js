import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    eslintConfigPrettier,
    rules: {
      semi: ["error", "never"],
      "no-unused-expressions": "warn",
      "no-unused-vars": "warn",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
];
