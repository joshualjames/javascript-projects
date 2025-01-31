// Write your JavaScript code here.
// Remember to pay attention to page loading!
function checkValidPosition(top, left) {
    let rightBoundary = 550;
    let leftBoundary = -20;
    let bottomBoundary = 245;
    let topBoundary = -5;
    if (
        top < topBoundary ||
        top > bottomBoundary ||
        left < leftBoundary ||
        left > rightBoundary 
        ) {
        return false;
    } else {
        return true;
    }
}

function init() {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");
    const moveLeft = document.getElementById("left");
    const moveRight = document.getElementById("right");
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const shuttleImg = document.getElementById("rocket");
    const statusText = document.getElementById("flightStatus");
    const shuttleHeightText = document.getElementById("spaceShuttleHeight");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleBackgroundWidth = shuttleBackground.offsetWidth;

    let shuttleImgTop = 245;
    let shuttleImgLeft = shuttleBackgroundWidth / 2;
    let shuttleHeight = 0;

    shuttleImg.style.position = "absolute";
    shuttleImg.style.top = shuttleImgTop + "px";
    shuttleImg.style.left = shuttleImgLeft + "px";
    takeOffButton.addEventListener("click", () => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            statusText.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight = 10000;
            shuttleHeightText.innerHTML = shuttleHeight;
        }
    });
    landButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        statusText.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight = 0;
        shuttleHeightText.innerHTML = shuttleHeight;
        shuttleImgTop = 245;
        shuttleImg.style.top = shuttleImgTop + "px";
    });
    abortMissionButton.addEventListener("click", () => {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            statusText.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight = 0;
            shuttleHeightText.innerHTML = shuttleHeight;
            shuttleImgTop = 245;
            shuttleImg.style.top = shuttleImgTop + "px";
        }
    });
    moveLeft.addEventListener("click", () => {
        if (checkValidPosition(shuttleImgTop, shuttleImgLeft - 10)) {
            shuttleImgLeft -= 10;
            shuttleImg.style.left = shuttleImgLeft + "px";
        }
    });
    moveRight.addEventListener("click", () => {
        if (checkValidPosition(shuttleImgTop, shuttleImgLeft + 10)) {
            shuttleImgLeft += 10;
            shuttleImg.style.left = shuttleImgLeft + "px";
        }
    });
    moveUp.addEventListener("click", () => {
        if (checkValidPosition(shuttleImgTop - 10, shuttleImgLeft)) {
            shuttleImgTop -= 10;
            shuttleImg.style.top = shuttleImgTop + "px";
            shuttleHeight += 10000;
            shuttleHeightText.innerHTML = shuttleHeight;
        }
    });
    moveDown.addEventListener("click", () => {
        if (checkValidPosition(shuttleImgTop + 10, shuttleImgLeft)) {
            shuttleImgTop += 10;
            shuttleImg.style.top = shuttleImgTop + "px";
            shuttleHeight -= 10000;
            shuttleHeightText.innerHTML = shuttleHeight;
        }
    });

    abortMissionButton.addEventListener("mouseover", () => {
        abortMissionButton.style.color = 'red';
    });

    abortMissionButton.addEventListener('mouseout', () => {
        abortMissionButton.style.color = '';
    });
    /*
  
  */
}

window.addEventListener("load", init);