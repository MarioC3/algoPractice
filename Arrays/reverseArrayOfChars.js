function reverse(arrayOfChars) {
	// Brute force -> O(n^2)
	// for (let i = 0; i < arrayOfChars.length; i++) {
	// 	const removed = arrayOfChars.pop();
	// 	arrayOfChars.splice(i, 0, removed);
	// }

	//Swapping -> O(n)
	let left = 0;
	let right = arrayOfChars.length - 1;

	while (left < right) {
		const temp = arrayOfChars[left];
		arrayOfChars[left] = arrayOfChars[right];
		arrayOfChars[right] = temp;
		left++;
		right--;
	}
}

const array = "ABCDE".split("");
reverse(array);
console.log(array);
