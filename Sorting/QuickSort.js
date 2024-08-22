////////////!   Quick Sort   ////////////

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

// const arr = [5,10,-3,50,-8,20]
// console.log(Quick(arr));