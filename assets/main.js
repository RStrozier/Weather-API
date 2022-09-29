// Global Variables
var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var date;

// API Variables
var APIKey = "200adbb0f2adaf883f00531ab55d6057";
var getResult =
  "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&appid={APIKey}";

// Able to get array for Cleveland search
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=Cleveland" +
  inputValue.value +
  "&appid=200adbb0f2adaf883f00531ab55d6057";

// Save to local storage
var inputStorage = document.getElementById("searchCity");

function localStorage() {
    localStorage.setItem('inputStorage', input);
}
    console.log(localStorage);  

//   On click generate search input fields
button.addEventListener('click', function () {
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      var name = document.querySelector(".name");
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
    });
});

// Create object for JSON String
let userResults = {
    city: "Cleveland",
    date: "9/29/2022",
    condition: "Clear",
    temperature: "58",
    humidity: "10%",
    wind: "3mph"

};

// Convert Object to JSON string
let userResults_init = JSON.stringify(userResults);

// Save results to user storage
function userResults_Storage() {
  localStorage.setItem("userResults" , userResults_init); 
}
console.log(localStorage);


//TO-DO: Need to create a search history for local storage 
//TO-DO: When submit button is pressed, text is cleared and goes to local storage
// Local storage recalled and placed under search history tab
//TO-DO: Make storage user history appear on the side


