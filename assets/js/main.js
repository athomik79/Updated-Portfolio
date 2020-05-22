// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
	    
/* ======= jQuery form validator ======= */ 
/* Ref: http://jqueryvalidation.org/documentation/ */   
$("#contact-form").validate({
  messages: {
  
      name: {
        required: 'Please enter your name' //You can customise this message
    },
    email: {
      required: 'Please enter your email' //You can customise this message
    },		
    message: {
      required: 'Please enter your message' //You can customise this message
    }
    
  }
});