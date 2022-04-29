let numArray = [2,4,5,6,0.3,0,5,-9];

exponentiate(numArray, 2);

function exponentiate(arr, exp){
    let finishArr = [];

    arr.forEach(num => {
        finishArr.push(num**exp);
    });
    
    console.log(finishArr);
}