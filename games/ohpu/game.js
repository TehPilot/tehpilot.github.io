var game_name = "A One Hit Point Uprising"
var slideshow_images = ['screenshots/1.png', 'screenshots/2.png', 'screenshots/3.png', 'screenshots/4.png'];
var slideshow_index = 0;
var slideshow_max = slideshow_images.length;

function loadGameContent() {
	updateImage();
	updateName();

	document.getElementById("game-name").innerHTML = game_name;
}

function advanceSlideshow() {
	slideshow_index++;
	if (slideshow_index > slideshow_images.length - 1)
		slideshow_index = 0;
	updateImage();
	updateName();
}

function regressSlideshow() {
	slideshow_index--;
	if (slideshow_index < 0)
		slideshow_index = slideshow_images.length - 1;
	updateImage();
	updateName();
}

function updateImage() {
	document.getElementsByClassName("slideshow-window")[0].style.backgroundImage = "url('" + slideshow_images[slideshow_index] + "')";
}

function updateName() {
	document.getElementById("slideshow-item-name").innerHTML = "[" + (slideshow_index + 1) + "/" + (slideshow_max) + "]";
}