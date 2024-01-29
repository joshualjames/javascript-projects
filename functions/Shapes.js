//Rectangle

function makeLine(size, char = "#") {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}
// console.log(makeLine(5));
function makeSquare(width, height, char = "#") {
    square = makeRectangle(width, height, char);
    if (width !== height) {
        console.log("This is a rectangle, not a square. All squares are rectangles, but not all rectangles are squares.")
    }
    return square;
}

// console.log(makeSquare(5));
 
function makeRectangle(width, height, char = "#") {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width, char) + '\n';
    }
    return rectangle.slice(0, -1);
}

// console.log(makeRectangle(5, 3));
// console.log(makeSquare(4, 4));

function makeDownwardStairs(height, char = "@") {
    let downwardStairs = '';
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine((i + 1),char) + '\n');
    }
    return downwardStairs.slice(0, -1);
}

// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars, char = "#") {
    let spaceLineArray = [];
    let spaceLine = "";
    spaceLineArray.push(makeLine(numSpaces, " "));
    spaceLineArray.push(makeLine(numChars, char));
    spaceLineArray.push(makeLine(numSpaces, " "));
    spaceLine = spaceLineArray.join("");
    return spaceLine;
}

// console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height, char = "#") {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1, char) + '\n');
    }
    return triangle.slice(0, -1);
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height, char = "#") {
    let diamond = "";
    let reversedDiamond = makeIsoscelesTriangle(height, char).split('').reverse().join('');
    diamond = makeIsoscelesTriangle(height, char) + '\n' + reversedDiamond;

    return diamond;
}

console.log(makeDiamond(5, "@"));