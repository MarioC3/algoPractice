const binarySearch = (arr, startIndex, target) => {
	let low = startIndex + 1;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (arr[mid] === target) return mid;

		if (arr[mid] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
};

const hasDuplicates = (nums) => {
	// const sortedNums = nums.sort((a, b) => a - b);

	// B) With Pointers using the index -> O(n log n)
	// for (let i = 0; i < sortedNums.length; i++) {
	// 	if (i === sortedNums.length - 1) return false;
	// 	if (sortedNums[i] === sortedNums[i + 1]) return true;
	// }

	// A) With Binary Search -> O(n log n)
	// for (let i = 0; i < sortedNums.length; i++) {
	// 	const found = binarySearch(sortedNums, i, sortedNums[i]);
	// 	if (found !== -1) return true;
	// }
	// return false;

	// C) With Hash Set -> O(n)
	const hashSet = new Set();
	for (const n of nums) {
		if (hashSet.has(n)) return true;
		hashSet.add(n);
	}
	return false;
};

const nums = [1, 4, 3, 8, 6];
// const nums = [1, 2, 3, 3];
// const nums = [1, 2, 3, 312, 23, 45, 12, 2];
console.log(hasDuplicates(nums));
