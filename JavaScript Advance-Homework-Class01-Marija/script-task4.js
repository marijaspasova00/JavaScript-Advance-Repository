const givenArr = [12, 45, 88, 1, 567, 3, 91];
function copyOddNumbersFromArray(array){
    let oddNumberOnlyArray = [];
    for(let num of array){
        if(num%2!==0){
            oddNumberOnlyArray.push(num);
        }
    }
    return oddNumberOnlyArray;
}
console.log("Odd number only: ", copyOddNumbersFromArray(givenArr));