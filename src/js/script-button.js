var brands = document.querySelector('.slider-container');
var bottomButton = document.querySelector('.bottomButton');
var topButton = document.querySelector('.topButton');

bottomButton.addEventListener('click', function(){
    brands.classList.add('slider-container--height');
    topButton.classList.add('topButton--block');
    bottomButton.classList.add('bottomButton--none');
});

topButton.addEventListener('click', function(){
    brands.classList.remove('slider-container--height');
    topButton.classList.remove('topButton--block');
    bottomButton.classList.remove('bottomButton--none');
});