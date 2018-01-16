var game_name = "pakij"
var slideshow_images = ['screenshots/1.png', 'screenshots/2.png', 'screenshots/3.png'];
var slideshow_index = 0;
var slideshow_max = slideshow_images.length;

var download_links = ['bin/pakij_v1.62_win.zip', 'bin/pakij_v1.6a2_mac.zip', 'bin/pakij_v1.3.zip'];

var showChangelog = false;

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

function downloadGame() {
	var selection = document.getElementsByClassName("game-download-options")[0];
	window.location.replace(download_links[selection.options[selection.selectedIndex].value]);
}