/**
 * Created by James on 16/04/2016.
 */

console.log(HelloWorld.sayHello("James"));

var james = new Person("James Jillians", "16/01/1978", "15 Cheltenham Road");
var christine = new Person("Christine Jillians", "29/07/1979", "15 Cheltenham Road");

console.log("Person1: " + james.getName() + " " + james.getAddressUpperCase());
console.log("Person2: " + christine.getName() + " " + christine.getAddressUpperCase());