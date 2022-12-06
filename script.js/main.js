let slideIndex = 1;
        
function positionSlides(n) {
  showSlides(slideIndex += n);
} 

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

btnPrev.addEventListener("click", () => {positionSlides(-1);});
btnNext.addEventListener("click", () => {positionSlides(1);});

const acc = document.getElementsByClassName("contentBx");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNames = ["blue", "cyan", "red", "gold", "#d51e8f", "yellow", "orange"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("contentTextBigPhotoTema");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 2000);
console.log(colorNames);

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNamess = ["blue", "cyan", "red", "gold", "#50ff00f5", "yellow", "orange"];

// функция поиска random-числа
const randome = (min, max) => {
  max = colorNamess.length - 1;
  const rande = min + Math.round(Math.random() * (max - min));
  return rande;
};

// найти элементы для изменения свойств
let paragraphss = document.getElementsByClassName("letterss");/*если поставить вместо letters text-footer, то все буквы будет мигать одинаково*/

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphss.length; i++) {
    paragraphss[i].style.color = colorNamess[random(0)];
  }
}, 3000);
console.log(colorNamess);