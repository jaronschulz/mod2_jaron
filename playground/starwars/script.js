
// // Garage 4 Spots
// // Park my cars

// // Cars have wheels

// // Attributes:
// // - Color
// // - Model
// // - Brand
// // - Fueltank

// // Functionalities:
// // - drive
// // - honk


// function Car(brand, model, color, fuel){

// 	this.color = color;
// 	this.model = model;
// 	this.brand = brand;
// 	this.fueltank = fuel;

// 	this.drive = function(){
// 		console.log("Im driving");
// 	}

// 	this.honk = function(){
// 		alert("honk!");
// 	}

// }
// var audiTT = new Car("Audi", "TT", "red", 60);
// console.log(audiTT);

// // audiTT.drive();
// // audiTT.honk();

// var mercedesSLK = new Car("Mecredes", "SLK", "gray", 50);
// console.log(mercedesSLK);


// // Garages:
// // atrribues:
// // - spots (limited to four)
// // functionalities
// // - park car
// // - get a car out

// function Garage(spots){

// 	this.spots = [];
// 	this.maximumSpots = spots;

// 	this.parkCar = function(car){
// 		if(this.spots.length < this.maximumSpots){
// 			this.spots.push(car);
// 		} else {
// 			console.error("no space... cant park the " + car.model);
// 		}
// 	}	

// 	this.getCar = function(){

// 	}

// 	this.showCars = function(){
// 		console.table(this.spots);
// 	}

// }

// var christophGarage = new Garage(4);
// console.log(christophGarage);


// christophGarage.parkCar(audiTT);
// christophGarage.showCars();
// christophGarage.parkCar(mercedesSLK);
// christophGarage.showCars();


// var mitsubishiWagon = new Car("Mitsubishi", "Wagon", "blue", 35);
// var fordFocus = new Car("Ford", "Focus", "black", 41);

// christophGarage.parkCar(mitsubishiWagon);
// christophGarage.parkCar(fordFocus);

// christophGarage.showCars();

// var hondaCivic = new Car("Honda", "Civic", "green", 21);
// christophGarage.parkCar(hondaCivic);

// christophGarage.showCars();





// // JSON

// var christoph = {
// 	firstname : "Christoph",
// 	lastname : "Nissen",
// 	birthday : {
// 		year : 1984,
// 		month : 10,
// 		day : 19
// 	},
// 	fullname : function(){
// 		return this.firstname + " " + this.lastname
// 	}
// }
// console.log( christoph.fullname() );
// christoph.firstname = "Christian";
// console.log( christoph);

// var luke = {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.co/api/planets/1/",
// 	"films": [
// 		"https://swapi.co/api/films/2/",
// 		"https://swapi.co/api/films/6/",
// 		"https://swapi.co/api/films/3/",
// 		"https://swapi.co/api/films/1/",
// 		"https://swapi.co/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.co/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.co/api/vehicles/14/",
// 		"https://swapi.co/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.co/api/starships/12/",
// 		"https://swapi.co/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.co/api/people/1/"
// }

$.getJSON("https://swapi.co/api/planets/2/", function(data, textStatus, jqXHR){
	console.log("got a server response");
	console.log(data);

	var homeplanet = data;
	$("#planetname").text( homeplanet.name )

	$("table tbody").empty();

	for (var i = 0; i < homeplanet.residents.length; i++) {
		var element = homeplanet.residents[i];

		console.log(element)

		$.getJSON(element,function(persondata){
			var row = $("<tr>");

			$("<td>").text(persondata.name).appendTo(row);
			$("<td>").text(persondata.height).appendTo(row);
			$("<td>").text(persondata.gender).appendTo(row);

			$("table tbody").append(row);
		})
	}

});

// $.ajax({
//   dataType: "json",
//   url: "https://swapi.co/api/planets/1/",
//   success: function(data, textStatus, jqXHR){
//   	console.log("second call back", data);
//   }
// });


// $.getJSON("senate.json", function(data){
// 	console.log(data);	
// })



