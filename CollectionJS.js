// =====================================
// SLIDER HGT STORE
// =====================================

document.addEventListener("DOMContentLoaded", function () {

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// nếu trang không có slider thì không chạy
if(slides.length === 0) return;

let index = 0;


// =====================================
// HIỂN THỊ SLIDE
// =====================================

function showSlide(i){

slides.forEach(function(slide){
slide.classList.remove("active");
});

slides[i].classList.add("active");

}


// =====================================
// NÚT NEXT
// =====================================

if(nextBtn){

nextBtn.addEventListener("click", function(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

});

}


// =====================================
// NÚT PREV
// =====================================

if(prevBtn){

prevBtn.addEventListener("click", function(){

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);

});

}


// =====================================
// AUTO SLIDE
// =====================================

setInterval(function(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

},3000);


});
