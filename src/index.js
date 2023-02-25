const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(string) {
    let numbers = string.match(/.{1,10}/g)
    let letters = []
    let word = ''
    numbers.forEach(element => {
        letters.push(element.match(/.{1,2}/g))
    });
    letters.forEach(i => {
        console.log(i)
        let code = ''
        i.forEach(letter => {
            (letter == '10') ? code += '.' : (letter == '11') ? code += '-' : code;
        })
        if (typeof MORSE_TABLE[code] === "undefined") {
            word += ' '
        } else {
            word += MORSE_TABLE[code]
        }
    })

    return word
}

module.exports = {
    decode
}