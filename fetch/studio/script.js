//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((res) => {
        res.json().then((json) => {
            let container = document.getElementById("container");
            this.document.getElementById("title")
            container.innerHTML += ` <h2>Number of Astronauts: ${json.length}</h2>`
            // json.sort((a, b) => (a.lastName > b.lastName) ? 1: ((b.lastName > a.lastName))? -1: 0 );
            json.sort((a, b) => { return b.hoursInSpace - a.hoursInSpace });
            console.log(json);
            // json.skills.sort(a, b);
            for (let i = 0; i < json.length; i++) {
                // console.log(json[i].id);
                // if (json[i].active) {
                if (json[i].active) {
                    container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li style="color:green">Active: ${json[i].active}</li>
                    <li>Skills: Physician, ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>`
                } else {
                
                    container.innerHTML += `<div class="astronaut">
                <div class="bio">
                    
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li id="status">Active: ${json[i].active}</li>
                    <li>Skills: Physician, ${json[i].skills}</li>
                    </ul>
                </div>
                <img class = "avatar" src="${json[i].picture}">
            </div>
                    `;
                };
            }
        });
    });
});