console.log("Hi");

$(document).ready(function(){


	//var stopFunction = function (){
		//	$(".boxes").stop();
		//}

	document.addEventListener("keydown", function(event){


		let boxParse1 = parseInt($("#box1").css('left'))
		let boxParse2 = parseInt($("#box2").css('left'))


	if(event.keyCode == 39) {
			
		$("#box1").animate({left: "+=10px"});
			
	} else if (event.keyCode == 37){

		$("#box2").animate({left: "+=12px"});
	}

	console.log(typeof(boxParse2));

	if(boxParse1 === 300){ 

		alert("Box 1 wins");
		location.reload();

	} else if (boxParse2 === 300) {

		alert("Box 2 wins");
		location.reload();

	}


})



//dt
});