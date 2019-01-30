/**
 * 
 * Given a sequence of numbers, get the sequence sum of the sequence.
 * 
 * E.g 5,9,6 will result in a sequence sum of 5 + 6 + 7 + 8 + 9 + 8 + 7 + 6 = 56
 * 
*/

// SEQUENCE SUM

function getSequenceSum(i, j, k) {
	let sequenceSum = 0, y = 0, z = 1;
	let prevDiff = Math.abs(i - j);
	let nextDiff = Math.abs(j - k);

	for (y; y <= prevDiff; y++) {
		sequenceSum += (i > j) ? i - y : i + y;
	}

	for (z; z <= nextDiff; z++) {
		sequenceSum += (j > k) ? j - z : j + z;
	}
	
	return sequenceSum; 
}
