var button = document.getElementById("product-button-1");
var button2 = document.getElementById("product-button-2");
var dropdownContainerEl = document.querySelector("#productOneDropdown");
var dropdownContainerEl2 = document.querySelector("#productTwoDropdown");

button.onmouseover = function(event) {

    var fakeApi = serverData;
    
    for (let i = 0; i <= fakeApi.data.length; i++) {

        var prodNameEl = document.createElement("option");
        prodNameEl.setAttribute("id", "options");
        prodNameEl.textContent = fakeApi.data[i]["item-name"];
        dropdownContainerEl.appendChild(prodNameEl);
    }
};

button.onmouseleave = function(event) {

    var dieOptionsDie = document.getElementById("options")
    dieOptionsDie.remove();

}

button2.onmouseover = function(event) {

    var fakeApi = serverData;
    
    for (let i = 0; i <= fakeApi.data.length; i++) {

        var prodNameEl = document.createElement("option");
        prodNameEl.setAttribute("id", "options");
        prodNameEl.textContent = fakeApi.data[i]["item-name"];
        dropdownContainerEl2.appendChild(prodNameEl);
    }
};

button2.onmouseleave = function(event) {

    var dieOptionsDie = document.getElementById("options")
    dieOptionsDie.remove();

}

