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

    prepend(value){
        const node = new Node(value)
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
            let priv = this.head
            while(priv.next){
                priv = priv.next
            }
            priv.next = node
        }
        this.size++
    }

    insert(value , index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
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
            this.head = this.head.next
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

    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log("List Values : ",listValue);
            
        }
    }
}

const list  = new linkedList()
console.log("List is empty",list.isEmpty())
console.log("List size", list.getSize());


list.insert(20,0)
list.print()

list.insert(40,0)
list.print()

list.insert(60,0)
list.print()

list.insert(100,1)
list.print()

console.log(list.removeValue(100))
list.print()
