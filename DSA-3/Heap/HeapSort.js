////////!  Heap Sort Function   ////////!

function heapSort(array) {
    let length = array.length;

    // Build a max heap
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i);
    }

    // Extract elements one by one from the heap
    for (let i = length - 1; i >= 0; i--) {
        // Move current root to the end
        [array[0], array[i]] = [array[i], array[0]];

        // Call max heapify on the reduced heap
        heapify(array, i, 0);
    }

    return array;
}

function heapify(array, heapSize, rootIndex) {
    let largest = rootIndex;
    let leftChild = 2 * rootIndex + 1;
    let rightChild = 2 * rootIndex + 2;

    // If left child is larger than root
    if (leftChild < heapSize && array[leftChild] > array[largest]) {
        largest = leftChild;
    }

    // If right child is larger than largest so far
    if (rightChild < heapSize && array[rightChild] > array[largest]) {
        largest = rightChild;
    }

    // If largest is not root
    if (largest !== rootIndex) {
        [array[rootIndex], array[largest]] = [array[largest], array[rootIndex]];

        // Recursively heapify the affected sub-tree
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