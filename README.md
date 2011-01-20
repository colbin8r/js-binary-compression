JavaScript Binary Compression
=============================

JavaScript Binary Compression is a library for compressing an array of booleans (on/off or true/false data type) into an integer. It does this by treating each boolean as binary (which it is) and converting the binary/base 2 number into a decimal/base 10 number.

This sort of compression might be ideal in configuration or permission files, where large amounts of boolean data might need to be handled and stored frequently.

The idea for this project was inspired by Richard H., who originally wrote it in BASIC, RPG, and then SAP. I have sinced slightly revised the algorithm and converted it into JavaScript and PHP.

Usage
-----

The library is composed of only two functions (`compress()` and `uncompress()`) in the `BinaryCompression` object.

### Compress

Compressing a set of booleans is easy. Setup your booleans in an array like so:

	var data = [false, false, false, true];

Then make a call to `BinaryCompression.compress()` and pass it your aray:

	var compressedData = BinaryCompression.compress(data); // returns 8
	
Now you have your data stored in a single integer that you can easily pass around!

### Uncompress

To get your data back out of it's compressed format, pass your integer in to `BinaryCompression.uncompress()`:

	var data = BinaryCompression.uncompress(compressedData);
	var data = BinaryCompression.compress(8); // returns [false, false, false, true]
	
That's it! You have your data back.

Algorithm
---------

The algorithm used is very simple as long as one has a working knowledge of binary.

Binary values can only have two states: off or on. These are represented as 0 and 1, respectively. Decimal, however, can have up to 10 states: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.

Additionally, binary stores its digits differently than decimal. For example, the *rightmost* position in decimal is the ones place. The next position to the *left* is the tens, then the hundreds, then the thousands, and so on by factors of 10. In binary, the *leftmost* position is the ones. The next position to the *right* is the twos, then the fours, then the eights, and so on, by factors of 2.

### Compressing binary values
1. Convert the boolean to a 0 (false) or 1 (true), if needed
2. Multiply the boolean value by the current position value (e.g. 3rd position => value of 8; 4th position => value of 16)
3. Add up all the results from step 2 and return

### Uncompressing integer values
1. The next boolean value is the result of performing modulo of 2 on the passed integer
2. Place the boolean value into the result stack
3. Divide the integer by two
4. If the integer is 1, add true to the result stack
5. If the integer is less than 1, return the result stack
