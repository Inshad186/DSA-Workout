//////////////!    RECURSIVE FIBONACCI SEQUENCE     ///////////////

// function FIBONACCI(n){
//     if(n<2){
//         return n
//     }

//     return FIBONACCI(n-1) + FIBONACCI(n-2)
// }

// console.log(FIBONACCI(7))
// console.log(FIBONACCI(10))


////////////////!   Recursive Binary search     ////////////////////

// function RecursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }

//     if(target > arr[middleIndex]){
//         return search(arr,target,middleIndex + 1 , rightIndex)
//     }else{
//         return search(arr,target,leftIndex,middleIndex - 1)
//     }
// }
// console.log(RecursiveBinarySearch([-5,2,4,6,10,20,30],20))
// console.log(RecursiveBinarySearch([-5,2,4,6,10],-5))
// console.log(RecursiveBinarySearch([-5,2,4,6,10],50))