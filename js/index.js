// Aim: smooth scroll our page "scroll down" clicked
// Step 1 - add listener to .hero-arrow
$('.scrollnav').on('click', function(){
// Step 2 - store the href of the clicked element
// the attr method allows us to grab attributes of the targeted element
// in this case the href of the hero-arrow class
var href1 = $(this).attr('href');
// we can log the value ofthe variable if we want to help with debugging
console.log(href1);
// Step 3 - find element with the ID of the href
// we're using a $ in the variable name to denote that the variable contains an existing object, so we can take actions on this variable
var $target = $(href1);
// Step 4 - find out how many pixels from the top of the page the element is, using the offset method on the top attribute
var offsetTop = $target.offset().top;
// Step 5 - use the animate method to move our page to that pixel offset
// - use scrollTop to set the vertical position of the scroll bar to the value of offsetTop
// and animate the movement over 1000ms
$('body, html').animate	({scrollTop: offsetTop}, 1000);

// Step 6 - disable default browser behaviour
return false;


});