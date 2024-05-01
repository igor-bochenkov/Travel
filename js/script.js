// window.addEventListener("DOMContentLoaded", () => {

// 	//* ======== BURGER ==============================================================================
// 	const iconBurger = document.querySelector('.header-menu__burger'),
// 		menuHeader = document.querySelector('.header-menu__body'),
// 		menuWrapper = document.querySelector('.header-menu__wrapper'),
// 		menuLink = document.querySelectorAll('.header-menu__list > li');

// 	function toggleBurgerClass() {
// 		iconBurger.classList.toggle('active');
// 		menuHeader.classList.toggle('active');
// 		menuWrapper.classList.toggle('active');
// 		document.body.classList.toggle('lock');
// 	}
// 	iconBurger.addEventListener('click', function () {
// 		toggleBurgerClass();
// 	});

// 	menuWrapper.addEventListener('click', (event) => {
// 		if (event.target === menuWrapper && menuHeader.classList.contains('active')) {
// 			toggleBurgerClass();
// 		}
// 	});

// 	//! не работает(переписать через remove?)
// 	// menuLink.forEach(btn => {
// 	// 	if (iconBurger.classList.contains('active')) {
// 	// 		btn.addEventListener('click', toggleBurgerClass);
// 	// 	}
// 	// });

// 	//* ======== POPUP ==============================================================================
// });

