function challenge5(arr) {
let sum = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] == ' ' ){
            sum++;
        }
        
    }
    return sum+1;
}

array = "aaa bbb cccc aaa dddd";

let result = challenge5(array);
console.log(result);