
//! Binary Search Tree

// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root , newNode)
//         }
//     }

//     insertNode(root , newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left , newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right , newNode)
//             }
//         }
//     }

//     search(root , value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left , value)
//             }else{
//                 return this.search(root.right , value)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//         console.log(root.value)
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//         this.inOrder(root.left)
//         console.log(root.value)
//         this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value)
//         }
//     }

//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr)
//         }
//     }

//     min(root){
//         if(root.left === null){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(root.right === null){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
// }

// const bst = new BinarySearchTree()
// // console.log(bst.isEmpty())

// bst.insert(20)
// bst.insert(10)
// bst.insert(15)
// bst.insert(30)
// bst.insert(40)

// // bst.inOrder(bst.root)
// // console.log("=>",bst.min(bst.root))
// // console.log("=>",bst.max(bst.root))
// bst.levelOrder()

// // console.log(bst.search(bst.root , 50))


////////////!   Max-Heap   ////////////!

// class Heap {
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftChildIndex(index){
//         return 2*index+1
//     }

//     getRightChildIndex(index){
//         return 2*index+2
//     }

//     swap(index1 , index2){
//         [this.heap[index1] , this.heap[index2]] = [this.heap[index2] , this.heap[index1]]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index > 0 && this.heap[index] > this.heap[this.getParentIndex(index)]){
//             this.swap(index , this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//     }

//     extractmax(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()

//         let max = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }

//     heapifyDown(index){
//         let largest = index
//         let leftChildIndex = this.getLeftChildIndex(index)
//         let rightChildIndex = this.getRightChildIndex(index)

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
//             largest = leftChildIndex
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
//             largest = rightChildIndex
//         }

//         if(largest !== index){
//             this.swap(index , largest)
//             this.heapifyDown(largest)
//         }
//     }

//     display(){
//         console.log(this.heap)
//     }
// }

// const heap = new Heap()
// heap.insert(20)
// heap.insert(50)
// heap.insert(10)
// heap.insert(30)
// heap.insert(40)

// console.log(heap.extractmax())

// heap.display()\

////////////!   Heap-Sort   ////////////!

// function heapSort(array) { 
//     const length = array.length;

//     for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
//         heapify(array, length, i);
//     }

//     for (let i = length - 1; i >= 0; i--) {
//         [array[0], array[i]] = [array[i], array[0]]; 
//         heapify(array, i, 0);
//     }

//     return array;
// }

// function heapify(array, heapSize, rootIndex) {
//     let largest = rootIndex;
//     const leftChild = 2 * rootIndex + 1;
//     const rightChild = 2 * rootIndex + 2;

//     if (leftChild < heapSize && array[leftChild] > array[largest]) {
//         largest = leftChild;
//     }

//     if (rightChild < heapSize && array[rightChild] > array[largest]) {
//         largest = rightChild;
//     }

//     if (largest !== rootIndex) {
//         [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];
//         heapify(array, heapSize, largest);
//     }
// }

// const arr = [5, 47, 23, 6, 4, 8];      
// console.log(heapSort(arr));


////////////!   Trie   ////////////!

// class TrieNode {
//     constructor(){
//         this.children = {}
//         this.isEndofWord = false
//     }
// }

// class Trie {
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEndofWord = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEndofWord
//     }
// }

// const trie = new Trie()
// trie.insert("hello")
// trie.insert("hey")
// trie.insert("hi")

// console.log(trie.search("hey"))
// console.log(trie.search("hello"))
// console.log(trie.search("hello"))
// console.log(trie.search("hell"))


////////////!   Graph   ////////////!

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1 , vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1 , vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacencyList of this.adjacencyList(vertex)){
            this.removeEdge(vertex,adjacencyList)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1 , vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +"=> "+[...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)

graph.addEdge(1 , 2)
graph.addEdge(2 , 3)



graph.display()