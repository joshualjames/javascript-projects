// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, ISBN, numberPages, checkoutCount, discardedStatus) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numberPages = numberPages;
        this.checkoutCount = checkoutCount;
        this.discardedStatus = discardedStatus;
    }
    checkout(uses) {
        this.checkoutCount += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numberPages, checkoutCount, discardedStatus) {
        super(title, author, copyrightDate, ISBN, numberPages, checkoutCount, discardedStatus);
    }
    ageCheck(currentYear) {
        if (currentYear - this.copyrightDate > 5) {
            this.discardedStatus = "Discarded";
       }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numberPages, checkoutCount, discardedStatus) {
        super(title, author, copyrightDate, ISBN, numberPages, checkoutCount, discardedStatus);
    }
    wearAndTearCheck(checkoutCount) {
        if (checkoutCount > 100) {
            this.discardedStatus = "Discarded";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "Not Discarded");
let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "Not Discarded");

// Code exercises 4 & 5 here:
shuttleManual.ageCheck(2024);
console.log(shuttleManual);

prideAndPrejudice.checkout(5);
prideAndPrejudice.wearAndTearCheck();
console.log(prideAndPrejudice);