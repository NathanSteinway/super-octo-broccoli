
var showDropDown = function () {

    document.getElementById("myDropDown").classList.toggle("show");

};

document.getElementById("part-type-btn").addEventListener('click', showDropDown);
document.getElementById("series-btn").addEventListener('click', showDropDown);
document.getElementById("model-btn").addEventListener('click', showDropDown);



/* TESTING PART TYPE BUTTON

var testButton = function (event) {
    console.log("I am working!");
}

var testButtonTwo = function (event) {
    console.log("No, I'm working!");
}

var testButtonThree = function (event) {
    console.log("No, I'M working!!!");
}

var testButtonFour = function (event) {
    console.log("You guys...");
}
document.getElementById("part-type-btn").addEventListener('click', testButton);
document.getElementById("series-btn").addEventListener('click', testButtonTwo);
document.getElementById("model-btn").addEventListener('click', testButtonThree);
document.getElementById("compare-btn").addEventListener('click', testButtonFour);
*/
