
const navToggle = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__nav");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle the navigation menu
navToggle.addEventListener("click", () => {
	navToggle.classList.toggle("open");
	if (navToggle.classList.contains('open')) {
		navToggle.setAttribute("aria-expanded", "true");
	} else {
		navToggle.setAttribute("aria-expanded", "false");
	}
	navMenu.classList.toggle("expand");
});

// Toggle the dropdown menu inside the navigation
dropdownBtn.addEventListener("click", () => {
	dropdownBtn.classList.toggle("show");
	dropdownMenu.classList.toggle("expand");
});

// Reset navigation state on resize
function resetNav() {
	navToggle.classList.remove("open");
	navMenu.classList.remove("expand");
	dropdownBtn.classList.remove("show");
	dropdownMenu.classList.remove("expand");
}

window.addEventListener("resize", resetNav);

/* == Observer == */
const navBar = document.querySelector(".sticky-top");
const topHeader = document.querySelector(".top-header");

const navObserver = new IntersectionObserver((entries) => {
	entries.forEach( entry => {
		if (entry.isIntersecting) {
			navBar.classList.remove('stuck');
		} else {
			navBar.classList.add('stuck');
		}
	});
}, { threshold: 0 });

navObserver.observe(topHeader);
