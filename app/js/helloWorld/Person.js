/**
 * Class for person
 */

var Person = (function () {

    var Person = function Person(name, dob, address)
    {
        this.name  = name;
        this.dob = dob;
        this.address = address;
    }

    Person.prototype.getName = function() {
        return this.name;
    }

    Person.prototype.getAddressUpperCase = function() {
        return this.address.toUpperCase();
    }

    return Person;

}());