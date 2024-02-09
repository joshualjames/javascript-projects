const checkFive = require('../checkFive.js');

describe('checkFive', () => {

    test("confirms number is less then five", () => {
        let result = checkFive(2);
        expect(result).toBe(`2 is less than 5.`);
    });

    test("confirms number is equal to five", () => {
        let result = checkFive(5);
        expect(result).toBe('5 is equal to 5.');
    });
    
    test("confirms number is greater than five", () => {
        let result = checkFive(7);
        expect(result).toBe('7 is greater than 5.');
    });

});