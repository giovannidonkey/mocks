//Destructuring Exercise

//Obj Destructuring 1
console.log(numPlanets); // =returns=> 8
console.log(yearNeptuneDiscovered); // =returns=> 1846

//Obj Destructuring 2
console.log(discoveryYears); // =returns=> {yearNeptuneDiscovered : 1846, yearMarsDiscovered : 1659}

//Obj Destructuring 3
getUserData({firstName : "Alejandro", favoriteColor : "purple"}); // =returns=> "Your name is Alejandro and you like purple"
getUserData({firstName : "Melissa"}); // =returns=> "Your name is Melissa and you like green"
getUserData({}); // =returns=> "Your name is undefined and you like green"

//Arr Destructuring 1
console.log(first); // =returns=> Maya
console.log(second); // =returns=> Marisa
console.log(third); // =returns=> Chi

//Arr Destructuring 2
console.log(raindrops); // =returns=> "Raindrops on roses"
console.log(whiskers); // =returns=> "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // =returns=> ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Arr Destructuring 3
console.log(numbers) // =returns=> [10,30,20]

//ES5 Refactoring 
/*
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
*/
const {a,b} = obj.numbers;

//ES5 Arr Swap
[arr[0], arr[1]] = [arr[1],arr[0]];

//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});