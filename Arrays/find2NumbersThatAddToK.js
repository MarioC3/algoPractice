function binarySearch(arr, startIndex, target) {
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
}

function findSum(nums, k) {
	// A) Naive approach -> O(n^2)
	// const output = [];

	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] + nums[j] === k) {
	// 			output.push(nums[i]);
	// 			output.push(nums[j]);
	// 			console.log(output);
	// 			return output;
	// 		}
	// 	}
	// }

	// B) 2 Pointers -> O(nlog n) -> Because of the sort
	// const output = [];

	// // array needs to be sorted in ascending order
	// const numsSorted = nums.sort((a, b) => a - b);

	// // pointers left and right of the sorted array
	// let pl = 0;
	// let pr = numsSorted.length - 1;

	// while (pl < pr) {
	// 	const sum = numsSorted[pl] + numsSorted[pr];

	// 	if (sum < k) pl++;
	// 	if (sum > k) pr--;
	// 	if (sum === k) {
	// 		output.push(numsSorted[pl]);
	// 		output.push(numsSorted[pr]);
	// 		console.log(output);
	// 		return output;
	// 	}
	// }

	// C) With Binary Search
	const numsSorted = nums.sort((a, b) => a - b);
	const n = numsSorted.length;

	for (let i = 0; i < n; i++) {
		const num = numsSorted[i];
		const complement = k - num;
		const index = binarySearch(numsSorted, i, complement);
		if (index !== -1) {
			return [num, complement];
		}
	}

	return [];
}

console.log(findSum([2, 4, 6, 8, 10, 19], 21));
console.log(findSum([-4, -8, 0, -7, -3, -10], -15));
console.log(findSum([49, 17, 15, 22, -45, 29, 18, -15, 11, 37, 12, -52], 0));
