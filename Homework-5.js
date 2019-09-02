/*3. Given a word and a list of possible anagrams, select the correct sublist.*/


function arrSub(arr, arrCheked){
let a;
let b;

	if(a.length=b.length ){

		let checked=false;

		for(let i=0; i < a.length; i++){

		if (!a[i].includes(b)){

		break;
		}
		
else { 
	
	checked=true;
		}		
	}

	
if (checked=true)
return b;
}
 
console.log(arrSub("listen", "istenl"));