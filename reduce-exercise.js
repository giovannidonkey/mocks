//Reduce Exercises

function extractValue(arr, key){
	return arr.reduce(function(acc,next){ acc.push(next[key]); return acc;},[]);
}

function vowelCount(str){
	const vowels = "aeiou";
	let letters = str.split("");
	return letters.reduce(function(acc, next){
		let nletter = next.toLowerCase();
		if(vowels.indexOf(nLetter) !== -1){
		if(acc[nLetter]){
			acc[nLetter]++;
		}else{
			acc[nLetter] = 1;	
		}
	},{});
}

function addKeyAndValue(arr, key, value){
	return arr.reduce(function(acc,next,index){ acc[index][key] = value; return acc; },arr);
}

function partition(arr, cb){
	return arr.reduce(function(acc,next){
       if(cb(next)){
		acc[0].push(next);
       } else {
		acc[1].push(next);
       }
    return acc;
    }, [[],[]]);
}