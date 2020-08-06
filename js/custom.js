// Animation
$(document).ready(function () {
	$("#packAdd").fadeOut();
	$("#gallAdd").fadeOut();

	$("#packAddBtn").click(function () {
		$("#packAdd").fadeToggle(400);
	})

	$("#gallAddBtn").click(function () {
		$("#gallAdd").fadeToggle(400);
	})

	$("#scrollBtn").click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	})

})

// Copyright Information
document.getElementById("copyright-name").innerHTML = `5 Stars Hotel, Copyright &copy ${new Date().getFullYear()}`;


// Scroll to top
var scrollBtn = document.getElementById('scrollBtn');

window.onscroll = function () {
	if (document.documentElement.scrollTop <= 200) {
		scrollBtn.classList.add("hide");
		scrollBtn.classList.remove("show");
	} else {
		scrollBtn.classList.add("show");
		scrollBtn.classList.remove("hide");
	}
}