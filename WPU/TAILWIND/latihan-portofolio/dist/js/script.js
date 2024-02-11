const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('back-to-top');
const darkToogle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.scrollY > fixedNav){
        header.classList.add('navbar-fixed');
        backToTop.classList.add('flex');
        backToTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
}
darkToogle.addEventListener('click', function(){
    darkToogle.checked ? html.classList.add('dark') : html.classList.remove('dark');
})

