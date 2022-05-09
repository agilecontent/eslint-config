# @agilecontent/eslint-config-frontend

Base configuration for eslint, used internally by @agilecontent

## How to use

Add this repository as a dev dependency, alongside eslint:

```shell
npm i -D @agilecontent/eslint-config-frontend@github:agilecontent/stylelint-config-frontend eslint
```

Extend this config in your project's. Example with .eslintrc.js:

```js
module.exports = {
  extends: [
    //...other extended config
    '@agilecontent/eslint-config-frontend',
  ],
  rules: {
    //Add you own rules here
  },
};
```

**IMPORTANT:** This config includes `eslint-config-prettier`, so it is very important to put this as
the **last** extended config

## Rule reasoning

- `arrow-body-style`: if the only expression in an arrow function is a `return`, the function should
  not have braces
- `no-duplicate-imports`: prevents the imports to become a mess
- `react/prefer-stateless-function`: if a react class component only has a `render()`, it should be
  a function component
- `react/jsx-fragments`: makes explicit the use of react fragment, instead of the `<></>` syntax, as
  the short syntax does not support attributes (i.e. `key=`)
- `react/self-closing-comp`: empty components should be self closing (i.e. `<div/>` instead of
  `<div></div>`)
- `curly`: adds curly braces to single statement conditionals and loops to prevent prettier to make
  them single line

## Contributing

Just create a Pull Request with the reasoning for the change in rules or config.

If adding a rule that is fixable via `--fix`, set the severity to `"warn"`.
