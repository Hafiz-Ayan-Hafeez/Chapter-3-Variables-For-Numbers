var age = 15;
alert("I am " + age + " years old");

var visitTime = 14;
alert("You have visited this site " + visitTime + " times");

var birthYear = 2009;
var h2 = document.querySelector("h2");
h2.innerHTML = "My birth year is " + birthYear;
var h3 = document.querySelector("h3");
h3.innerHTML = "Data type of Declared Variable is " + typeof(birthYear);

var visitorsName = "Hafiz Ayan";
var productTitle = "T-Shirts";
var quantity = "5";

var head = document.querySelector("#head");
head.innerHTML = visitorsName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing Store";