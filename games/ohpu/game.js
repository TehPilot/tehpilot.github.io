var name = "A One Hit Point Uprising"
var images = ['screenshots/1.png', 'screenshots/2.png', 'screenshots/3.png', 'screenshots/4.png'];
var image_index = 0;
var image_max = images.length;

function loadGameContent() {
	updateImage();
	updateName();

	document.getElementById("game-name").innerHTML = name;
}

function advanceSlideshow() {
	image_index++;
	if (image_index > images.length - 1)
		image_index = 0;
	updateImage();
	updateName();
}

function regressSlideshow() {
	image_index--;
	if (image_index < 0)
		image_index = images.length - 1;
	updateImage();
	updateName();
}

function updateImage() {
	document.getElementsByClassName("slideshow-window")[0].style.backgroundImage = "url('" + images[image_index] + "')";
}

function updateName() {
	document.getElementById("slideshow-item-name").innerHTML = "[" + (image_index + 1) + "/" + (image_max) + "]";
}