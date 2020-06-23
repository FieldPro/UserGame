"use strict";

	var file = fetch("./data.json")
	
	fetch("./data.json")
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data) {
		console.log(data.users);
	});


function accessDash() {
  location.replace("dashboard.html")
}

function home() {
	location.replace("index.html")
}

//Checks if user has an account in the database
function check() {
	var x = document.forms["myForm"]["username"].value;
	var y = document.forms["myForm"]["password"].value;
	
	if (x == "john") && (y == "johndoo") {
		accessDash();
	}
	else {
		home();
}
}

function correct() {
  document.querySelector("#correct").style.backgroundColor = "green";
  document.getElementById("correct").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;

    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Your total score as at now is: " + localStorage.clickcount;
	} else {
    document.getElementById("result").innerHTML = "Your browser does not support web storage...";
	} 
}


function myFunction1() {
  document.querySelector("#b").style.backgroundColor = "red";
  document.getElementById("correct").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
}

function myFunction2() {
  document.querySelector("#c").style.backgroundColor = "red";
  document.getElementById("correct").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("d").disabled = true;
}

function myFunction3() {
  document.querySelector("#d").style.backgroundColor = "red";
  document.getElementById("correct").disabled = true;
  document.getElementById("b").disabled = true;
  document.getElementById("c").disabled = true;
  document.getElementById("d").disabled = true;
}
