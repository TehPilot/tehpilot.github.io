var slideshow_images = ['images/egth-gif.gif', 'images/8s-gif.gif', 'images/slipstream-gif.gif'];
var slideshow_names = ['Everything\'s Gone to Hell', 'Eight Seconds', 'Slipstream'];
var slideshow_index = 0;

function loadPageContent() {
	updateName();
	updateImage();
	fetchNewsArticles();
}

function fetchNewsArticles() {
	var supplyString = "";
	for (var i = 0; i < 2 && i < tumblr_api_read.posts.length; i++) {
		supplyString += "<span class=\"news-entry\"><a href=\"" + tumblr_api_read.posts[i]['url'] + "\"><b>" + tumblr_api_read.posts[i]['regular-title'] + "</b></a><br />" + tumblr_api_read.posts[i]['regular-body'].substring(3, 75);
		if (tumblr_api_read.posts[i]['regular-body'].length > 75) {
			supplyString += "..."
		}
		supplyString += "</span><br /><br />";
	}
	document.getElementById('tumblr-feed').innerHTML = "<p class=\"news-header\">Latest News</p>" + supplyString + "<span class=\"news-link\"><a href=\"http://tehpilot.tumblr.com/\">More News</a></span></p>";
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
	document.getElementById("slideshow-item-name").innerHTML = "[" + (slideshow_index + 1) + "/" + (slideshow_names.length) + "] " + slideshow_names[slideshow_index];
}

window.onresize = function() {
	var winWidth = window.innerWidth;
	console.log(winWidth);
}