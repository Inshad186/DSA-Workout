//////////////!   Binary-Tree   //////////////!

class Node {
    constructor(val) {
         this.val= val,
         this.left = this.right = null
    }
}

class BinaryTree {
    constructor () {
        this.root = null
    }

    LeverOrderinsert(val) {
        let newNode = new Node(val)
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

    arrayTo(arr) {
        for( let el of arr) {
            this.LeverOrderinsert(el)
        }
    }

    levelOrderTraversal() {
        if(this.root === null) return null
        let queue = [this.root]
        while(queue.length>0) {
            let node = queue.shift()
            console.log(node.val)
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
        console.log(root.val)
        result.push(root.val)
        this.inOrderTraversal(root.right,result)
    }

    preOrderTraversal(root) {
        let result = []
        function preOrderTraversal(root) {
            if(root==null) return 
            console.log(root.val)
            result.push(root.val)
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
        console.log(root.val)
    }

    height(root) {
       if(root === null) return -1
       let left = this.height(root.left)
       let right = this.height(root.right)
       return Math.max(left,right) +1
    }

    findAspecificNode(root,val) {
        if(root === null || root.val === val) return root
        let leftresult = this.findAspecificNode(root.left,val)
        if(leftresult) return leftresult
        let rightresult = this.findAspecificNode(root.right,val)
        return rightresult
    }

    findAspecificNodeHeight(root,val){
        let node = this.findAspecificNode(root,val)
        let height = this.height(node)
        return height
    }

    findAspecificNodeDepth(node,target,depth){
        if(node=== null) return -1
        
        if(node.val===target) {
            return depth 
        }
        let leftresult = this.findAspecificNodeDepth(node.left,target,depth+1)
        if(leftresult!==-1) return leftresult

        let rightresult = this.findAspecificNodeDepth(node.right,target,depth+1)
        return rightresult
    }

    isValuethere(node,val) {
        if(node === null) return false
        if(node.val === val) return true

        let leftresult = this.isValuethere(node.left,val)
        if(leftresult!==false) return leftresult
        let rightresult = this.isValuethere(node.right,val)
        return rightresult
    }

    findTheParentNode(node,target,parent=null){
        if(node === null) return null
         
        if(node.val === target) return parent

        let leftresult = this.findTheParentNode(node.left,target,parent=node.val)
        if(leftresult !== null) return leftresult

        let rightresult = this.findTheParentNode(node.right,target,parent=node.val)
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

    findSiblings(root,val) {
        if(root === null ) return null
        let queue = [root]
        let siblings = []

        while(queue.length>0) {
          let node = queue.shift()
          if(node.val === val) {
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
Bt.arrayTo([1,5,8,4,3,4,59,56,4,5,3,88,50,43,5,3,4])    
Bt.levelOrderTraversal()
let result = []
Bt.inOrderTraversal(Bt.root,result)
console.log(result)
Bt.preOrderTraversal(Bt.root)
console.log(Bt.root)
console.log(Bt.height(Bt.root))
console.log('this is find:', Bt.findAspecificNodeHeight(Bt.root,1))
console.log('this is finding depth',Bt.findAspecificNodeDepth(Bt.root,56,0))
console.log('Is value there',Bt.isValuethere(Bt.root,50))
console.log('findin parent node',Bt.findTheParentNode(Bt.root,4))
console.log('find all leaf Nodes',Bt.findAllLeafNodes(Bt.root))
console.log('find siblings',Bt.findSiblings(Bt.root,43))