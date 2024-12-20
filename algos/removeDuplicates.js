// Set - O(n)
const removeDuplicates = (arr) => {
	const set = new Set(arr);
	return [...set];
};

// Object tracking - O(n)
// const removeDuplicates = (arr) => {
// 	const uniqueArray = [];
// 	const seen = {};
// 	for (const item of arr) {
// 		if (!seen[item]) {
// 			seen[item] = true;
// 			uniqueArray.push(item);
// 		}
// 	}
// 	return uniqueArray;
// };

// indexOf - O(n^2)
// const removeDuplicates = (arr) => {
// 	return arr.filter((item, index) => arr.indexOf(item) === index);
// };

console.log(removeDuplicates([1, 2, 3, 3, 2, 5, 6, 7, 9, 5, 6, 3, 8, 6, 3, 9]));
