const capitalize = (toCapitalize) => {
    let firstLetter = toCapitalize.substr(0, 1);
    let finalString = firstLetter.toUpperCase() + toCapitalize.substr(1, (toCapitalize.length - 1));
    return finalString;
}

const reverseString = (toReverse) => {
    let reverseArray = toReverse.split("");
    const reversed = reverseArray.reverse();
    let finalString = "";
    reversed.forEach(char => {
        finalString += char;        
    });

    return finalString;
}

class Calculator {
    constructor() {

    }

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }
}

const letterArray = ['a','b','c','d','e','f','g','h','i','j',
                    'k','l','m','n','o','p','q','r','s','t',
                    'u','v','w','x','y','z'];

const containsUppercase = (str) => {
    return /[A-Z]/.test(str);
  }

const convertToNumber = (letter) => {
    return letterArray.indexOf(letter);
}

const convertToLetter = (number) => {
    return letterArray[number];
}

const caesarCipher = (baseString, offset = 1) => {
    const baseArray = baseString.split("");
    let finalString = "";
    baseArray.forEach(char => {
        let upperChar = containsUppercase(char);
        char = char.toLowerCase();

        if(!letterArray.includes(char))
        {
            // ignore non letters
            finalString += char;
        } else {
            let numChar = convertToNumber(char);
            numChar += offset;

            if(numChar > 25)
            {
                numChar -= 25; // reset
            }

            let newChar = convertToLetter(numChar);

            if(upperChar)
            {
                newChar = newChar.toUpperCase();
            }

            finalString += newChar;
        }

    });

    return finalString;
}

const analyzeArray = (arrayBase) => {
    let result = {
        average: 0,
        min: 999999999999999999,
        max: 0,
        length: arrayBase.length
    };

    let concatValues = 0;

    arrayBase.forEach(item => {
        if(item <= result.min)
        {
            result.min = item;
        }

        if(item >= result.max)
        {
            result.max = item;
        }

        concatValues += item;
    });

    result.average = Math.floor(concatValues / arrayBase.length);
    return result;

}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray }