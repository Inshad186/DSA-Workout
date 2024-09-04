////////!  Heap Sort Function   ////////!

function heapSort(array) { 
    const length = array.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    for (let i = length - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]; 
        heapify(array, i, 0);
    }

    return array;
}

function heapify(array, heapSize, rootIndex) {
    let largest = rootIndex;
    const leftChild = 2 * rootIndex + 1;
    const rightChild = 2 * rootIndex + 2;

    if (leftChild < heapSize && array[leftChild] > array[largest]) {
        largest = leftChild;
    }

    if (rightChild < heapSize && array[rightChild] > array[largest]) {
        largest = rightChild;
    }

    if (largest !== rootIndex) {
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];
        heapify(array, heapSize, largest);
    }
}

const arr = [5, 47, 23, 6, 4, 8];      
console.log(heapSort(arr));



//! heap sort example 2
// function heapSort(array) {
//     const n = array.length;

//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         minHeapify(array, n, i);
//     }

//     for (let i = n - 1; i > 0; i--) {
//         [array[0], array[i]] = [array[i], array[0]];

//         minHeapify(array, i, 0);
//     }

//     return array;
// }

// function minHeapify(array, n, i) {
//     let smallest = i;
//     const left = 2 * i + 1;
//     const right = 2 * i + 2;

//     if (left < n && array[left] < array[smallest]) {
//         smallest = left;
//     }
//     if (right < n && array[right] < array[smallest]) {
//         smallest = right;
//     }

//     if (smallest !== i) {
//         [array[i], array[smallest]] = [array[smallest], array[i]];
//         minHeapify(array, n, smallest);
//     }
// }

// const arr = [5, 47, 23, 6, 4, 8];

// console.log(heapSort(arr));