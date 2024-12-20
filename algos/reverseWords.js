function reverseWords(message) {
	let left = 0;
	let right = message.length - 1;

	while (left < right) {
		const temp = message[left];
		message[left] = message[right];
		message[right] = temp;

		left++;
		right--;
	}
}

const message = [
	"c",
	"a",
	"k",
	"e",
	" ",
	"p",
	"o",
	"u",
	"n",
	"d",
	" ",
	"s",
	"t",
	"e",
	"a",
	"l",
];

reverseWords(message);
console.log(message);
