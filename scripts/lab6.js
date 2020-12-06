var button = document.getElementsByClassName("sponge_bob")[0];
var contacts = document.getElementsByClassName("contacts")[0];

button.onclick = function() {
  	contacts.style.display = "block";
}

contacts.onclick = function() {
  	contacts.style.display = "none";
}

var profile_pic = document.getElementsByClassName("profile")[0];
profile_pic.onclick = function() {
  	if(profile_pic.src.slice(-3) == "jpg"){
  		profile_pic.src = "images/profile_pic2.png";
  	}
  	else{
  		profile_pic.src = "images/profile_pic.jpg";
  	}
} 