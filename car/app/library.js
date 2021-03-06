

'use strict'



var submit =function() {

      var inheritance = function(childClass, parentClass) {

          childClass.prototype = Object.create(parentClass.prototype);
      }

      // base car class
      var Car = function(Name='General',Model='GM') {
          this.name  = Name ;
          this.model = Model ;
          this.speed = '0 km/h';
          this.isSaloon = true;
          this.numOfDoors = 4;
          this.numOfWheels = 4;
          this.drive = function(n) { return}  ;

          return this;

      }
    
    // four wheel cars 
     var Saloon = function(Name='General',Model='GM') {
          this.name  = Name ;
          this.model = Model ;
          this.speed = '0 km/h';
          this.isSaloon = true;
          this.numOfDoors = 4;
          this.numOfWheels = 4;
          this.drive = function(n) {
               this.speed = (n * 50).toString() + ' km/h' ;
               return this;
          };
           return this;
     }
     // Saloon inherits Car
     inheritance(Saloon,Car);

     // two wheel cars class
      var TwoWheel = function(Name='General',Model='GM') {
          this.name  = Name ;
          this.model = Model ;
          this.speed = '0 km/h';
          this.isSaloon = true;
          this.numOfDoors = 2;
          this.numOfWheels = 4;
          this.drive = function(n) {
               this.speed = (n * 50).toString() + ' km/h' ;
               return this;
          }
          return this;
     }
     // TwoWheel inherits Car
     inheritance(TwoWheel,Car);

     // Trailer class 
     var Trailer = function(Name='General',Model='GM') {
          this.name  = Name ;
          this.model = Model ;
          this.speed = '0 km/h';
          this.isSaloon = false;
          this.numOfDoors = 2;
          this.numOfWheels = 8;
          this.drive = function(n) {
               this.speed = (n * 11).toString() + ' km/h' ;
               return this;
          }
           return this;
     }
     // Trailer inherits Car
     inheritance(Trailer,Car);

     // export each class
     return {
          Car,
          Saloon,
          TwoWheel,
          Trailer
     }


} ();

module.exports = submit;

