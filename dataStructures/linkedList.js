class ListNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new ListNode(-1);
		this.tail = this.head;
	}

	/**
	 * @param {number} index
	 * @return {number}
	 */
	get(index) {
		let current = this.head.next;
		let i = 0;
		while (current) {
			if (index === i) return current.value;
			i++;
			current = current.next;
		}
		return -1;
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	insertHead(val) {
		const newNode = new ListNode(val);
		newNode.next = this.head.next;
		this.head.next = newNode;
		if (!newNode.next) this.tail = newNode;
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	insertTail(val) {
		const newNode = new ListNode(val);
		this.tail.next = newNode;
		this.tail = newNode;
	}

	/**
	 * @param {number} index
	 * @return {boolean}
	 */
	remove(index) {
		let current = this.head;
		let i = 0;
		while (i < index && current) {
			i++;
			current = current.next;
		}

		if (current && current.next) {
			if (current.next === this.tail) this.tail = current;
			current.next = current.next.next;
			return true;
		}

		return false;
	}

	/**
	 * @return {number[]}
	 */
	getValues() {
		let current = this.head.next;
		let values = [];
		while (current) {
			values.push(current.value);
			current = current.next;
		}

		return values;
	}
}

const linkedList = new LinkedList();
linkedList.insertTail(1);
linkedList.insertTail(2);
linkedList.get(1);
linkedList.remove(1)
console.log(linkedList);
