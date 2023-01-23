function sumFromOneToN(endNumber){
    let counter = 0;
    endNumber = parseInt(prompt('Enter a positive integer: '));
    if(endNumber<0){
        return "Invalid input!";
    } else {
        for(let i=1; i<=endNumber; i++){
            counter += i;
        }
        return counter;
    }
}
console.log('The sum of all the numbers numbers is:', sumFromOneToN());