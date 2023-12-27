function ToggleActive(){
    const ToggleMenu = document.querySelector(".Menu-responsive");
    const NavBar = document.querySelector(".principal__list")

    ToggleMenu.classList.toggle("Active");
    NavBar.classList.toggle("Active");
}

const SliderCont= document.getElementById("SlideVideo");
const Videos = SliderCont.querySelectorAll(".videos-video");
var index = 0;

function SlideNext() {
    Videos[index].classList.remove("active");
    index = (index + 1)% Videos.length;
    Videos[index].classList.add("active");
}

function SlidePrev() {
    Videos[index].classList.remove("active");
    index = (index - 1 + Videos.length)% Videos.length;
    Videos[index].classList.add("active");
    }

    const ContainerText = document.getElementById("Texts");
    const Texts = ContainerText.querySelectorAll(".article-txt");

    var i = 0;
    function nextSlideText () {
    Texts[i].classList.remove("active");
    i = (i + 1)% Texts.length;
    Texts[i].classList.add("active")
    }

    function prevSlideText () {
        Texts[i].classList.remove("active");
        i = (i - 1 + Texts.length)% Texts.length;
        Texts[i].classList.add("active")
        }