////////////!   Queue-Using-LinkedList   ////////////!

class Node{
    constructor(value){
       this.value = value
       this.next  = null
    }
}

class Queue {
   constructor(){
       this.head  = null
       this.tail   = null
       this.size = 0; 
   }

   isEmpty(){
       return this.size === 0;
   }

   size(){
       return this.size;
   }

   enqueue(value){
       const newNode = new Node(value)
       if (this.head === null) {
           this.head = newNode
           this.tail = newNode
       } else {
           this.tail.next = newNode
           this.tail = newNode
       }
       this.size++;
   }

   dequeue(){
       if (this.isEmpty()) {
           return null
       }
       const removeValue = this.head.value
       if (this.head === this.tail) {
           this.tail = null
       }
       this.head = this.head.next;
       this.size--;
       return removeValue;
   }

   peek(){
       if (this.isEmpty()) {
           return ' empty queue'
       }
       return this.head.value;
   }

   print(){
       if (this.isEmpty()) {
           return 'empty queue'
       }
       let curr = this.head
       let listValue = ""
       while(curr){
           listValue += `${curr.value}`
           curr = curr.next
       }
       console.log("Listed values",listValue)
   }
}


const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(30)
queue.dequeue()
console.log(queue.peek())
queue.print()