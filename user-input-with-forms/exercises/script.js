//Code Your Solution Below
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let testNameInput = document.querySelector("input[name=testName]");
        let testDateInput = document.querySelector("input[name=testDate]");
        let rocketTypeInput = document.querySelector("input[name=rocketType]");
        let boosterCountInput = document.querySelector("input[name=boosterCount]");
        let windRatingInput = document.querySelector("input[name=windRating]");
        let productionServersInput = document.querySelector("input[name=productionServers]");

        if (testNameInput.value === "" ||
            testDateInput.value === "" ||
            rocketTypeInput.value === "" ||
            boosterCountInput.value === "" ||
            windRatingInput.value === "" ||
            productionServersInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});