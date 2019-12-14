# jquery-viewer

[![Build Status](https://img.shields.io/travis/fengyuanchen/jquery-viewer.svg)](https://travis-ci.org/fengyuanchen/jquery-viewer) [![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/jquery-viewer.svg)](https://codecov.io/gh/fengyuanchen/jquery-viewer) [![Downloads](https://img.shields.io/npm/dm/jquery-viewer.svg)](https://www.npmjs.com/package/jquery-viewer) [![Version](https://img.shields.io/npm/v/jquery-viewer.svg)](https://www.npmjs.com/package/jquery-viewer)

> A jQuery plugin wrapper for [Viewer.js](https://github.com/fengyuanchen/viewerjs).

- [Demo](https://fengyuanchen.github.io/jquery-viewer)

## Main

```text
dist/
├── jquery-viewer.js        (UMD)
├── jquery-viewer.min.js    (UMD, compressed)
├── jquery-viewer.common.js (CommonJS, default)
└── jquery-viewer.esm.js    (ES Module)
```

## Getting started

### Installation

```shell
npm install jquery-viewer jquery viewerjs
```

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/viewer.js"></script><!-- Viewer.js is required -->
<link  href="/path/to/viewer.css" rel="stylesheet">
<script src="/path/to/jquery-viewer.js"></script>
```

### Usage

Initialize with `$.fn.viewer` method.

```html
<!-- a block container is required -->
<div>
  <img id="image" src="picture.jpg" alt="Picture">
</div>

<div>
  <ul id="images">
    <li><img src="picture-1.jpg" alt="Picture 1"></li>
    <li><img src="picture-2.jpg" alt="Picture 2"></li>
    <li><img src="picture-3.jpg" alt="Picture 3"></li>
  </ul>
</div>
```

```js
var $image = $('#image');

$image.viewer({
  inline: true,
  viewed: function() {
    $image.viewer('zoomTo', 1);
  }
});

// Get the Viewer.js instance after initialized
var viewer = $image.data('viewer');

// View a list of images
$('#images').viewer();
```

## Options

See the available [options](https://github.com/fengyuanchen/viewerjs#options) of Viewer.js.

```js
$().viewer(options);
```

## Methods

See the available [methods](https://github.com/fengyuanchen/viewerjs#methods) of Viewer.js.

```js
$().viewer('method', argument1, , argument2, ..., argumentN);
```

## Events

See the available [events](https://github.com/fengyuanchen/viewerjs#events) of Viewer.js.

```js
$().on('event', handler);
```

## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.viewer.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="jquery-viewer.js"></script>
<script>
  $.fn.viewer.noConflict();
  // Code that uses other plugin's "$().viewer" can follow here.
</script>
```

## Browser support

It is the same as the [browser support of Viewer.js](https://github.com/fengyuanchen/viewerjs#browser-support). As a jQuery plugin, you also need to see the [jQuery Browser Support](https://jquery.com/browser-support/).

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
