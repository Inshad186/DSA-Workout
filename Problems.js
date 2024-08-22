////////////!   PRIME NUMBER   //////////

// function prime(n){
//     if(n<2){
//         return false
//     }
    
//     for(let i=2 ; i<n ; i++){
//         if(n%i === 0){
//             return false
//         }
//     }
//     return true;
// }

// console.log(prime(3))
// console.log(prime(6))


////////////!    FIBONACCI SEQUENCE     ///////////////

// function FIBONACCI(n){
//     let fib = [0,1]
//     for(let i=2 ; i<=n ; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }

// console.log(FIBONACCI(6))
// console.log(FIBONACCI(10))


//////////////!    RECURSIVE FIBONACCI SEQUENCE     ///////////////

// function FIBONACCI(n){
//     if(n<2){
//         return n
//     }

//     return FIBONACCI(n-1) + FIBONACCI(n-2)
// }

// console.log(FIBONACCI(7))
// console.log(FIBONACCI(10))


//////////////////////////////////////!

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size 
    }

    preppend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // append(value){
    //     let node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //     }else{
    //         let prev = this.head
    //         while(prev.next){
    //             prev = prev.next
    //         }
    //         prev.next = node
    //     }
    //     this.size++
    // }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return 
        }
        if(index === 0){
            this.preppend(value)
        }else{
            let node = new Node(value)
            let prev = this.head
            for(let i=0 ; i<index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    removeFrom(index){
        if(index < 0 || index > this.size){
            return null
        }
        let removedNode 
        if(index === 0){
            removedNode = this.head
            this.head =  this.head.next
        }else{
            let prev = this.head
            for(let i=0 ; i<index-1 ; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.value && prev.next.value != value){
                prev = prev.next
            }
            let removedNode
            if(prev.next){
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(){
        let prev = null
        let curr = this.head
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    middle(){
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            fast = fast.next.next
            slow = slow.next
        }
        return slow.value
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log("Listed Values :",listValue)
        }
    }
}

const list = new linkedList()
console.log("List is Empty",list.isEmpty());
console.log("List size",list.getSize())

list.append(500)
list.append(1200)
list.insert(35,1)
list.removeValue(1200)

list.print()



//////!   Remove From Front(Value)   /////

// if(this.isEmpty()){
//     return null
// }
// const value = this.head.next
// this.head = this.head.next
// this.size--
// return value


//////!   Remove From End(Value)   /////

// removeFromEnd() {

// if(this.isEmpty()){
//     return null
// }
// const value  = this.tail.value
// if(this.size === 1){
//     this.head = null
//     this.tail = null
// }else{
//     let prev = this.head
//     while(prev.next != this.tail){
//         prev = prev.next
//     }
//     prev.next = null
//     this.tail = prev
// }
// this.size--
// return value
// }

