////////////!   Selection Sort   ////////////  O(n)2

// function selectionSort(arr){
//     for(let i=0 ; i<arr.length - 1 ; i++){
//         let min = i
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[j] < arr[min])
//                 min = j
//         }
//         if(arr[i] != min){
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }

// const arr = [5,10,-3,50,-8,20]
// console.log(selectionSort(arr))