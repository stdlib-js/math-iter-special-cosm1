/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var iterMap = require( '@stdlib/math-iter-tools-map' );
var cosm1 = require( '@stdlib/math-base-special-cosm1' );


// MAIN //

/**
* Returns an iterator which iteratively computes `cos(x) - 1`.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param {Iterator} iterator - input iterator
* @throws {TypeError} must provide an iterator protocol-compliant object
* @returns {Iterator} iterator
*
* @example
* var uniform = require( '@stdlib/random-iter-uniform' );
*
* var iter = iterCosm1( uniform( 0.0, 6.28 ) );
*
* var v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* // ...
*/
function iterCosm1( iterator ) {
	return iterMap( iterator, cosm1 );
}


// EXPORTS //

module.exports = iterCosm1;
