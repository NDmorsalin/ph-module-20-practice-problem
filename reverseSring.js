function reverseString(word) {
    const laters = word.split('');
    const reverseLaters = [];
    for (let i = laters.length-1 ; i >= 0 ; i--){
        reverseLaters.push(laters[i])
    }

    return reverseLaters.join('');

}

console.log(reverseString('hello'));