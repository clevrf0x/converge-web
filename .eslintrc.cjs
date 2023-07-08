/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [ 'eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended' ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: 'detect' } },
  plugins: [ 'react', 'react-refresh' ],
  rules: {
    'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true } ],
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ "error", "unix" ],
    "semi": [ "error", "always" ],
    "no-unused-vars": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "warn",
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "comma-spacing": [ "error", { "before": false, "after": true } ],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-alert": "warn",
    "no-var": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [ "error", { "max": 1, "maxBOF": 0 } ],
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "arrow-spacing": [ "error", { "before": true, "after": true } ],
    "object-shorthand": [ "error", "always" ],
    "no-unused-expressions": "error",
    "react/jsx-boolean-value": [ "error", "always" ],
    "react/jsx-curly-spacing": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [ "error", { "extensions": [ ".js", ".jsx", ".ts", ".tsx" ] } ],
    "react/jsx-fragments": [ "error", "syntax" ],
    "react/jsx-max-props-per-line": [ "error", { "maximum": 1 } ],
    "react/jsx-no-bind": "off",
    "react/jsx-no-undef": "error",
    "react/jsx-sort-props": "off",
    "react/jsx-tag-spacing": [ "error", { "beforeSelfClosing": "always" } ],
    "react/no-array-index-key": "off",
    "react/no-typos": "warn",
    "react/no-unescaped-entities": "error",
    "react/prefer-stateless-function": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error"
  },
  "overrides": [
    {
      "files": [ "src/**/*.js", "src/**/*.jsx" ],
      "excludedFiles": "*.test.js",
      "rules": {
        // Add any additional rules or overrides specific to the src folder
      }
    }
  ],
};
