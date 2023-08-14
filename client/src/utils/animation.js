  /* scroll Animations */
const observer = new IntersectionObserver(elements => {
	elements.forEach(el => {
		console.log(el);
		if (el.isIntersecting) {
			el.target.classList.add("show");
		} else {
			el.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
