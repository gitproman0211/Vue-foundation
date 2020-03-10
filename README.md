# 🛫 Flyline-frontend 🛬

## Table of contents

1. [Overview](#overview)
2. [Project setup](#project-setup)
3. [JS coding standards](#js-coding-standards)
4. [HTML/CSS standards](#htmlcss-standards)

## Overview

The frontend web application for FlyLine project.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## JS coding standards

### Components

Components separated by size as [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

```
.
├── atoms
├── molecules
└── organisms
```

#### Atoms
> Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

#### Molecules
> Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

#### Organisms
> Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

### Linting

Code has to be fomatted by [Prettier](https://prettier.io/) and linted by [ESLint](https://eslint.org/), which already combined with `eslint-plugin-prettier`.
We recommend you setup format on save with prettier in your favourite code editor.

## HTML/CSS standards

Here are styling standards

We use [BEM](http://getbem.com/naming/) notation for class names.
### HTML
```
<div class="block block--mod">
  <span class="block__elem"></span>
</div>
```
### CSS
```
.block {
  color: #240;
}

.block__elem {
  color: #042;
}
// block -> block name
// __ -> element separator
// elem -> element name

.block--color-black {
  color: #000;
}
// block -> block name
// -- modificator separator
// color-black -> modification name
```
### Using with preprocessors:

❌ Don't
```
.block {
  color: #240;
  &__elem {
    color: #042;
  }
}
```
> It's hard to look for class name through editor's search later

✅ Do
```
.block {
  color: #240;
}

.block__elem {
  color: #042;
}
```

CSS builds on [SCSS](https://sass-lang.com/), and [Foundation 6](https://get.foundation/sites/docs/).
It's an advanced CSS framework with a list of good features:
1. Including might be [adjusted](https://get.foundation/sites/docs/sass.html#adjusting-css-output).
2. Amazing X/Y axis [grid system](https://get.foundation/sites/docs/xy-grid.html).
3. Good mixins e.g `@include breakpoint(large) {}`. More information in [docs](https://get.foundation/sites/docs)
4. [Configurable](https://get.foundation/sites/docs/sass.html#adjusting-css-output) from the box, please have a look to `src/styles/_settings.scss` file.
