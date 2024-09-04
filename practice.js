// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let priv = this.head
//             while(priv.next){
//                 priv = priv.next
//             }
//             priv.next = node
//         }
//         this.size++
//     }

//     insert(value , index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0 ; i<index-1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeFrom(index){
//         if(index < 0 || index >= this.size){
//             return null
//         }
//         let removedNode
//         if(index === 0){
//             removedNode = this.head
//             this.head = this.head.next
//         }else{
//             let prev = this.head
//             for(let i=0 ; i<index-1 ; i++){
//                 prev = prev.next
//             }
//             removedNode = prev.next
//             prev.next = removedNode.next
//         }
//         this.size--
//         return removedNode.value
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.head.value === value){
//             this.head = this.head.next
//             this.size--
//             return value
//         }else{
//             let prev = this.head
//             while(prev.value && prev.next.value != value){
//                 prev = prev.next
//             }
//             let removedNode
//             if(prev.next){
//                 removedNode = prev.next
//                 prev.next = removedNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     reverse(){
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("List is Empty");
//         }else{
//             let curr = this.head
//             let listValue = ""
//             while(curr){
//                 listValue += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log("List Values : ",listValue);
            
//         }
//     }
// }

// const list  = new linkedList()
// console.log("List is empty",list.isEmpty())
// console.log("List size", list.getSize());

// list.insert(50,0)
// list.insert(100,0)
// list.insert(500,2)
// list.print()

// console.log(list.removeValue(100));
// list.print()



//////////////!    Queue   /////////////

// class Queue {
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }

//     size(){
//         return this.items.length
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(30)
// queue.enqueue(50)
// queue.enqueue(100)


// console.log(queue.peek())

// queue.print()



//////////////!    Queue Object   //////////////!

// class Queue {
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear - this.front
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.print()



