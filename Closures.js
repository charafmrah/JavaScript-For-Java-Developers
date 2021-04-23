//1st example:
function soundMaker(sound, times) {

    //This is a closure
    function makeSound() {
        console.log(`${sound}`);   
    }

    for(let i = 0; i < times; i++) {
        makeSound();
    }
}

soundMaker("woof", 5);

console.log("------------");

//2nd example:
function summation(arr) {
    let sum = 1;

    //closure
    function summer() {
        for(let i = 0; i < arr.length; i++) {
            sum *= arr[i]; //sum will change outside of this function as well
        }
    }

    summer();

    return sum;
}

console.log(summation([1,2,3,4]));