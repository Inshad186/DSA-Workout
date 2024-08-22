class Stack {
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0 
    }

    getSize(){
        return this.items.length
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        if(this.isEmpty()){
            return 'stack  is empty'
        }
        return this.items.pop()
    }

    peek(){
        if (this.items.length < 1) {
            return 'Stack is Empty'
        }
        return this.items[this.items.length-1]
    }

    clear(){
        this.items = [];
    }

    print(){
        if (this.isEmpty()) {
            return ' stack is empty'
        }
        return this.items.join(',')
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size()); 
// console.log(stack.pop()); 
console.log(stack.print()); 