function mergeRanges(meetings) {
	const sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime);

	const mergedMeetings = [sortedMeetings[0]];

	for (let i = 1; i < sortedMeetings.length; i++) {
		const currentMeeting = sortedMeetings[i];
		const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

		if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
			lastMergedMeeting.endTime = Math.max(
				currentMeeting.endTime,
				lastMergedMeeting.endTime
			);
		} else {
			mergedMeetings.push(currentMeeting);
		}
	}

	return mergedMeetings;
}

// const ranges = [
// 	{ startTime: 1, endTime: 3 },
// 	{ startTime: 2, endTime: 4 },
// ];
// const ranges = [
// 	{ startTime: 5, endTime: 6 },
// 	{ startTime: 6, endTime: 8 },
// ];
const ranges = [
	{ startTime: 1, endTime: 8 },
	{ startTime: 2, endTime: 5 },
];
console.log(mergeRanges(ranges));
