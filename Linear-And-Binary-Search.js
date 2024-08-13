
////////////////!     Linear Search     ////////////////

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



////////////////!   Binary search     ////////////////////

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

