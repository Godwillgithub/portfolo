
window.addEventListener("load", () => {
const loader = document.querySelector(".loader");

loader.classList.add("loader-hidden");
loader.addEventListener("transitionend", ()=>{
    document.body.removeChild("loader");
})
});


/*==============toggle icon navbar==============*/
let menuIcon= document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};



/*==============scrollsection active link==============*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +  height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });


/*==============sticky navbar ==============*/
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


/*==============remove toogle icon and navabr when click link (scroll)==============*/

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
 
};