"use strict";

//Floating menu
$("#menu").stick_in_parent();

$(window).click(function (e) {
	$(".submenu").removeClass("show");
	$("#rightmenu").removeClass("shown");
	$('#hamburger').attr("src", "imgs/hamburger.svg");
});

$(".menubutton").click(function (e) {
	$(".submenu").not($(this).children(".submenu")).removeClass("show");
	$(this).children(".submenu").toggleClass("show");
	e.stopPropagation();
});

$("#hamburger").click(function (e) {
	$("#rightmenu").toggleClass("shown");
	if ($("#rightmenu").hasClass("shown")) $('#hamburger').attr("src", "imgs/hamburgerClicked.svg");else $('#hamburger').attr("src", "imgs/hamburger.svg");
	e.stopPropagation();
});
$(".menubutton").has(".submenu").children("a").addClass("disabled");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9qcy90ZXN0LmpzIl0sIm5hbWVzIjpbIiQiLCJzdGlja19pbl9wYXJlbnQiLCJ3aW5kb3ciLCJjbGljayIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImUiLCJub3QiLCJjaGlsZHJlbiIsInRvZ2dsZUNsYXNzIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzQ2xhc3MiLCJoYXMiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBQSxFQUFFLE9BQUYsRUFBV0MsZUFBWDs7QUFFQUQsRUFBRUUsTUFBRixFQUFVQyxLQUFWLENBQWdCLGFBQUc7QUFDbEJILEdBQUUsVUFBRixFQUFjSSxXQUFkLENBQTBCLE1BQTFCO0FBQ0FKLEdBQUUsWUFBRixFQUFnQkksV0FBaEIsQ0FBNEIsT0FBNUI7QUFDQUosR0FBRSxZQUFGLEVBQWdCSyxJQUFoQixDQUFxQixLQUFyQixFQUEyQixvQkFBM0I7QUFDQSxDQUpEOztBQU1BTCxFQUFFLGFBQUYsRUFBaUJHLEtBQWpCLENBQXVCLFVBQVVHLENBQVYsRUFBWTtBQUNsQ04sR0FBRSxVQUFGLEVBQ0NPLEdBREQsQ0FFQ1AsRUFBRSxJQUFGLEVBQVFRLFFBQVIsQ0FBaUIsVUFBakIsQ0FGRCxFQUlDSixXQUpELENBSWEsTUFKYjtBQUtBSixHQUFFLElBQUYsRUFBUVEsUUFBUixDQUFpQixVQUFqQixFQUE2QkMsV0FBN0IsQ0FBeUMsTUFBekM7QUFDQUgsR0FBRUksZUFBRjtBQUNBLENBUkQ7O0FBVUFWLEVBQUUsWUFBRixFQUFnQkcsS0FBaEIsQ0FBc0IsYUFBRztBQUN4QkgsR0FBRSxZQUFGLEVBQWdCUyxXQUFoQixDQUE0QixPQUE1QjtBQUNBLEtBQUlULEVBQUUsWUFBRixFQUFnQlcsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBSixFQUNDWCxFQUFFLFlBQUYsRUFBZ0JLLElBQWhCLENBQXFCLEtBQXJCLEVBQTJCLDJCQUEzQixFQURELEtBR0VMLEVBQUUsWUFBRixFQUFnQkssSUFBaEIsQ0FBcUIsS0FBckIsRUFBMkIsb0JBQTNCO0FBQ0ZDLEdBQUVJLGVBQUY7QUFFQSxDQVJEO0FBU0FWLEVBQUUsYUFBRixFQUFpQlksR0FBakIsQ0FBcUIsVUFBckIsRUFBaUNKLFFBQWpDLENBQTBDLEdBQTFDLEVBQStDSyxRQUEvQyxDQUF3RCxVQUF4RCIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9GbG9hdGluZyBtZW51XHJcbiQoXCIjbWVudVwiKS5zdGlja19pbl9wYXJlbnQoKTtcclxuXHJcbiQod2luZG93KS5jbGljayhlPT57XHJcblx0JChcIi5zdWJtZW51XCIpLnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuXHQkKFwiI3JpZ2h0bWVudVwiKS5yZW1vdmVDbGFzcyhcInNob3duXCIpO1xyXG5cdCQoJyNoYW1idXJnZXInKS5hdHRyKFwic3JjXCIsXCJpbWdzL2hhbWJ1cmdlci5zdmdcIik7XHJcbn0pXHJcblxyXG4kKFwiLm1lbnVidXR0b25cIikuY2xpY2soZnVuY3Rpb24gKGUpe1xyXG5cdCQoXCIuc3VibWVudVwiKVxyXG5cdC5ub3QoXHJcblx0XHQkKHRoaXMpLmNoaWxkcmVuKFwiLnN1Ym1lbnVcIilcclxuXHQpXHJcblx0LnJlbW92ZUNsYXNzKFwic2hvd1wiKTtcclxuXHQkKHRoaXMpLmNoaWxkcmVuKFwiLnN1Ym1lbnVcIikudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn0pO1xyXG5cclxuJChcIiNoYW1idXJnZXJcIikuY2xpY2soZT0+e1xyXG5cdCQoXCIjcmlnaHRtZW51XCIpLnRvZ2dsZUNsYXNzKFwic2hvd25cIik7XHJcblx0aWYgKCQoXCIjcmlnaHRtZW51XCIpLmhhc0NsYXNzKFwic2hvd25cIikpXHJcblx0XHQkKCcjaGFtYnVyZ2VyJykuYXR0cihcInNyY1wiLFwiaW1ncy9oYW1idXJnZXJDbGlja2VkLnN2Z1wiKTtcclxuXHRlbHNlXHJcblx0XHRcdCQoJyNoYW1idXJnZXInKS5hdHRyKFwic3JjXCIsXCJpbWdzL2hhbWJ1cmdlci5zdmdcIik7XHJcblx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbn0pXHJcbiQoXCIubWVudWJ1dHRvblwiKS5oYXMoXCIuc3VibWVudVwiKS5jaGlsZHJlbihcImFcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTsiXX0=
