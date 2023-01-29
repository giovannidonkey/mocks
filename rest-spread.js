//Rest-Spread
const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj, obj1) => ({...obj, ...obj1});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(value => value * 2)];

const removeRandom = items => {
	let index = Math.floor(Math.random * items.length);
	return [...items.slice(0,index), ...items.slice(index + 1)];
}

const extend = (arr, arr1) => {
	return [...arr, ...arr1];
}

const addKeyVal = (obj, key, value) => {
	let nObj = {...obj};
	nObj[key] = value;
	return nObj;
}

const removeKey = (obj,key) => {
	let newObj = { ...obj }
	delete newObj[key]
	return newObj;
}

const combine = (obj, obj1) => {
  return {...obj, ...obj1};
}

const update = (obj, key, value) => {
	let newObj = { ...obj }
	newObj[key] = value;
	return newObj;
}