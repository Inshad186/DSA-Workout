////////////!   Selection Sort   ////////////  O(n)2

// function selectionSort(arr){
//     for(let i=0 ; i<arr.length-1 ; i++){
//         let minIndex = i
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex != i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }

// const arr = [6,9,5,3,1,5,9]
// console.log(selectionSort(arr))



//! Bubble

// function Bubble(arr){
//     let swapped
//     do{
//         swapped = false
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i] > arr[i+1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
// }while(swapped)
//     return arr
// }

// const arr = [9,-5,2,3,7,4]
// console.log(Bubble(arr))

//! Insertion

// function Insertion(arr){
//     for(let i=1 ; i<arr.length ; i++){
//         let numberToInsert = arr[i]
//         let j = i-1
//         while(j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//      arr[j+1] = numberToInsert
//     }
//     return arr
// }

// const arr = [9,-5,2,3,7,4]
// console.log(Insertion(arr))

//! Merge

// function Merge(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return merge(Merge(leftArr) , Merge(rightArr))
// }

// function merge(leftArr , rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [9,-5,2,3,7,4,1]
// console.log(Merge(arr))

//! Quick

// function Quick(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0 ; i<arr.length-1 ; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...Quick(left),pivot,...Quick(right)]
// }

// const arr = [9,-5,2,3,7,4,1]
// console.log(Quick(arr))

//! Selection

// function selectionSort(arr){
//     for(let i=0 ; i<arr.length ; i++){
//         let minIndex = i
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex != i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex] 
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }

// const arr = [9,-5,2,3,7,4,1,110]
// console.log(selectionSort(arr))
