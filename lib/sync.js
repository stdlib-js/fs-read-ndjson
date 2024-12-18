/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert-is-plain-object' );
var readFile = require( '@stdlib/fs-read-file' ).sync;
var removeBOM = require( '@stdlib/string-remove-utf8-bom' );
var parseNDJSON = require( '@stdlib/utils-parse-ndjson' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Synchronously reads a file as newline-delimited JSON.
*
* @param {(string|Buffer|integer)} file - file path or file descriptor
* @param {(Options|string)} [options] - options
* @param {(string|null)} [options.encoding] - file encoding
* @param {string} [options.flag] - file status flag
* @param {Function} [options.reviver] - JSON reviver
* @throws {TypeError} options argument must be either a string or an object
* @returns {(Array|Error)} array of results or an error
*
* @example
* var resolve = require( 'path' ).resolve;
* var instanceOf = require( '@stdlib/assert-instance-of' );
*
* var out = readNDJSONSync( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ) );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.dir( out );
*/
function readNDJSONSync( file, options ) {
	var opts;
	var f;
	if ( arguments.length > 1 ) {
		if ( isString( options ) ) {
			opts = {
				'encoding': options
			};
		} else {
			if ( !isObject( options ) ) {
				throw new TypeError( format( 'invalid argument. Options argument must be either a string or an object. Value: `%s`.', options ) );
			}
			opts = options;
		}
	} else {
		opts = {};
	}
	f = readFile( file, opts );
	if ( instanceOf( f, Error ) ) {
		return f;
	}
	f = f.toString();
	if ( opts.encoding === 'utf8' ) {
		f = removeBOM( f );
	}
	if ( opts.reviver ) {
		return parseNDJSON( f, opts.reviver );
	}
	return parseNDJSON( f );
}


// EXPORTS //

module.exports = readNDJSONSync;
