

// function match(arr,target){

// for(let i=0 ; i<arr.length ; i++){
//     for(let j=i+1 ; j<arr.length ; j++){
//         if(i<j && arr[i] + arr[j] == target){
//            return `${arr[i]} + ${arr[j]} = ${target}`
//         }
//     }
// }
// return "no matches found"
// }

// console.log(match([2,4,3,7,10,20,11], 100))



// function targetSum(arr, target) {
//   let mySet = new Set();
//   for (let i=0; i<arr.length ; i++) {
//     match = target - arr[i];
//     if (mySet.has(match))
//       return [arr[i], match]
//     else
//       mySet.add(arr[i]);
//   }
//   return "no match found"
// }

// console.log(targetSum([2,4,3,7,10,20,11], 10));




// function sort(arr){
//     for(let i=0 ; i<arr.length ; i++){
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(i<j && arr[i]>arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// sort([100,4,3,7,10,20,11])



// let arr = [-5,2,10,4,6]
// let target = 20;
// let found = false;

// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i] == target){
//         console.log(i)
//         found = true;
//         break;
//     }
// }
// if(!found){
//     console.log("-1")
// }



// function binarysearch(arr,target){
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
//             rightIndex = middleIndex - 1
//         }
//     }
//     return -1
// }

// console.log(binarysearch([-12,2,4,12,45,50],45))
// console.log(binarysearch([-12,2,4,12,45,50],50))
// console.log(binarysearch([-12,2,4,12,45,50],100))






// binary serach

// function binary(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1

//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target > arr[middleIndex]){
//             leftIndex = middleIndex +1
//         }else{
//             rightIndex = middleIndex - 1
//         }
//     }
// }

// console.log(binary([2,4,6,8,10],8))


// linke list

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

    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.size++
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
        }
        prev.next = node
        this.size++
    }
    }

    print(){
        if(this.isEmpty()){
            console.log("li")
        }else{
            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log("Listed values",listValue)
        }
    }
}

const list = new linkedList()
console.log("List is  empty",list.isEmpty())
console.log("List Size",list.getSize())

list.insert(50)
list.insert(500)
list.insert(250)
list.print()