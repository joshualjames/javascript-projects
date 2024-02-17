//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average() {
        let sum = 0;
        for (let score of this.scores) {
            sum += score;
        }
        return (sum / this.scores.length).toFixed(1);
    }
    status() {
        let avgScore = (this.average());
        if (avgScore >= 90) { 
            return "Accepted"; 
        } else if (avgScore >= 80) {
            return "Reserve"
        } else if (avgScore >= 70) {
            return "Probationary"
        } else {
            return "Rejected";
        }
    }
    reachReserve() {
        while (this.status() !== "Reserve") {
            this.addScore(100);
            console.log(this.average());
        }
        return console.log(this.scores.length - 3);
    }    
    reachAccepted() {
        while (this.status() !== "Accepted") {
            this.addScore(100);
            console.log(this.average());
        }
        return console.log(this.scores.length - 3);
    }
    upgradeStatus(currentStatus) {
        while (this.status() !== currentStatus) {
            this.addScore(100);
            console.log(this.average());
        }
        return console.log(this.scores.length - 3);
    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

let candidates = [bubbaBear, merryMaltese, gladGator];
candidates.forEach(candidate => {
    let avgScore = candidate.average();
    let candidateStatus = candidate.status();
    console.log(`${candidate.name} earned an average test score of ${avgScore}% and has a status of ${candidateStatus}`)
})
gladGator.upgradeStatus("Reserve");
gladGator.upgradeStatus("Accepted");
// gladGator.reachReserve();
// gladGator.reachAccepted();

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

// bubbaBear.addScore(83);
// console.log(bubbaBear.average());
// console.log(merryMaltese.average());
// console.log(merryMaltese.status());
// console.log(gladGator.status());
// console.log(bubbaBear.status());
// console.log(`${bubbaBear} earned an average test score of ${bubbaBear.average}% and has a status of ${bubbaBear.status}`)
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

