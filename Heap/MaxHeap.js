
////////////!    Max-Heap    ////////////!

class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }
  
    extractMax() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return max;
    }
  
    heapifyDown(index) {
      let largest = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
        largest = leftChildIndex;
      }
  
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
        largest = rightChildIndex;
      }
  
      if (largest !== index) {
        this.swap(index, largest);
        this.heapifyDown(largest);
      }
    }
  
    peek() {
      return this.heap.length === 0 ? null : this.heap[0];
    }
  
    display() {
      console.log(this.heap);
    }
  }
  
  const maxHeap = new MaxHeap();
  
  maxHeap.insert(5);
  maxHeap.insert(3);
  maxHeap.insert(8);
  maxHeap.insert(1);
  
  console.log(maxHeap.extractMax());
  
  maxHeap.display();
  