let testArray = ["Hello", 3, 4, "Hi", 10, "Marija", "Ok", 9];
function cleanAllButNums(array){
    let array2 = [];
    for(let i=0; i<array.length; i++){
        if(typeof array[i] === "number"){
            array2.push(array[i]);
        }
    }
    return array2;
}
console.log(cleanAllButNums(testArray));