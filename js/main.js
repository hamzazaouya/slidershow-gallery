/*global document*/

var sliderIndex = 1;
showSlides(sliderIndex);

function arrowClick(n) {
    sliderIndex += n;
    showSlides(sliderIndex);
}

function simpleClick(n) {
    sliderIndex = n;
    showSlides(sliderIndex);
}

function showSlides(n) {
    
    'use strict';
    
    var i,
        slider = document.getElementsByClassName("slide"),
        simple = document.getElementsByClassName("simple"),
        captionText = document.getElementById("caption");
    
    for(i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for(i = 0; i < simple.length; i++) {
        simple[i].className = simple[i].className.replace(" active", "");
    }
    
    if(n > slider.length) {
        sliderIndex = 1;
    }else if(n < 1) {
        sliderIndex = slider.length;
    }
    
    slider[sliderIndex - 1].style.display = "block";
    simple[sliderIndex - 1].className += " active";
    captionText.innerHTML = simple[sliderIndex-1].alt;
}