// JavaScript Document

var BinaryCompression = {
	/* @package binary-compression
	 * @name compress
  	 * @author dave8513 https://github.com/dave8513/js-binary-compression
	 * @description Compresses binary (boolean) values by converting from base-2 to base-10 (8:1 compression ratio)
	 * @param bools Array of booleans
	 */
	compress: function(bools) {
		var result = 0; // stores the integer result
		var positionValue = 1; // holds the value of the current position (e.g. 1, 2, 4, 8, etc.)
		var length = bools.length; // how many bools to store
		
		for (var i = 0; i < length; i++) { // loop through the bools
		
			// convert the bools from true to 1 and false to 0
			if (bools[i] == true) {
				value = 1;
			} else {
				value = 0;
			}
			
			result += value * positionValue; // add the result to the integer
			
			positionValue *= 2; // increase the posiiton value
		}
		
		return result; // we are done. return the result
	},
	
	/* @package binary-compression
	 * @name uncompress
  	 * @author dave8513 https://github.com/dave8513/js-binary-compression
	 * @description Uncompresses a compressed integer into an array of boolean values
	 * @param bools Array of booleans
	 */
	uncompress: function(integer) {
	
		var result = []; // holds the array of boolean values
		var flag = 0; // holds the current integer representation of the boolean
		var value = false; // hoolds the current boolean representation of the booleanl
		var i = 0; // counter used to store results in stack
		
		while (true) { // infinite loop
			flag = integer % 2; // get the next flag
			
			// convert the flag to boolean
			if (flag == 1) {
				value = true;
			} else {
				value = false;
			}
			
			result[i] = value; // add the flag to the result stack
			
			integer -= flag; // subtract the flag from the integer
   			integer /= 2; // divide the integer by 2
			i++; // increase the counter
			
			// we are done if these pass
			if (integer == 1) { // if integer is 1 the last flag is true
				result[i] = true; // add true to the result stack
			} else if (integer < 1) { // if less than 1
				return result; // we are done. return the result
			}
		}
	}
};
