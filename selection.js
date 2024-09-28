function selectionSort(arr) {
    let n = arr.length;
    
    // Iterate over the array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;  // Assume the current position holds the minimum
        
        // Find the smallest element in the remaining unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }
        
        // Swap if the minimum is not the element we started with
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}

module.exports = selectionSort;