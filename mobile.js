function toggleMobileNav() {

	var mobileNavLinks = document.getElementsByClassName("mobile-nav-link");
	var mobileNavBar = document.getElementById("navbar-links-mobile");
	var mobileNavButton = document.getElementById("hide-button");

	for (var i = 0; i < mobileNavLinks.length; i++) {
		if (mobileNavLinks[i].style.display === 'none') {
			mobileNavLinks[i].style.display = 'inline';
		} else {
			mobileNavLinks[i].style.display = 'none';
		}
	}

	if (mobileNavBar.style.maxHeight === 'none') {
		mobileNavBar.style.maxHeight = '42px';
	} else {
		mobileNavBar.style.maxHeight = 'none';
	}

	if (mobileNavButton.innerHTML === "\u2227") {
		mobileNavButton.innerHTML = "\u2228";
	} else {
		mobileNavButton.innerHTML = "\u2227";
	}
	
}