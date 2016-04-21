# eslint-plugin-const-uppercase

const must be written uppercase

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-const-uppercase`:

```
$ npm install eslint-plugin-const-uppercase --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-const-uppercase` globally.

## Usage

Add `const-uppercase` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "const-uppercase"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "const-uppercase/const-uppercase": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





