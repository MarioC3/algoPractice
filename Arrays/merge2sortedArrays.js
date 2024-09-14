function mergeArrays(nums1, nums2) {
	// A) Three pointer solution and new array -> O(m+n)
	// const nums3 = new Array(nums1 + nums2);

	// // Create pointers at the beginning of each array
	// let p1 = 0;
	// let p2 = 0;
	// let p3 = 0;

	// // Loop through both arrays, until one finishes (cool trick using &&)
	// while (p1 < nums1.length && p2 < nums2.length) {
	// 	if (nums1[p1] < nums2[p2]) {
	// 		nums3[p3] = nums1[p1];
	// 		p1++;
	// 		p3++;
	// 	} else {
	// 		nums3[p3] = nums2[p2];
	// 		p2++;
	// 		p3++;
	// 	}
	// }

	// // Don't forget to loop throught the remainder of both arrays (only one will actually loop, since we reached the end of one up top)
	// while (p1 < nums1.length) {
	// 	nums3[p3] = nums1[p1];
	// 	p1++;
	// 	p3++;
	// }
	// while (p2 < nums2.length) {
	// 	nums3[p3] = nums2[p2];
	// 	p2++;
	// 	p3++;
	// }

	// console.log(nums3);
	// return nums3;

	// B) Merge in place -> O((m+n)m)
	let p1 = 0;
	let p2 = 0;

	// Loop through both arrays, until one finishes (cool trick using &&)
	while (p1 < nums1.length && p2 < nums2.length) {
		if (nums1[p1] > nums2[p2]) {
			nums1.splice(p1, 0, nums2[p2]);
			p1++;
			p2++;
		} else {
			p1++;
		}
	}

	if (p2 < nums2.length) {
		nums1 = nums1.concat(nums2.slice(p2));
	}

	console.log(nums1);
	return nums1;
}

// cases
// mergeArrays([1, 2, 3], [4, 5, 6]);
mergeArrays([-1, 3], [-1, -1, 0, 0, 1, 2]);
// mergeArrays([6, 7, 8, 9, 10], [1, 2, 3, 4, 5]);
