// import { sum2DArray } from './promise-sum-2darray';
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// const sumPromise1 = sum2DArray(array2D);
// const sumPromise2 = sum2DArray('array2D');

function sumOfRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr) && rowIdx >= 0 && rowIdx < arr.length) {
            let sum = 0;
            for (let j = 0; j < arr[rowIdx].length; j++) {
                sum += arr[rowIdx][j];
            }
            resolve(sum);
        }
        else {
            reject('BAD INPUT: Expected array and valid row index as input');
        }
    });   
}


rowSumPromise = [];
    for (let i = 0; i < array2D.length; i++) {
        rowSumPromise.push(sumOfRow(array2D, i));
    }

    Promise.all(rowSumPromise)
        .then((results) => {
            let sum = 0;
            results.forEach((result) => {
                sum += result;
            });
            console.log('Sum of 2D array is: ', sum);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });