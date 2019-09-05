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
        



