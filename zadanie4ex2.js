var x = document.getElementsByClassName("element");
x[0].style.color = "red";
var x = document.getElementsByClassName("element");
x[1].style.color = "red";
var x = document.getElementsByClassName("element");
x[2].style.color = "red";

var x = document.getElementsByClassName("element");
x[3].style.color = "green";
var x = document.getElementsByClassName("element");
x[4].style.color = "green";
var x = document.getElementsByClassName("element");
x[5].style.color = "green";

//second way:
  var myCollection = document.getElementsByClassName("element");
  var i;
  for (i = 0; i < 3; i++) {
    myCollection[i].style.color = "red";
  }
  for (i = 3; i < 6; i++) {
    myCollection[i].style.color = "green"
  };
