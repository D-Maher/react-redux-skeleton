module.exports = {
  extends: "airbnb",
  globals: {
    FormData: true,
    window: true,
    document: true,
  },
  env: {
    browser: true,
    node: true,
    serviceworker: true,
  },
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "import/prefer-default-export": 1,
    "react/prop-types": 0,
    "react/require-default-props": 0,
  }
}
