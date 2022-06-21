let star = document.getElementById('img__stars');
let moon = document.getElementById('img__moon');
let mountainBehind = document.getElementById('img__mountain-behind');
let mountainFront = document.getElementById('img__mountain-front');
let moonText = document.getElementById('moon__text');
let moonBtn = document.getElementById('moon__button');

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    star.style.left = scrollPos * 0.25  + 'px';
    moon.style.top = scrollPos * 0.75 + 'px';
    mountainBehind.style.top = scrollPos * 0.25 + 'px';
    moonText.style.paddingRight = scrollPos * 2 + 'px';
    moonBtn.style.marginRight = scrollPos * 1.2 + 'px';
})
