function challenge3(arr) {
    let sum = 0 ; 
    for(let i = 0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

array = [14,15,16,100];
let result = challenge3(array);
console.log(result);