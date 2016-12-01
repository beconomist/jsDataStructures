function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newHeadNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newHeadNode;
  else this.tail = newHeadNode;
  this.head = newHeadNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newTailNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newTailNode;
  else this.head = newTailNode;
  this.tail = newTailNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  var currentNode = this.head;
  var result = [];
  var currentIndex = 0;
  while (currentNode) {
    if (currentNode.value === value) result.push(currentIndex);
    currentIndex++;
    currentNode = currentNode.next;
  }
  return result;
}


var ll = new LinkedList();

ll.addToHead(5);
ll.addToHead(2);
ll.addToHead(3);
ll.addToHead(5);

ll.indexOf(5);
