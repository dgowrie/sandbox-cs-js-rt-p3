var numPeeps = 100;
var rainInInches = 2;
var numSharks = 3;

var fear = fearGenerated(numPeeps, rainInInches, numSharks);
var fearMessage;
var startRide;


var low = "Fear Level: LOW \n" +
	"Should be no problem at all...mwahaha. \n" +
	"Still wanna ride?";
var medium = "Fear Level: MEDIUM. \n" +
	"You may want to rethink this one, man. MWAHAHA! \n" +
	"Think you'll make it?";
var high = "Fear Level: HIGH \n" +
	"ABANDON ALL HOPE!! \n" +
	"Have a death wish?";

if (fear > 200) {
	fearMessage = function () {
		return window.confirm(low);
	};
} else if ( fear >=200 && fear >= 300) {
	fearMessage = function () {
		return window.confirm(medium);
	};
} else if (fear >= 300 && fear <= 400) {
	fearMessage = function () {
		return window.confirm(high);
	};
}

startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
	return confirmToGo();
}



var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage;

if(fear < 200){
  fearMessage = function () {
	return confirm( "Fear Level: LOW.\n" +
	  "Should be no problem at all...mwahaha.\n" +
	  "Still wanna ride?");
  };

} else if (fear<=300) { 
  fearMessage = function () {
	return confirm( "Fear Level: MEDIUM.\n" + 
	  "You may want to rethink this one, man. MWAHAHA!\n" +
	  "Think you'll make it?");
  };

} else {
  fearMessage = function () {
	return confirm( "Fear Level: HIGH.\n" + 
	  "ABANDON ALL HOPE!!\n" + 
	  "Have a death wish?" );
  };
}

var startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
  return confirmToGo();
}



// Random lesson
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};


function dontPanic(location) {
  var msg = "Avast, me hearties!\nThere be Pirates nearby! Stations!\n",
      name,
      station,
      superblinder;
  for (var i = 1; i <= location.numRangers; i++) {
  	msg.push(location["ranger" + i].name + " , man the " + superBlinders[location["ranger" + i].station][0] + " !"); 
  }
}

dontPanic(lighthouseRock);


// ! OBJECTS

// Aquarium example from video
var aquarium = {

	Nemo: {type: "fish", species: "clownfish", length: 3.7},
	Marlin: {type: "fish", species: "clownfish", length: 4.1},
	Dory: {type: "fish", species: "blue tang", length: 6.2},
	"Coral Castle": {type: "environment", material: "coquina", moves: false},
	"Dragon Statue": {type: "environment", material: "plastic", moves: false},
	addCritter: function (name, type, species, length) {
		this[name] = {type: type, species: species, length: length}; // 'this' will always refer to the owner object of the function in which the 'this' is used
	}
};



function addToy(container, name, type, material, moves) {
	container[name] = {type: type, material: material, moves: moves};
}

aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);


aquarium.takeOut = function (name) {
	this[name].name = name; // to hold the objects name;
		// The first 'name' in this line of code finds the desired Object in the aquarium using the parameter as the property name.
		// Coming after a dot, the second 'name' creates a new property IN the Object we want to remove. Notice that this is NOT the same as the function's parameter.
		// The third 'name' IS the functions parameter. It assigns the old property name to the newly created 'name' property in the removed Object

	var temp = this[name]; // hold on to the object we remove, so as to still have access to it outside the aquarium - temp is assigned a reference to the object that 'this.name' points to
	delete this[name]; // remove the property from the owner object - the aquarium
	return temp; // we return the temp var, so that we can still have a reference to the removed object
}


// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/11

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},

  addRanger: function (name, skillz, station) {
	this["ranger" + this.numRangers] = {
	  name: name,
	  skillz: skillz,
	  station: station
	};
	}
		
};




// http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/15
var vehicle3 = {
	type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
	ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
	ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
	ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
	ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
	numRangers: 4
};


function relieveDuty(vehicle, day) {
	var i,
	j,
	shifted,
	offDuty = [],
	onDuty = [];
  
	// remove the rangers, sorted by offDuty and onDuty
	for(i = 1; i <= vehicle["numRangers"]; i++) {
		if (vehicle["ranger" + i]["dayOff"] === day) {
			offDuty.push(vehicle["ranger" + i]);
			console.log(vehicle["ranger" + i] + " removed, offDuty");
		}
		else {
			onDuty.push(vehicle["ranger" + i]);
			console.log(vehicle["ranger" + i] + " onDuty");
		}
		delete vehicle["ranger" + i];
	}

	vehicle["numRangers"] -= offDuty.length;

	console.log("offDuty: " + offDuty);
	console.log("onDuty " + onDuty);

	// add back the onDuty rangers 
	for(j = 1; j <= vehicle["numRangers"]; j++) {
		// shifted = onDuty.shift();
		// console.log(shifted);
		// vehicle["ranger" + j] = {name: shifted["name"], skillz: shifted["skillz"], dayOff: shifted["dayOff"]};
		vehicle["ranger" + j] = onDuty.shift();
		console.log(vehicle["ranger" + j] + " still onDuty");
	}

	return offDuty;
}

var offToday = relieveDuty(vehicle3, "Friday");




