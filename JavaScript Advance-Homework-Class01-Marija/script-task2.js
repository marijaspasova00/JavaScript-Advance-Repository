function getlength(number) {
    number = parseInt(prompt('Enter a integer: '));
    let arrayOfDigits=[];
    for (var i = 0; i<=number; i++){
        digits = (""+number).split("");
    }
    return digits;
}
console.log('The digits of the given number are:', getlength());
