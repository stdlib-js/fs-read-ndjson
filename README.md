<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# readNDJSON

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Read a file as [newline-delimited JSON][ndjson].



<section class="usage">

## Usage

To use in Observable,

```javascript
readNDJSON = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-ndjson@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/fs-read-ndjson/tags). For example,

```javascript
readNDJSON = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-ndjson@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var readNDJSON = require( 'path/to/vendor/umd/fs-read-ndjson/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-ndjson@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.readNDJSON;
})();
</script>
```

<a name="read-ndjson"></a>

#### readNDJSON( file\[, options], clbk )

Asynchronously reads a file as [newline-delimited JSON][ndjson].

```javascript
var join = require( 'path' ).join;

readNDJSON( join( __dirname, 'examples', 'fixtures', 'file.ndjson' ), clbk );

function clbk( error, data ) {
    if ( error ) {
        throw error;
    }
    console.log( data );
}
```

The function accepts the following `options`:

-   **encoding**: file encoding.
-   **flag**: file status flag.
-   **reviver**: [JSON][json] transformation function.

The `options` parameter may also be a string specifying the file `encoding`.

```javascript
var join = require( 'path' ).join;

readNDJSON( join( __dirname, 'examples', 'fixtures', 'file.ndjson' ), 'utf8', clbk );

function clbk( error, data ) {
    if ( error ) {
        throw error;
    }
    console.log( data );
}
```

#### readNDJSON.sync( file\[, options] )

Synchronously reads a file as [newline-delimited JSON][ndjson].

```javascript
var join = require( 'path' ).join;
var instanceOf = require( '@stdlib/assert-instance-of' );

var out = readNDJSON.sync( join( __dirname, 'examples', 'fixtures', 'file.ndjson' ) );
if ( instanceOf( out, Error ) ) {
    throw out;
}
console.log( out );
```

The function accepts the same `options` as [`readNDJSON()`](#read-ndjson) above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the `encoding` option is set to `utf8` and the file has a UTF-8 [byte order mark][bom] (BOM), the byte order mark is **removed** before attempting to parse as [newline-delimited JSON][ndjson].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript">
(function () {
var join = require( 'path' ).join;
var readNDJSON = require( '@stdlib/fs-read-ndjson' );

var file = join( __dirname, 'examples', 'fixtures', 'file.ndjson' );

// Synchronously read file contents...
var data = readNDJSON.sync( file, 'utf8' );
// returns [...]

data = readNDJSON.sync( 'beepboop', {
    'encoding': 'utf8'
});
// returns <Error>

// Asynchronously read file contents...
readNDJSON( file, clbk );
readNDJSON( 'beepboop', clbk );

function clbk( error, data ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'JSON file does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.log( 'Package description: %s', data[2].description );
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-read-ndjson.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-read-ndjson

[test-image]: https://github.com/stdlib-js/fs-read-ndjson/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/fs-read-ndjson/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-read-ndjson/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-read-ndjson?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-read-ndjson.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-read-ndjson/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-read-ndjson/tree/deno
[deno-readme]: https://github.com/stdlib-js/fs-read-ndjson/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/fs-read-ndjson/tree/umd
[umd-readme]: https://github.com/stdlib-js/fs-read-ndjson/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/fs-read-ndjson/tree/esm
[esm-readme]: https://github.com/stdlib-js/fs-read-ndjson/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/fs-read-ndjson/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-read-ndjson/main/LICENSE

[json]: http://www.json.org/

[ndjson]: http://www.ndjson.org/

[bom]: https://en.wikipedia.org/wiki/Byte_order_mark

</section>

<!-- /.links -->
