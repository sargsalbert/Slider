const sliderItem = document.getElementsByClassName("slider-item");

let currentIndex = 0;

sliderItem[0].classList.add("active");

function slider() {
sliderItem[currentIndex].classList.remove("active");

if (currentIndex === sliderItem.length-1){      
    sliderItem[0].classList.add("active")
    currentIndex = 0;
} else {
        sliderItem[++currentIndex].classList.add("active")
    }
}

function next() {
    slider();
}

setInterval(() => {
    slider();
}, 2700);





