

/** 
 *  Is a string balanced ?

	Write a code that checks if a sequence of different types of brackets (or parentheses) is correctly balanced.

*/

const parentheses = '{()[{({})[]()}]}([])';
const TOKENS = { '{': ['{', '}'], '[': ['[', ']'], '(': ['(', ')'] };

function isBalanced(string) {
	let stack = [];
	for(let i = 0; i < string.length; i++) {
		const char = string[i];
		if (isOpen(char)) {
			stack.push(char);
		} else {
			if(stack.length === 0 || !matches(stack.pop(), char)) {
				return false;
			}
		}
	}
	console.log(stack.length === 0);
	return (stack.length === 0);
}

function isOpen(str) {
	for(let i in TOKENS) {
		if(str === i) {
			return true;
		}
	}
	return false;
}


function matches(openString, closeString) {
	for(let i in TOKENS) {
		if(openString === i) {
			return TOKENS[i][1] === closeString;
		}
	}
  return false;
}

isBalanced(parentheses);