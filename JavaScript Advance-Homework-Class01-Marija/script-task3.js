let numArr = [4, -9, -98, -1, 444, 3, -555];
function absoluteValueOfNumbers(array){
    let filterArray = [];
    for (let num of array){
        filterArray.push(Math.abs(num));
    }
    return filterArray;
}
console.log("Filter Array: ", absoluteValueOfNumbers(numArr));
