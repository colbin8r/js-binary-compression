// JavaScript Document

var BinaryCompression = {
	/* @package binary-compression
	 * @name compress
  	 * @author dave8513 https://github.com/dave8513/js-binary-compression
	 * @description Compresses binary (boolean) values by converting from base-2 to base-10 (8:1 compression ratio)
	 * @param bools Array of booleans
	 */
	compress: function(bools) {
		var result = 0;
		var positionValue = 1;
		var length = bools.length;
		
		for (var i = 0; i < length; i++) {
		
			if (bools[i] == true) {
				value = 1;
			} else {
				value = 0;
			}
			
			result += value * positionValue;
			
			positionValue *= 2;
		}
		
		return result;
	},
	
	/* @package binary-compression
	 * @name uncompress
  	 * @author dave8513 https://github.com/dave8513/js-binary-compression
	 * @description Uncompresses a compressed integer into an array of boolean values
	 * @param bools Array of booleans
	 */
	uncompress: function(integer) {
		var result = [];
		var flag = 0;
		var value = false;
		var i = 0;
		while (true) {
			flag = integer % 2;

			if (flag == 1) {
				value = true;
			} else {
				value = false;
			}
			result[i] = value;

			integer /= 2;
			i++;
			
			if (integer == 1) {
				result[i] = true;
			} else if (integer < 1) {
				return result;
			}
		}
	}
};
