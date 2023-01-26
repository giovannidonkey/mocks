//forEach Problems

function doublValues(arr){

	let nArr = [];
	arr.forEach(function(value){
		
		nArr.push(value * 2);
	});
	
	return nArr;
}

function onlyEvenValues(arr){
	
	let nArr = [];
	arr.forEach(function(value){
			
		if(value % 2 === 0){
			nArr.push(value);
		}
	});
	return nArr;
}

function showFirstAndLast(strArr){
	
	let nArr = [];
	strArr.forEach(function(value){
		nArr.push(value[0] + value[value.length - 1]);
	});
	return nArr;
}

function addKeyAndValue(arr,key,value){
	arr.forEach(function(val){
		val[key] = value;
	});
	return arr;
}

function vowelCount(str){
	
	const vowels = "aeiou";
	let valArr = str.split("");
	let newObj = {};
	
	valArr.forEach(function(value){
		
		let nVal = value.toLowerCase();
		if(vowels.indexOf(nVal) !== -1){
			if(obj[nVal]){
				obj[nVal]++;
			}else{
				obj[nVal] = 1;
			}
		}
	});	
}	

//Map Problems

function doubleValuesWithMap(arr){
	return arr.app(function(value){return value * 2;});
}

function valTimesIndex(arr){
	return arr.app(function(value,index){ return value * index;});
}	

function extractKey(arr, key){
	return arr.map(function(value){ return value[key];});	
}	

function extractFullName(arr){
	return arr.map(function(value){ return value.first +" "+ value.last});	
}

//Filter Problems

function filterByValue(arr, key) {
	return arr.filter(function(value){ return value[key] !== undefined;});
}

function find(arr, value){
	return arr.filter(function(val){ return val === value;})[0];
}

function findInObj(arr, key, value) {
	return arr.filter(function(val){ return val[key] === value;})[0];
}

function removeVowels(str) {
	const vowels = "aeiou";
	return str.toLowerCase().split("").filter(function(value){ return vowels.indexOf(value) === -1;}).join("");
}

function doubleOddNumbers(arr) {
	return arr.filter(function(value){ return value % 2 !== 0;}).map(function(value){ return value * 2;});
}