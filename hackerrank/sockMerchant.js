/**
 * John works at a clothing store. He has a large pile of socks that he must pair 
 * by color for sale. Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.

	* For example, there are n = 7 socks with colors arr = [1, 2, 1, 2, 1, 3, 2]. 
	* There is one pair of color and one of color.
	* There are three odd socks left, one of each color. The number of pairs is 2.
*/

// SOCK MERCHANT


function sockMerchant(socks) {
	let collections = {};
	let pairs = 0;

	for(let i = 0; i < socks.length; i++) {
		let count = 0;
		for(let j = 0; j < socks.length; j++) {
			if(socks[i] === socks[j]) {
				count++;
			}
		}
		collections[socks[i]] = count;
	}
	for(const key in collections) {
		pairs += Math.floor(collections[key]/2);
	}

	return pairs;
}
