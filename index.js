// All code is my own and was written from scratch 

// Ive tried to get the functionality needed with writting as little code as possible

// I havnt done much commenting on this code because I will explain it in depth during interview if needed.


//VANILLA SLIDER//


var i;
var slides = document.getElementsByClassName("blogSlides");
var slideIndex;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {

	showSlides(slideIndex = n);

}

function showSlides(n) {


	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";

	}


	slides[slideIndex - 1].style.display = "block";

}


// opens hamburger modal and modal which contains vanilla slider

function openModal(b) {

	b.style.display = "block";

}

// closes hamburger modal and modal which contains vanilla slider

function closeModal(b) {

	b.style.display = "none";

}


var items = document.querySelectorAll('.items')
var items_1a = document.querySelectorAll('.items_1a')
var items_2a = document.querySelectorAll('.items_2a')
var menuItems = document.querySelectorAll('.menu-items')
var menuItems1 = document.querySelectorAll('.menu-items1')
var menuItems2 = document.querySelectorAll('.menu-items2')
var Close_Modal = document.querySelectorAll(".close-modal")
var item_Heading = document.querySelectorAll(".item-heading")


// opens navigation modal (.nav-dropdown) and sets background colors on elements when this function is called


function open_Nav_Modal(b, c) {
	Close_Modal.forEach(item => item.style.display = "none")
	item_Heading.forEach(item => item.style.backgroundColor = "inherit")
	b.style.display = "block";
	c.style.backgroundColor = "#e7e7e7";
	item_Heading.forEach(item => item.style.zIndex = '1')
	c.style.zIndex = '0'

}


// numbers from 1 to 5 are passed into these 3 functions from DOM onclick(1-5). Numbers passed in will determine the styles

function hideItems(n) {

	menuItems.forEach(item => item.style.backgroundColor = "inherit")
	items.forEach(item => item.style.display = "none")
	items[n].style.display = "grid";
	menuItems[n].style.backgroundColor = "#e7e7e7b6"

}

function hideItems1(n) {

	menuItems1.forEach(item => item.style.backgroundColor = "inherit")
	items_1a.forEach(item => item.style.display = "none")
	items_1a[n].style.display = "grid";
	menuItems1[n].style.backgroundColor = "#e7e7e7b6"

}


function hideItems2(n) {

	menuItems2.forEach(item => item.style.backgroundColor = "inherit")
	items_2a.forEach(item => item.style.display = "none")
	items_2a[n].style.display = "grid";
	menuItems2[n].style.backgroundColor = "#e7e7e7b6"

}


var first = document.querySelector('#item1')
var second = document.querySelector('#item2')
var third = document.querySelector('#item3')


first.addEventListener("click", e => {
	hideItems(0)
}, {
	once: true
})

second.addEventListener("click", e => {
	hideItems1(0)
}, {
	once: true
})

third.addEventListener("click", e => {
	hideItems2(0)
}, {
	once: true
})


document.addEventListener(
	"click",
	function (event) {


		if (
			event.target.matches(".close-modal")
		) {

			Close_Modal.forEach(item => item.style.display = "none")
			item_Heading.forEach(item => item.style.backgroundColor = "inherit")

		}


	},

)