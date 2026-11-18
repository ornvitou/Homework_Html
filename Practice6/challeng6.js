function challenge6(arr){

    let countA = 0;
    let countB = 0;
    let countC = 0;

    for(let i = 0; i < arr.length; i++){

        let letter = arr[i].trim().toUpperCase();

        if(letter == 'A'){
            countA++;
        }else if(letter == 'B'){
            countB++;
        }else if(letter == 'C'){
            countC++;
        }
    }

    if (countA > countB && countA > countC) {
        return 'A';
    } else if (countB > countA && countB > countC) {
        return 'B';
    } else if (countC > countA && countC > countB) {
        return 'C';
    } else if(countA == countB) {
        return "A and B are win!";
    } else if(countA == countC) {
        return "A and C are win!";
    } else if(countB == countC) {
        return "C and B are win!";
    }
}

let array = ['a', 'b', 'c', 'a', 'b', 'c' , 'a' , 'c'];

let result = challenge6(array);
console.log(result);