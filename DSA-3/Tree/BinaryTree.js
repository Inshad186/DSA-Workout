//////////////!   Binary-Tree   //////////////!

class Node {
    constructor(value) {
         this.value= value,
         this.left = null
         this.right = null
    }
}

class BinaryTree {
    constructor () {
        this.root = null
    }

    levelOrderinsert(value) {
        let newNode = new Node(value)
        if(this.root === null) {
            this.root = newNode
            return
        }
        let queue = [this.root]
        while(queue.length> 0) {
            let node = queue.shift()  
            if(node.left === null) {
               node.left = newNode
               break
            }
            else {
                queue.push(node.left)
            }
            if(node.right===null) {
                node.right = newNode
                break
            }
            else {
                queue.push(node.right)
            }
        } 
    }

    toArray(arr) {
        for( let el of arr) {
            this.levelOrderinsert(el)
        }
    }

    levelOrderTraversal() {
        if(this.root === null) return null
        let queue = [this.root]
        while(queue.length>0) {
            let node = queue.shift()
            console.log(node.value)
            if(node.left) {
                queue.push(node.left)
            }

            if(node.right) {
                queue.push(node.right)
            }
        }
        return queue
    }

    inOrderTraversal(root,result) {
        if(root === null) return    
        this.inOrderTraversal(root.left,result)
        console.log(root.value)
        result.push(root.value)
        this.inOrderTraversal(root.right,result)
    }

    preOrderTraversal(root) {
        let result = []
        function preOrderTraversal(root) {
            if(root==null) return 
            console.log(root.value)
            result.push(root.value)
              preOrderTraversal(root.left)
              preOrderTraversal(root.right)
        }
        preOrderTraversal(root)
        return result
    }

    postOrderTraversal(root) {
        if(root ===null) return 
        this.postOrderTraversal(root.left)
        this.postOrderTraversal(root.right)
        console.log(root.value)
    }

    height(root) {
       if(root === null) return -1
       let left = this.height(root.left)
       let right = this.height(root.right)
       return Math.max(left,right) +1
    }

    findAspecificNode(root,value) {
        if(root === null || root.value === value) return root
        let leftresult = this.findAspecificNode(root.left,value)
        if(leftresult) return leftresult
        let rightresult = this.findAspecificNode(root.right,value)
        return rightresult
    }

    findAspecificNodeHeight(root,value){
        let node = this.findAspecificNode(root,value)
        let height = this.height(node)
        return height
    }

    findAspecificNodeDepth(node,target,depth){
        if(node=== null) return -1
        
        if(node.value===target) {
            return depth 
        }
        let leftresult = this.findAspecificNodeDepth(node.left,target,depth+1)
        if(leftresult!==-1) return leftresult

        let rightresult = this.findAspecificNodeDepth(node.right,target,depth+1)
        return rightresult
    }

    isValuethere(node,value) {
        if(node === null) return false
        if(node.value === value) return true

        let leftresult = this.isValuethere(node.left,value)
        if(leftresult!==false) return leftresult
        let rightresult = this.isValuethere(node.right,value)
        return rightresult
    }

    findTheParentNode(node,target,parent=null){
        if(node === null) return null
         
        if(node.value === target) return parent

        let leftresult = this.findTheParentNode(node.left,target,parent=node.value)
        if(leftresult !== null) return leftresult

        let rightresult = this.findTheParentNode(node.right,target,parent=node.value)
        return rightresult
    }

    findAllLeafNodes(root) {
        if(root === null) return null
        let queue = [root]
        let result = new Set()

        while(queue.length>0) {
            let node = queue.shift()
            if(node.left ===null && node.right === null) {
              result.add(node)
            }
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        return result
    }

    findSiblings(root,value) {
        if(root === null ) return null
        let queue = [root]
        let siblings = []

        while(queue.length>0) {
          let node = queue.shift()
          if(node.value === value) {
            if(node.left ) {
                siblings.push(node.left)
            }
            
            if(node.right) {
                siblings.push(node.right)
            }

            if(siblings.length === 0) {
                return null
            }else{
                return siblings
            }
          }
          if(node.left) {
            queue.push(node.left)
          }
          if(node.right) {
            queue.push(node.right)
          }
        }
    }
}

let Bt = new BinaryTree()
Bt.toArray([2,3,4,32,12,34,56,43,67,8,40,1,67])    
Bt.levelOrderTraversal()
let result = []
Bt.inOrderTraversal(Bt.root,result)
console.log(result)
Bt.preOrderTraversal(Bt.root)
console.log(Bt.root)
console.log(Bt.height(Bt.root))
console.log('is value there',Bt.isValuethere(Bt.root,40))
console.log('this is find:', Bt.findAspecificNodeHeight(Bt.root,1))
console.log('this is finding depth',Bt.findAspecificNodeDepth(Bt.root,56,0))
console.log('find in parent node',Bt.findTheParentNode(Bt.root,4))
console.log('find siblings',Bt.findSiblings(Bt.root,34))
console.log('find all leaf Nodes',Bt.findAllLeafNodes(Bt.root))