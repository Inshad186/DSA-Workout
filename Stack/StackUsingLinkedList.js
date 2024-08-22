////////////!    Stack-Using-LinkedList   ////////////!

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    size(){
        return this.size
    }

    push(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }else{
            let value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.head.value
        }
    }

    toArray(){
        let arr = []
        let cur = this.top
        while(cur){
            arr.push(cur.value)  //this is for convetting to array
            cur = cur.next
        }
        return arr
    }

    clear(){
        this.top = null
        this.count =0
    }

    print(){
        if(this.isEmpty()){
            return "List is Empty"
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

const list = new Stack()
console.log(list.isEmpty())
list.push(5)
list.push(10)
list.push(25)
list.pop()
list.print()

