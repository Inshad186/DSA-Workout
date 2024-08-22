
//! prime Number

// function prime(value){
//     if(value < 2){
//         return "its not a prime number"
//     }
//     for(let i=2 ; i<value ; i++){
//         if(value%i === 0){
//             return "its not a prime number"
//         }
//     }
//     return "prime number"
// }

// console.log(prime(6))


//! fibonocci

// function fibonocci(value){
//     let fib = [0,1]
//     for(let i=2 ; i<=value ; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }

// console.log(fibonocci(7));


//! recursive fibonocci

// function rfib(value){
//     if(value<2){
//         return value
//     }
//     return rfib(value-1) + rfib(value-2)
// }

// console.log(rfib(7));


//! linear Search

// function linear(arr,target){
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return "NOt found"
// }
// console.log(linear([-5,2,4,6,10],2));

//! binary Search

// function binary(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target > arr[middleIndex]){
//             leftIndex = middleIndex + 1
//         }else{
//             rightIndex = middleIndex -1
//         }
//     }
//     return -1
// }

// console.log(binary([-5,2,4,6,10],20))

//! recursive binary search

// function RecursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target > arr[middleIndex]){
//             return search(arr,target,middleIndex + 1,rightIndex)
//         }else{
//             return search(arr,target,leftIndex,middleIndex - 1)
//         }
//     }
//     return -1
// }

// console.log(RecursiveBinarySearch([-5,2,4,6,10],20));



//////////////////////////////////////////////////!

// function recursive(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target > arr[middleIndex]){
//             return search(arr,target,middleIndex + 1,rightIndex)
//         }else{
//             return search(arr,target,leftIndex,middleIndex - 1)
//         }
//     }
//     return -1
// }

// console.log(recursive([-5,2,4,6,10],20))

///////////////////////////////////////

// function prime(value){
//     if(value<2){
//         return "its not a prime number"
//     }
//     for(let i=2 ; i<value ; i++){
//         if(value%i === 0){
//             return "its not a prime number"
//         }
//     }
//     return "Prime Number"
// }
// console.log(prime(6))
// console.log(prime(7))
// console.log(prime(4))

///////////////////////////////////////

// function recursivefib(value){
//     if(value<2){
//         return value
//     }
//     return recursivefib(value-1) + recursivefib(value-2)
// }

// console.log(recursivefib(7))

///////////////////////////////////////

// function fibonocci(value){
//     let fib = [0,1]
//     for(let i=2 ; i<=value ; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }

// console.log(fibonocci(10))

///////////////////////////////////////

// function factorial(value){
//     let res = 1
//     for(let i= 1 ; i<=value ; i++){
//         res = res * i
//     }
//     return res
// }
// console.log(factorial(6))

///////////////////////////////////////

// function recfactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * recfactorial(n-1)
// }
// console.log(recfactorial(6))




//! Linked List

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
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
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        let node = new Node(value)
        if(index === 0){
            this.head = node
        }else{
            let prev = this.head
            for(let i=0 ; i<index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
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

    removeFrom(index){
        if(index < 0 || index > this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = removeNode.next
        }else{
            let prev = this.head
            for(let i=0 ; i<index-1 ; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
            this.size--
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        let removeNode
        if(this.head.value === value){
            removeNode = this.head
            // this.head = removeNode.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(this.value && this.value.next != value){
                prev = prev.next
            }
            if(prev.next){
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
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

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let prev = this.head
        while(prev){
            if(prev.value === value){
                return i
            }
            prev = prev.next
            i++
        }
        return -1
    }

    removeMiddle(){
        if(this.isEmpty()){
            return "the list is empty"
        }
        if(this.size === 1){
            this.head = null
            this.size--
            return "removed the only element in the list"
        }

        let slow = this.head
        let fast = this.head
        let pre = null

        while(fast !== null && fast.next !== null){
            pre = slow
            slow = slow.next
            fast = fast.next.next
        }
        pre.next = slow.next
        this.size --
        return `removed middle element ${slow.val}`
    }


    print(){
        if(this.isEmpty()){
            console.log("List is empty")
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
console.log(list.isEmpty())
console.log(list.getSize())

list.preppend(10)
list.preppend(20)
list.append(30)
list.append(40)
list.insert(50,2)
list.removeFrom(2)
list.removeValue(10)
list.removeMiddle()
list.reverse()
console.log("found :",list.search(20))
console.log(list.middle())
list.print()




