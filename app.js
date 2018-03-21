console.log("Hi");

$(document).ready(function(){

	document.addEventListener("keydown", function(event){

			if(event.keyCode == 39) {
			
			$("#box").animate({left: "+=10px"});
			$("#box1").animate({left: "+=12px"});
		}


	})




//dt
});