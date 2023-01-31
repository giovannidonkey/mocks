//Maps and Sets Exercise

//QQ1
new Set([1,1,2,3,4,]); // =returns=> {1,2,3,4} 

//QQ2
[...new Set("referee")].join("") // =returns=> "ref"

//QQ3
let m = new Map();
m.set([1,2,3], true);	
m.set([1,2,3], false);	
/* Map =>  0 : {Array(3) , true}
		   1 : {Array(3), false}
*/

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//vowelCount 

function vowelCount(str){
	const vMap = new Map();
	const vowels = 'aeiou';
	for(let letter of str){
		let low = letter.toLowerCase();
		if(low.includes(vowels)){
			if(vMap.has(low)){
				vMap.set(low, vMap.get(low) + 1);
			}else{
				vMap.set(low, 1);
			}
		}
	}
	return vMap;
}