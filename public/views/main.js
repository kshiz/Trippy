function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.773972, lng: 26.2992 },
    zoom: 8
  });
}

flights = [];
trains = [];
cars = [];
hotels = [];
restaurants = [];

var cities = ["San Francisco", "Tokyo", "London", "Boston", "New York"];
var letterstring="ABCDEFGHIJKLMNOPQRSTUVXYZ";
var K=0;

function getLetterIndex()
{
    return Math.floor(Math.random()*26);
}
var K = 0;
for (i = 0; i < 100; i++) {
  sourceindex = K%4;
  destinationindex =(K+1)%4;
  K++;
  // sourceindex = Math.floor(Math.random() * 4);
  // destinationindex = Math.floor(Math.random() * 4);

  

  flights.push({
    source: cities[sourceindex],
    destination: cities[destinationindex],
    price: Math.random() * 1000,
    id: generateRandomString("ABCDEFGHIJKLMNOPQRSTUVXYZ123456790", 5)
  });

  trains.push({
    source: cities[sourceindex],
    destination: cities[destinationindex],
    name: generateRandomString(letterstring, 3),
    price: Math.random() * 500
  });

  cars.push({
    source: cities[sourceindex],
    destination: cities[destinationindex],
    price: Math.random() * 200
  });

  hotels.push({
    stars: Math.floor(Math.random() * 5),
    price: null
  });

  restaurants.push({
    stars: Math.floor(Math.random() * 5),
    price: null
  });
}

console.log(flights);

for (i = 0; i < restaurants.length; i++) {
  let restaurant = restaurants[i];
  let hotel = hotels[i];
  let train = trains[i];
  let flight = flights[i];
  let car = cars[i];

  while (restaurant.price == 0 || restaurant.price == null) {
    while (restaurant.stars == 0) {
      restaurant.stars = Math.floor(Math.random() * 5);
    }
    restaurant.price = restaurant.stars * Math.random() * 100;
    // console.log(restaurant.price);
  }

  while (hotel.price == 0 || hotel.price == null) {
    while (hotel.stars == 0) {
      hotel.stars = Math.floor(Math.random() * 5);
    }

    //console.log("h");
    hotel.price = hotel.stars * Math.random() * 800;
    //console.log(hotel.stars);
  }
  while (train.price == 0 || train.price == null) {
   // console.log("t");
    train.price = Math.random() * 500;
  }

  while (flight.price == 0 || flight.price == null) {
   // console.log("f");
    flight.price = Math.random() * 1000;
  }

  while (car.price == 0 || car.price == null) {
   // console.log("c");
    car.price = Math.random() * 800;
  }
}

function comparator(a, b){
    return a.price<b.price
}
hotels.sort(comparator);
trains.sort(comparator);
flights.sort(comparator);
cars.sort(comparator);
restaurants.sort(comparator);

function generateRandomString(letterString,no)
{
 var str="";
 for(var i=0; i<no; i++)
 {
     str+=letterString[Math.floor(Math.random()*(letterString.length-1))];
     //console.log('hhh');
 }

 return str;
}

//console.log(restaurants);
$(() => {
  $(".parallax").parallax();
  $(".dropdown-trigger").dropdown();

  var map;
  var destination;
  var source;
  var budget;

  $("#dropdown1>li").click(function() {
    destination = $(this).text();
    $('#destinationDrop').html(destination);
  });

  $("#dropdown2>li").click(function() {
    source = $(this).text();
    $('#sourceDrop').html(source);
  });

  $("#submit").click(function() {
    budget = $("#budget #textarea1").val();
    
    $("#train-list").html('');
    $("#cab-list").html('');
    $("#flight-list").html('');
    $("#hotel-list").html('');
    $("#restaurant-list").html('');
    displayBudget(budget);


    //console.log(budget);
    $("#budget_display").text(budget);
    for (i=0; i<trains.length; i++)
    {  
        if(trains[i].source==source&&trains[i].destination==destination&&trains[i].price<=budget)
        {
          insertTrain(trains[i]);
        }
        if(flights[i].source==source&&flights[i].destination==destination&&flights[i].price<=budget)
        {
          insertFlight(flights[i]);
        }

        
        if(cars[i].source==source&&cars[i].destination==destination&&cars[i].price<=budget)
        {
            insertCab(cars[i]);
        }

        
    }    

    
  });


  //initMap();

  // $("#train-list li").on('click', function() {
  //   $(this).css('')
  // });
});

// function()
// {

// }

// ()=>{

// }

function displayBudget(value){

    $("#remainingBudget").text(value);
}

function insertTrain(train) {
  var data = train.name + ' | ' + (train.price).toPrecision(3);

  
  $("#train-list").append($("<li>").html(data).click(function(){

    budget-=train.price;
    displayBudget(budget);

}))
}

function insertCab(cab) {
    var data = cab.id + ' | ' +  (cab.price).toPrecision(3);
  $("#cab-list").append(($("<li>").html(data).click(function(){
    budget-=cab.price;
    displayBudget(budget);
    
})));
 
  
}
function insertFlight(flight) {
  var data = flight.id + ' | ' + (flight.price).toPrecision(3);
  $("#flight-list").append(($("<li>").html(data).click(function(){
    budget-=flight.price;
    displayBudget(budget);
})));
}



