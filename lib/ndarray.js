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

var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var floor = require( '@stdlib/math-base-special-floor' );
var accessors = require( './accessors.js' );


// VARIABLES //

// Blocksize for pairwise summation:
var BLOCKSIZE = 128;


// MAIN //

/**
* Computes the cumulative sum of strided array elements using pairwise summation.
*
* ## Method
*
* -   This implementation uses pairwise summation, which accrues rounding error `O(log2 N)` instead of `O(N)`. The recursion depth is also `O(log2 N)`.
*
* ## References
*
* -   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050](https://doi.org/10.1137/0914050).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - output array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NumericArray} output array
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcusumpw( 4, 0.0, x, 2, 1, y, 1, 0 );
* // y => [ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function gcusumpw( N, sum, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var ox;
	var oy;
	var s;
	var n;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, sum, ox, strideX, offsetX, oy, strideY, offsetY );
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	if ( N <= BLOCKSIZE ) {
		s = x[ ix ];
		y[ iy ] = sum + s;
		ix += strideX;
		iy += strideY;
		for ( i = 1; i < N; i++ ) {
			s += x[ ix ];
			y[ iy ] = sum + s;
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	n = floor( N/2 );
	gcusumpw( n, sum, x, strideX, ix, y, strideY, iy );
	iy += (n-1) * strideY;
	gcusumpw( N-n, y[ iy ], x, strideX, ix+(n*strideX), y, strideY, iy+strideY ); // eslint-disable-line max-len
	return y;
}


// EXPORTS //

module.exports = gcusumpw;
