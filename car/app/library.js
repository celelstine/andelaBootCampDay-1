
'use strict'

class Car {
    constructor (Name='General', Model='GM', Other='') {
        this.name = Name;
		this.model = Model;

		  if ( this.name === 'Porshe' || this.name === 'Koenigsegg') {
		  	this.numOfDoors = 2;
		  } else {
		  	this.numOfDoors = 4;
		  }

		  if (Other == 'trailer') {
		  	this.numOfWheels = 8;
		  	this.isSaloon = false;

		  } else {
		  	this.numOfWheels = 4;
		  	this.isSaloon = true;
		  }
		  
		  this.speed= '0 km/h'
    }

    drive (n) {
        if (this.isSaloon === true) {
 		this.speed = (n * 50).toString() + ' km/h' ;
 		return this;
	 	} else {
	 		this.speed = (n * 11).toString() + ' km/h' ;
	 		return this;
	 	}

    }
}

module.exports = Car;