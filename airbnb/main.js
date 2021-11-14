let header = document.querySelector('header');
let boxNavbarScroll = document.querySelector(".box-navbarScroll");
let content = document.querySelector('.content')
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.display = 'none';
        boxNavbarScroll.style.display = 'block';
        content.style.marginTop = "174px";
    }else {
        header.style.display = 'block';
        boxNavbarScroll.style.display = 'none';
        content.style.marginTop = "0";
    }
}

window.onscroll = function(){
    scrollFunction();
}

