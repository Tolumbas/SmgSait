
//Floating menu
$("#menu").stick_in_parent();

$(window).click(e=>{
	$(".submenu").removeClass("show");
	$("#rightmenu").removeClass("shown");
	$("#hamburger").addClass("shown");
})

$(".menubutton").click(function (e){
	$(".submenu")
	.not(
		$(this).children(".submenu")
	)
	.removeClass("show");
	$(this).children(".submenu").toggleClass("show");
	e.stopPropagation();
});

$("#hamburger").click(e=>{
	$("#rightmenu").toggleClass("shown");
	$("#hamburger").toggleClass("shown");
	e.stopPropagation();

})
$(".menubutton").has(".submenu").children("a").addClass("disabled");