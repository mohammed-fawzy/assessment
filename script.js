
let nameElement = document.getElementById('name');
nameElement.innerHTML = 'Mohamed Fawzy';


const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
let year = date.getFullYear();
let dateElement = document.getElementById('date');
dateElement.innerHTML = `${day}/${month}/${year}`;


var modal = document.getElementById("myModal");

var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function( event ) {
  event.preventDefault();
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}