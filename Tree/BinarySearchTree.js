//////////////!   Binary-Search-Tree   //////////////!

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){
        if(newNode < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left , newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right , newNode)
            }
        }
    }

    search(root , value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left , value)
            }else{
                return this.search(root.right , value)
            }
        }
    }
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty())

bst.insert(5)
bst.insert(10)
bst.insert(25)

console.log(bst.search(bst.root,31))



////////////////////////////////////////////!

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
//         queue.push(curr.left)
//       }
//       if(curr.right){
//         queue.push(curr.right)
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

// bst.inOrder(bst.root)

// bst.levelOrder()

// console.log(bst.search(bst.root , 30))
// console.log(bst.max(bst.root))