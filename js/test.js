
//Floating menu

$("#menu").stick_in_parent();

$(".menubutton").hover(function (e){
	$(this).children(".submenu").addClass("show");
},function(e){
	$(this).children(".submenu").removeClass("show");
});