# metalsmith-html-postcss

[![Build Status](https://travis-ci.org/devinus/metalsmith-html-postcss.svg?branch=master)](https://travis-ci.org/devinus/metalsmith-html-postcss)

Run [html-postcss](https://github.com/Rebelmail/html-postcss) on your HTML.

## Install

```sh-session
$ npm install metalsmith-html-postcss --save
```

## Usage

```js
var htmlPostcss = require('metalsmith-html-postcss');
metalsmith.use(htmlPostcss(plugins, cheerioOpts, postcssOpts));
```
