//! ---------- Global Variables ----------
var imgs = Array.from ( document.querySelectorAll('.item img') ) ;
var lightBox = document.getElementById('lightBox');
var closeIcon = document.getElementById('close');
var boxData = document.getElementById('boxData');
var currentIndex = 0;
var nextSlide = document.getElementById('next');
var prevSlide = document.getElementById('prev');
//! ----------- Functions ----------------
function closeSlide(){
    lightBox.classList.add('d-none');
}

function next(){
    currentIndex++;

    if(currentIndex == imgs.length){
        currentIndex = 0;
    }

    var currentElementSrc = imgs[currentIndex].getAttribute('src');
    boxData.style.backgroundImage = `url(${currentElementSrc})`
}


function prev(){
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = imgs.length - 1;
    }

    var currentElementSrc = imgs[currentIndex].getAttribute('src');
    boxData.style.backgroundImage = `url(${currentElementSrc})`
}

//!------------ Events -------------------
for(var i = 0 ; i < imgs.length ; i++){
    imgs[i].addEventListener('click' , function(e){

        lightBox.classList.remove('d-none');

        var currentSrc = e.target.getAttribute('src')
        boxData.style.backgroundImage = `url(${currentSrc})`;

        var currentTarget = e.target
        currentIndex = imgs.indexOf(currentTarget);
    } )
}

closeIcon.addEventListener('click' , function(){
    closeSlide()
})

nextSlide.addEventListener('click' , function(){
    next();
})

prevSlide.addEventListener('click' , function(){
    prev();
})


document.addEventListener('click' , function(e){
    if(e.target == lightBox){
        closeSlide()
    }
})

document.addEventListener('keydown' , function(e){
    if(e.key == 'ArrowRight'){
        next();
    }
    else if(e.key == 'ArrowLeft'){
        prev();
    }
    else if(e.key == 'Escape'){
        closeSlide();
    }
})