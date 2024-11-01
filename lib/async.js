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
var isFunction = require( '@stdlib/assert-is-function' );
var readFile = require( '@stdlib/fs-read-file' );
var removeBOM = require( '@stdlib/string-remove-utf8-bom' );
var parseNDJSON = require( '@stdlib/utils-parse-ndjson' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Asynchronously reads a file as newline-delimited JSON.
*
* @param {(string|Buffer|integer)} file - file path or file descriptor
* @param {(Options|string)} [options] - options
* @param {(string|null)} [options.encoding] - file encoding
* @param {string} [options.flag] - file status flag
* @param {Function} [options.reviver] - JSON reviver
* @param {Callback} clbk - callback
* @throws {TypeError} options argument must be either a string or an object
* @throws {TypeError} callback argument must be a function
*
* @example
* var resolve = require( 'path' ).resolve;
*
* readNDJSON( resolve( __dirname, '..', 'examples', 'fixtures', 'file.ndjson' ), onNDJSON );
*
* function onNDJSON( error, data ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( data );
* }
*/
function readNDJSON( file, options, clbk ) {
	var opts;
	var done;
	if ( arguments.length < 3 ) {
		opts = {};
		done = options;
	} else {
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
		done = clbk;
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', done ) );
	}
	readFile( file, opts, onRead );

	/**
	* Callback invoked upon reading a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(Buffer|string)} file - file contents
	* @returns {void}
	*/
	function onRead( error, file ) {
		if ( error ) {
			return done( error );
		}
		file = file.toString();
		if ( opts.encoding === 'utf8' ) {
			file = removeBOM( file );
		}
		if ( opts.reviver ) {
			file = parseNDJSON( file, opts.reviver );
		} else {
			file = parseNDJSON( file );
		}
		if ( instanceOf( file, Error ) ) {
			return done( file );
		}
		done( null, file );
	}
}


// EXPORTS //

module.exports = readNDJSON;
