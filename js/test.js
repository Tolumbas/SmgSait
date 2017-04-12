
$("#home").click(e=>{
	document.location = "/";
})

//Floating menu
$("#menu").stick_in_parent();

$(window).click(e=>{
	$(".submenu").removeClass("show");
	$("#rightmenu").removeClass("shown");
	$('#hamburger').attr("src","imgs/hamburger.svg");
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
	if ($("#rightmenu").hasClass("shown"))
		$('#hamburger').attr("src","imgs/hamburgerClicked.svg");
	else
			$('#hamburger').attr("src","imgs/hamburger.svg");
	e.stopPropagation();

})
$(".menubutton").has(".submenu").children("a").addClass("disabled");