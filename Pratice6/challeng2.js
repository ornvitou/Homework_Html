function challenge2(arr) {
    let reverse = [];
    for( let i = 0 ; i<arr.length ; i++){
        reverse[i] = arr[arr.length-i-1];
    }
    return reverse;
}

array = [14,15,16,20];
let result = challenge2(array);
console.log(result);