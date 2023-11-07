'use-strict'

/*
If only one number
    Quit
Else
    Sort left half of number
    Sort right half of number
    Merge sorted halves
*/

const mergeSort = (list) => {

    // If the array has only one element or is empty, return it
    if (list.length < 2) return list;

    // else, split the array into two halves
    let half = Math.floor(list.length / 2);
    let leftHalf = list.slice(0, half);
    let rightHalf = list.slice(half);

    // sort left and right halves
    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    // merge
    return merge(sortedLeft, sortedRight);

}

const merge = (left, right) => {

    let merged = [];

    // Right and left lists pointers (indexes)
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Concatenate the remaining elements of the non-exhausted array to the result array
    return merged.concat(left.slice(i)).concat(right.slice(j));

}

console.log(mergeSort([])) // []
console.log(mergeSort([2, 8, 7, 4, 3, 5, 1, 6])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([2, 8, 11, 7, 10, 4, 3, 9, 5, 1, 6])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]