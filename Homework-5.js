/*1. Write a function, which will receive a number between 0 to 999,999 and spell out
that number in English.*/

let objNum = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            30: "thirty",
            40: "forty",
            50: "fifty",
            60: "sixty",
            70: "seventy",
            80: "eighty",
            90: "ninety",
            100: "hundred",
            1000: "thousand",
        };

function numbersToWord(num) {
            let unit,
                dec,
                hund,
                spell = "";
            if(num < 1000) {
                if((num >= 0 && num <= 20) || (num % 10 === 0 && num < 100)) {
                    spell = objNum[num];
                }
            
                if(num > 20 && num < 100 && !(num % 10 === 0 && num < 100)) {
                    unit = num % 10;
                    dec = num - unit;
                    spell = objNum[dec] + " " + objNum[unit];
                }
            
                if(num >= 100 && num < 999) {
                    dec = num % 100;
                    hund = Math.floor(num / 100);
                    if(num % 100 === 0) {
                        spell = objNum[hund] + " " +objNum[100];
                    }                     
                    else spell = objNum[hund] + " " + objNum[100] + " " + numbersToWord(dec);
                }   
            } 
                else spell = numbersToWord(Math.floor(num / 1000)) + " " + objNum[1000] + " " + numbersToWord(num % 1000);
                return spell;
        }
        
        
        console.log(numbersToWord(5));
        console.log(numbersToWord(25));
        console.log(numbersToWord(504));
        console.log(numbersToWord(9003));
        console.log(numbersToWord(69203));
        console.log(numbersToWord(710520));




/*3. Given a word and a list of possible anagrams, select the correct sublist.*/


function anagramsFromArr(givenString, arr) {
        
    let arrRes = [];
    arr.forEach(function(item) {
        let newString = '';
            if(item.length === givenString.length) {
                for(let i = 0; i < item.length; i++) {
                    if(!(givenString.includes(item[i]))) {
                    break;  
                    }
                    
                    newString+=item[i];                       
                    }
                    if(newString.length !== 0){
                    arrRes.push(newString);
                    }
                }
    });
    return arrRes;
    }
     
        
        console.log(anagramsFromArr('listen', ['enlists', 'google', 'inlets', 'banana']));
        console.log(anagramsFromArr('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']));
        



