//Rectangle

function makeLine(size, char = "#") {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}
// console.log(makeLine(5));
function makeSquare(width, height) {
    square = makeRectangle(width, height);
    if (width !== height) {
        console.log("This is a rectangle, not a square. All squares are rectangles, but not all rectangles are squares.")
    }
    return square;
}

// console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0, -1);
}

// console.log(makeRectangle(5, 3));
// console.log(makeSquare(4, 4));

function makeDownwardStairs(height) {
    let downwardStairs = '';
    for (let i = 0; i < height + 1; i++) {
        downwardStairs += makeLine(i + 1) + '\n';
    }
    return downwardStairs.slice(0, -1);
}

// console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaceLineArray = [];
    let spaceLine = "";
    spaceLineArray.push(makeLine(numSpaces, " "));
    spaceLineArray.push(makeLine(numChars));
    spaceLineArray.push(makeLine(numSpaces, " "));
    spaceLine = spaceLineArray.join("");
    return spaceLine;
}

// console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}

// console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    let diamond = "";
    let reversedDiamond = makeIsoscelesTriangle(height).split('').reverse().join('');
    diamond = makeIsoscelesTriangle(height) + '\n' + reversedDiamond;

    return diamond;
}

console.log(makeDiamond(5));