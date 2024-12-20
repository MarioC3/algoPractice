class NodeLinkedList {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class MyLinkedList {
	constructor() {
		this.left = new NodeLinkedList(0);
		this.right = new NodeLinkedList(0);
		this.left.next = this.right;
		this.right.prev = this.left;
	}

	get(index) {
		let current = this.left.next;

		while (current && index > 0) {
			current = current.next;
			index--;
		}

		if (current && current !== this.right && index === 0) return current.val;

		return -1;
	}

	addAtHead(val) {
		const newNode = new NodeLinkedList(val);
		const next = this.left.next;
		const prev = this.left;
		prev.next = newNode;
		next.prev = newNode;
		newNode.next = next;
		newNode.prev = prev;
	}

	addAtTail(val) {
		const newNode = new NodeLinkedList(val);
		const next = this.right;
		const prev = this.right.prev;
		prev.next = newNode;
		next.prev = newNode;
		newNode.next = next;
		newNode.prev = prev;
	}

	addAtIndex(index, val) {
		let current = this.left.next;

		while (current && index > 0) {
			current = current.next;
			index--;
		}

		if (current && index === 0) {
			const newNode = new NodeLinkedList(val);
			const next = current;
			const prev = current.prev;
			prev.next = newNode;
			next.prev = newNode;
			newNode.next = next;
			newNode.prev = prev;
		}
	}

	deleteAtIndex(index) {
		let current = this.left.next;

		while (current && index > 0) {
			current = current.next;
			index--;
		}

		if (current && current !== this.right && index === 0) {
			const next = current.next;
			const prev = current.prev;
			prev.next = next;
			next.prev = prev;
		}
	}
}

const list = new MyLinkedList();
list.addAtHead(3);
list.addAtHead(2);
list.addAtTail(5);
list.addAtIndex(2, 4);
list.addAtIndex(4, 6);
list.addAtIndex(0, 1);
list.deleteAtIndex(5)
list.deleteAtIndex(0)
console.log("left", list.left);
console.log("right", list.right);
const val1 = list.get(0);
console.log(val1);
const val2 = list.get(1);
console.log(val2);
const val3 = list.get(2);
console.log(val3);
const val4 = list.get(3);
console.log(val4);
const val5 = list.get(4);
console.log(val5);
const val6 = list.get(5);
console.log(val6);

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