//////////////!   Stack LinkedList   ////////////////

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     size(){
//         return this.size
//     }

//     push(value){
//         let newNode = new Node(value)
//         if(this.head === null){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//         this.size++
//     }

//     peek(){
//         if(this.isEmpty()){
//             return "List is Empty"
//         }else{
//           return this.head.value
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return "List is Empty"
//         }else{
//             let curr = this.head
//             let listValue = ""
//             while(curr){
//                 listValue += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log("Listed Values :",listValue)
//         }
//     }
// }

// const list = new Stack()
// console.log(list.isEmpty())
// list.push(50)
// list.push(70)
// list.push(80)
// console.log(list.peek())
// list.print()


////////////!    Hash-Table    ////////////!

// class HashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     hash(key) {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total += key.charCodeAt(i);
//       }
//       return total % this.size;
//     }
  
//     set(key, value) {
//       const index = this.hash(key);
//       const bucket = this.table[index];
//       if (!bucket) {
//         this.table[index] = [[key, value]];
//       } else {
//         const sameKeyItem = bucket.find((item) => item[0] === key);
//         if (sameKeyItem) {
//           sameKeyItem[1] = value;
//         } else {
//           bucket.push([key, value]);
//         }
//       }
//     }
  
//     get(key) {
//       const index = this.hash(key);
//       const bucket = this.table[index];
//       if (bucket) {
//         const sameKeyItem = bucket.find((item) => item[0] === key);
//         if (sameKeyItem) {
//           return sameKeyItem[1];
//         }
//       }
//       return undefined;
//     }
  
//     remove(key) {
//       let index = this.hash(key);
//       const bucket = this.table[index];
//       if (bucket) {
//         const sameKeyItem = bucket.find((item) => item[0] === key);
//         if (sameKeyItem) {
//           bucket.splice(bucket.indexOf(sameKeyItem), 1);
//         }
//       }
//     }
  
//     display() {
//       for (let i = 0; i < this.table.length; i++) {
//         if (this.table[i]) {
//           console.log(i, this.table[i]);
//         }
//       }
//     }
//   }


////////////!    Binary Search Tree    ////////////!

// class Node {
//   constructor(value){
//     this.value = value
//     this.left = null
//     this.right =null
//   }
// }

// class BinarySearchTree {
//   constructor(){
//     this.root = null
//   }

//   isEmpty(){
//     return this.root === null
//   }

//   insert(value){
//     let newNode = new Node(value)
//     if(this.isEmpty()){
//       this.root = newNode
//     }else{
//       this.insertNode(this.root , newNode)
//     }
//   }

//   insertNode(root , newNode){
//     if(newNode.value < root.value){
//       if(root.left === null){
//         root.left = newNode
//       }else{
//         this.insertNode(root.left , newNode)
//       }
//     }else{
//       if(root.right === null){
//         root.right = newNode
//       }else{
//         this.insertNode(root.right , newNode)
//       }
//     }
//   }

//   search(root , value){
//     if(!root){
//       return false
//     }else{
//       if(root.value === value){
//         return true
//       }else if(value < root.value){
//         return this.search(root.left , value)
//       }else{
//         return this.search(root.right , value)
//       }
//     }
//   }

//   preOrder(root){
//     if(root){
//       console.log(root.value)
//       this.preOrder(root.left)
//       this.preOrder(root.right)
//     }
//   }

//   inOrder(root){
//     if(root){
//       this.inOrder(root.left)
//       console.log(root.value)
//       this.inOrder(root.right)
//     }
//   }

//   postOrder(root){
//     if(root){
//       this.postOrder(root.left)
//       this.postOrder(root.right)
//       console.log(root.value)
//     }
//   }

//   levelOrder(){
//     let queue = []
//     queue.push(this.root)
//     while(queue.length){
//       let curr = queue.shift()
//       console.log(curr.value)
//       if(curr.left){
//         queue.push(queue.left)
//       }
//       if(curr.right){
//         queue.push(queue.right)
//       }
//     }
//   }

//   min(root){
//     if(!root.left){
//       return root.value
//     }else{
//     return this.min(root.left)
//     }
//   }

//   max(root){
//     if(!root.right){
//       return root.value
//     }else{
//       return this.max(root.right)
//     }
//   }
// }

// const bst = new BinarySearchTree()
// console.log(bst.isEmpty())

// bst.insert(10)
// bst.insert(2)
// bst.insert(30)
// bst.insert(1)
// bst.insert(50)

// // console.log(bst.search(bst.root , 30))
// console.log(bst.max(bst.root))


////////////!    Graph    ////////////!

// class Graph {
//   constructor(){
//     this.adjacencyList = {}
//   }

//   addVertex(vertex){
//     if(!this.adjacencyList[vertex]){
//       this.adjacencyList[vertex] = new Set()
//     }
//   }

//   addEdge(vertex1 , vertex2){
//     if(!this.adjacencyList[vertex1]){
//       this.addVertex(vertex1)
//     }
//     if(!this.adjacencyList[vertex2]){
//       this.addVertex(vertex2)
//     }
//     this.adjacencyList[vertex1].add(vertex2)
//     this.adjacencyList[vertex2].add(vertex1)
//   }

//   removeEdge(vertex1 , vertex2){
//     this.adjacencyList[vertex1].delete(vertex2)
//     this.adjacencyList[vertex2].delete(vertex1)
//   }

//   removeVertex(vertex){
//     if(!this.adjacencyList[vertex]){
//       return
//     }
//     for(let adjvertex of this.adjacencyList[vertex]){
//       this.removeEdge(vertex , adjvertex)
//     }
//     delete this.adjacencyList[vertex]
//   }

//   hasEdge(vertex1 , vertex2){
//     return(
//       this.adjacencyList[vertex1].has(vertex2)&&
//       this.adjacencyList[vertex2].has(vertex1)
//     )
//   }

//   display(){
//     for(let vertex in this.adjacencyList){
//       console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
//     }
//   }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")

// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.removeEdge("A","B")

// graph.removeVertex("A")
// graph.display()


////////////!    Min-Heap    ////////////!

// class Heap {
//   constructor(){
//     this.heap = []
//   }
//   getParentIndex(index){
//     return Math.floor((index-1)/2)
//   }

//   getLeftChildIndex(index){
//     return 2*index +1
//   }

//   getRightChildIndex(index){
//     return 2*index +2
//   }

//   swap(index1 , index2){
//     [this.heap[index1] , this.heap[index2]] = [this.heap[index2] ,this.heap[index1]]
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapifyUp()
//   }

//   heapifyUp(){
//     let index = this.heap.length-1
//     while(index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]){
//       this.swap(index,this.getParentIndex(index))
//       index = this.getParentIndex(index)
//     }
//   }

//   extractMin(){
//     if(this.heap.length === 0) return null
//     if(this.heap.length === 1) return this.heap[0]

//     let min = this.heap[0]
//     this.heap[0] = this.heap.pop()
//     this.heapifyDown(0)
//     return min
//   }

//   heapifyDown(index){

//   }

//   peek(){
//     return this.heap.length === 0 ? null : this.heap[0]
//   }

//   display(){
//     console.log(this.heap)
//   }
// }

// const minHeap = new Heap()

// minHeap.insert(10)
// minHeap.insert(50)
// minHeap.insert(30)
// minHeap.insert(40)
// minHeap.insert(20)

// console.log(minHeap.peek())

// // console.log(minHeap.extractMin())

// minHeap.display()

//////////!  Heap Sort  ////////////

// function heapSort(array){

//     let length = array.length

//     for(let i = Math.floor(length/2)-1 ; i>=0 ; i--){
//         heapify(array , length , i)
//     }
//     for (let i = length - 1; i >= 0; i--) {
//         [array[0], array[i]] = [array[i], array[0]]; 
//         heapify(array, i, 0);
//     }
//     return array

//     function heapify(array , heapSize , rootIndex){
//         let largest = rootIndex
//         let leftChild = 2*rootIndex+1
//         let rightChild = 2*rootIndex+2

//         if(leftChild < heapSize && array[leftChild] > array[largest]){
//             largest = leftChild
//         }
//         if(rightChild < heapSize && array[rightChild] > array[largest]){
//             largest = rightChild
//         }
//         if(largest !== rootIndex){
//             [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]]
//             heapify(array , heapSize , largest)
//         }
//     }
// }
// const array = [9,5,3,2,1,3]
// console.log(heapSort(array))

////////!  Trie  ////////////

class TrieNode {
    constructor(){
        this.childrens = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.childrens[char]){
                node.childrens[char] = new TrieNode()
            }
            node = node.childrens[char]
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.childrens[char]){
                return false
            }
            node = node.childrens[char]
        }
        return node.isEndOfWord
    }
}

const trie = new Trie()
trie.insert("hello")
trie.insert("hey")
trie.insert("hai")

console.log(trie.search("hai"))
console.log(trie.search("hello"))
console.log(trie.search("haii"))
