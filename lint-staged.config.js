module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "**/*.ts?(x)": () => "yarn check:types",
  "*.{json,yaml,yml}": ["prettier --write --ignore-path .gitignore"],
}
