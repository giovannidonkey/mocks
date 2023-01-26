function hasOddNumber(arr){
	return arr.some(function(value){ return value % 2 !== 0;});
}

function hasAZero(num){
	return num.toString().split("").some(function(value){ return value === '0';});
}

function hasOnlyOddNumbers(arr){
	return arr.every(function(value){ return value % 2 !== 0;});
}

function hasNoDuplicates(arr){
	return arr.every(function(value){ return arr.indexOf(value) === arr.lastIndexOf(value);});
}

function hasCertainKey(key){
	return arr.every(function(value){ return key in value;});
}

function hasCertainValue(arr,key,cVal){
	return arr.every(function(value){ return value[key] === cVal;});
}