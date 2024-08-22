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

class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.table[index];
      if (!bucket) {
        this.table[index] = [[key, value]];
      } else {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          sameKeyItem[1] = value;
        } else {
          bucket.push([key, value]);
        }
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.table[index];
      if (bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          return sameKeyItem[1];
        }
      }
      return undefined;
    }
  
    remove(key) {
      let index = this.hash(key);
      const bucket = this.table[index];
      if (bucket) {
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
          bucket.splice(bucket.indexOf(sameKeyItem), 1);
        }
      }
    }
  
    display() {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }