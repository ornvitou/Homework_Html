function challenge4(arr , char) {
let sum = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] == char){
            sum++;
        }
    }
    return sum;
}

array = "aaa bbb cccc a" 

let result = challenge4(array, 'a');
console.log(result);