////////////!   Merge Sort   ////////////  O(nlogn)

// function Merge(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)
//     return value(Merge(leftArr) , Merge(rightArr))
// }
// function value(leftArr , rightArr){
//     let sortValue = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <= rightArr[0]){
//             sortValue.push(leftArr.shift())
//         }else{
//             sortValue.push(rightArr.shift())
//         }
//     }
//     return [...sortValue,...leftArr,...rightArr]
// }

// const arr = [5,10,-3,50,-8,20]
// console.log(Merge(arr))

