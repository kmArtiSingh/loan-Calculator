window.onload = function(){
    

var output = document.getElementById("btn");

function calculation(){
    
var amount = +(document.getElementById("amt").value);
var tenure = +(document.getElementById("yrs").value);
var rateI  =  +(document.getElementById("int").value);
    
var t = tenure/12;
var n = 4;

//p(1+(r/n)) power nt

var totalInterest = amount*(Math.pow((1+(rateI/n)),(n*t)));

var pAmount = tenure * amount ;

document.getElementById("result").innerHTML = "<p> Your Maturity value with interest is: <b> &#8377; "   + (Math.round(pAmount + totalInterest)) + "</b></p>";
document.getElementById("result").style.padding = "10px"

}
output.addEventListener("click", calculation);
    
}