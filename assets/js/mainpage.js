var serverSideDataFromFakeApiCall = {};  //initialize global to hold data
window.onload = function(event){
    /* 
    due to lack of participation within this team, we altered the requirements.
    in lieu of 2 api's, we're having Nathan simply load a pre-cooked JSON file as though it were an API.

    I am contributing this code to get Nathan started.
    
    --BVH 1/4/2022

    */
    console.log("page load complete");
    fetch('./server-side-data.json')
            .then(response => response.json())
            .then(data => {
                serverSideDataFromFakeApiCall = data;
                console.log(serverSideDataFromFakeApiCall);
            });
}