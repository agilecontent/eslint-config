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
