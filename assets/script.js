const slides = [
	{
		image:"assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const dots = document.querySelector(".dots");

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const img = document.querySelector(".text-banner img");
const p = document.querySelector(".text-banner p");
let index = 0;

function main() {
	displayDots();
	clickLeft();
	clickRight();
}

main()

function displayDots () {
	for (let i = 0; i < slides.length; i++) 
	{
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);

		if (i === index) {
			dot.classList.add("dot_selected")
		}
	}
}


function clickLeft () {
	arrowLeft.addEventListener("click", () => {
		const slidesDots = document.querySelectorAll(".dots .dot");
		slidesDots[index].classList.remove("dot_selected");
		index--;
		if (index < 0) {
			index = slides.length -1;
		}
		img.src = slides[index].image;
		p.innerHTML = slides[index].tagLine;
		slidesDots[index].classList.add("dot_selected");
	})
}



function clickRight () {
	arrowRight.addEventListener("click", () => {
		const slidesDots = document.querySelectorAll(".dots .dot");
		slidesDots[index].classList.remove("dot_selected");
		index++;
		if (index > slides.length -1) {
			index = 0;
		}
		img.src = slides[index].image;
		p.innerHTML = slides[index].tagLine;
		slidesDots[index].classList.add("dot_selected");
	})
}






