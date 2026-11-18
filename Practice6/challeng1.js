function challenge1(width, height) {
    let rectangleString = '';

    for (let rows = 0; rows < height; rows++) {
        for (let columns = 0; columns < width; columns++) {
            rectangleString += '*';
        }
        rectangleString+='\n';
    }

    return rectangleString;
}

let result = challenge1(5, -2);
console.log(result);