function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // The current element to be inserted
        let j = i - 1;

        // Shift elements of arr[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr;
}

module.exports = insertionSort;