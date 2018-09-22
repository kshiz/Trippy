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

var cities = ["San Francisco", "Tokyo", "London", "Boston"];

for (i = 0; i < 100; i++) {
  sourceindex = Math.floor(Math.random() * 3);
  destinationindex = Math.floor(Math.random() * 3);
  flights.push({
    source: cities[sourceindex],
    destination: cities[destinationindex],
    price: Math.random() * 1000
  });

  trains.push({
    source: cities[sourceindex],
    destination: cities[destinationindex],
    price: Math.random() * 500
  });

  cars.push({
    source: cities[sourceindex],
    destination: cities[destinationindex],
    price: Math.random() * 700
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
    console.log(hotel.stars);
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


console.log(restaurants);
$(() => {
  $(".parallax").parallax();
  $(".dropdown-trigger").dropdown();

  var map;
  var destination;
  var source;
  var budget;

  $("#dropdown1>li").click(function() {
    destination = $(this).text();
  });

  $("#dropdown2>li").click(function() {
    source = $(this).text();
  });

  $("#submit").click(function() {
    budget = $("#budget").value();
    $("#budget_display").text(budget);
    for (i=0; i<trains.length; i++)
    {
        if(trains[i].source==source&&trains[i].destination==destination&&trains.price<=budget)
        {
                
        }

        if(flights[i].source==source&&flights[i].destination==destination&&flights.price<=budget)
        {

        }

        if(cars[i].source==source&&cars[i].destination==destination&&cars[i].price<=budget)
        {

        }


        
        
    }    

    
  });


  //initMap();
});

// function()
// {

// }

// ()=>{

// }

function insertTrain(train) {
  var data = train.name + ' | ' + train.price;
  $("#train-list").append('<li>' + data + '</li>');
}

function insertCab(cab) {
  var data = cab.price;
  $("#cab-list").append('<li>' + data + '</li>');
}
function insertFlight(flught) {
  var data = flight.id + ' | ' + flight.price;
  $("#cab-list").append('<li>' + data + '</li>');
}


