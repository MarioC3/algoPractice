// With Set - O(n)
const removeDuplicates = (arr) => {
	const set = new Set(arr);
	return [...set];
};

console.log(removeDuplicates([1, 2, 3, 3, 2, 5, 6, 7, 9]));
