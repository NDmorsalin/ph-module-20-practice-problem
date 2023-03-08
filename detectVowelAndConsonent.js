function detectVowelAndConsonant(alphabet){
    if(alphabet.length > 1){
        console.log('you have given a word please provide a alphabet');
        return;
    }
    switch (alphabet){
        case 'a': return ` ${alphabet} is a vowel`;
        case 'e': return ` ${alphabet} is a vowel`;
        case 'i': return ` ${alphabet} is a vowel`;
        case 'o': return ` ${alphabet} is a vowel`;
        case 'u': return ` ${alphabet} is a vowel`;
        default : return ` ${alphabet} is a consonant`;
    }
}

const checked = detectVowelAndConsonant('b')
console.log(checked);