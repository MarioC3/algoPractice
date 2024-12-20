class UrlNode {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.previous = null;
	}
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
	this.left = new UrlNode("left");
	this.right = new UrlNode("right");
	this.left.next = this.right;
	this.right.previous = this.left;
	this.visit(homepage);
	this.current = null;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
	const urlNode = new UrlNode(url);
	const next = this.right;
	const previous = this.current ?? this.right.previous;
	next.previous = urlNode;
	previous.next = urlNode;
	urlNode.next = next;
	urlNode.previous = previous;
	this.current = urlNode;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
	let current = this.current ?? this.right.previous;

	while (current && steps > 0) {
		current = current.previous;
		steps--;
	}

	if (!current || current === this.left) {
		const first = this.left.next;
		this.current = first;
		return first.val;
	}

	this.current = current;
	return current.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
	let current = this.current ?? this.left.next;

	while (current && steps > 0) {
		current = current.next;
		steps--;
	}

	if (!current || current === this.right) {
		const last = this.right.previous;
		this.current = last;
		return last.val;
	}

	this.current = current;
	return current.val;
};

const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
browserHistory.back(1);
console.log(browserHistory.current.val);
browserHistory.back(1);
console.log(browserHistory.current.val);

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
