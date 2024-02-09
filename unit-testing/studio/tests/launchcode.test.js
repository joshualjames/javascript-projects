// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function () {

  test("verify the value of organization is 'nonprofit'", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("verify the value of executiveDirector is 'Jeff'", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("verify the value of percentageCoolEmployees has the type number.", () => {
    expect(typeof (launchcode.percentageCoolEmployees)).toBe("number");
  });
  
  test("verify 'JavaScript' is contained within the array of programsOffered", () => {
    expect(launchcode.programsOffered.includes("JavaScript"));
  });

  test("verify 'Python' is contained within the array of programsOffered", () => {
    expect(launchcode.programsOffered.includes("Python"));
  });

  test("verify 'Java' is contained within the array of programsOffered", () => {
    expect(launchcode.programsOffered.includes("JavaScript"));
  });

  test("verify the length of the array within programsOffered.", () => {
    expect(launchcode.programsOffered.length).toBe(3)
  });

});

describe("Testing launchOutput", function () {
  
  test("verify a number divisible by 2 passed to launchOutput() returns 'Launch!'", () => {
    let result = launchcode.launchOutput(8);
    expect(result).toBe('Launch!');
  });

  test("verify a number only divisible by 3 passed to launchOutput() returns 'Code!'", () => {
    let result = launchcode.launchOutput(9);
    expect(result).toBe('Code!');
  });

  test("verify a number only divisible by 5 passed to laucnOutput() returns 'Rocks!'", () => {
    let result = launchcode.launchOutput(25);
    expect(result).toBe('Rocks!');
  });

  test("verify a number divisible by 2 and 3 passed to launchOutput() returns 'LaunchCode!'", () => {
    let result = launchcode.launchOutput(12);
    expect(result).toBe('LaunchCode!');
  });

  test("verify a number divisible by 3 and 5 passed to launchOutput() returns 'Code Rocks!'", () => {
    let result = launchcode.launchOutput(15);
    expect(result).toBe('Code Rocks!');
  });

  test("verify a number divisible by 2 and 5 passed to launchOutput() returns 'Launch Rocks!'", () => {
    let result = launchcode.launchOutput(10);
    expect(result).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("verify a number divisible by 2, 3, and 5 passed to launchOutput() returns 'LaunchCode Rocks!'", () => {
    let result = launchcode.launchOutput(30);
    expect(result).toBe('LaunchCode Rocks!');
  });
  
  test("verify a number not divisible by 2, 3, or 5 passed to launchOutput() returns 'Rutabagas! That doesn't work.'", () => {
    let result = launchcode.launchOutput(13);
    expect(result).toBe("Rutabagas! That doesn't work.");
  });

});