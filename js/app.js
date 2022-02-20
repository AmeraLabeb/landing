/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
 const sectionsElements = document.querySelectorAll('section');
 const menuElement = document.getElementById('navbar__list');
 const topBtn = document.getElementById('Btn');
 let listnav = '';
 /** 
  * End Global Variables
  * Start Helper Functions
  *
  */
// build the nav 
function genNavbar() {
   sectionsElements.forEach((section) => {
  
     listnav += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
           ${section.dataset.nav}</a></li>`;
   });
   // add the tags to the inner htmls
   menuElement.innerHTML = listnav;
 }
 genNavbar();

 // Add class 'active' to section when near top of viewport 
 function addActClass(section) {
   const id = section.getAttribute('id');
   // adding
   document.querySelector(`#${id}`).classList.add('your-active-class');
 }
 //Removing 
 function removeActClass(section) {
   const id = section.getAttribute('id');
   document.querySelector(`#${id}`).classList.remove('your-active-class');
 }
 
 function makeActSection() {
   sectionsElements.forEach((section) => {
     
     let elementOffset = section.getBoundingClientRect();
     if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
       addActClass(section);
     } else {
       removeActClass(section);
     }
   });
 }
 // event listener to the dom itself so
 document.addEventListener('scroll', makeActSection);
 
 window.onscroll = function () {
   scrollFunc();
 };
   // Scroll to anchor ID using scrollTO event
 function scrollFunc() {
   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
     topBtn.style.display = 'block';
   } else {
     topBtn.style.display = 'none';
   }
 }
 //go to the top
 function topFunc() {
   document.body.scrollTop = 0; 
   document.documentElement.scrollTop = 0; 
 }
  // Scroll to section on link click

 topBtn.addEventListener('click', topFunc);
 
 let navbar = document.getElementById('navbar').querySelectorAll('li');
 
 // itrate in li items list
 navbar.forEach((item) => {
   item.addEventListener('click', function (e) {
     navbar.forEach((item) => {
       item.classList.remove('navbarclick');
     });
     // add the class on the button
     item.classList.add('navbarclick');
   });
 });
 //the end