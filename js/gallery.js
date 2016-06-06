


// this is a jquery document ready method that tells the browser not to try running any jquery code until jquery has loaded
// we need to wrap it around all of the code in any javascript files we use. IT IS VERY IMPORTANT
// in the other projects, we didn't have any code that ran when the page loaded, only when we clicked. So jQuery was loaded by the
// time we clicked on anything. Here, it's running straight away - but good practice to always include it
$(document).ready(function () {


	var $container = $('#prints');
	//we got this isotope line below by selecting the show all option on isotope.metafizzy.co
	// and we have to put the line above in to tell it what our container class is
	// this bit does the masonry layout, working out the different heights etc of all our products divs, and shows all divs
	// as we have used * as the filter parameter, so everything is included
	//THIS IS THE BIT THAT NEEDS TO CHANGE SO THAT THE PAGE IS AUTO FILTERED WHEN LOADED FROM A SERIES CLICK
	//See the tutorial on html goodies for passing the info in the URL
	$container.isotope({ filter: '*'})


	// hide the 'clear' anchor when the page loads as we haven't used a filter yet so don't need to clear anything
	//NEED TO ADJUST THIS IF WE START PASSING A VARIABLE FROM THE INDEX PAGE
	$('.js-clear').hide();


	// when we click on a nav with the js-filter class...
	$('.js-filter').on('click', function( ) {
		//get the data-category value of the clicked anchor
		var prodFilter = $(this).attr('data-category');
		// run the isotope method to filter for the
		$container.isotope({ filter: prodFilter });

		//go through all the filters and remove the 'selected' class, so that you can remove the highlighting without 
		// having to work out which one is currently selected
		$('.js-filter').removeClass('selected');
		//add the 'selected' class to the filter that's just been clicked
		$(this).addClass('selected');
		//fade the 'clear' filter back in so it can be clicked again
		$('.js-clear').fadeIn();


		return false;
	});

	// clear the product filter when the clear anchor is clicked, using the wildcard (*)
	$('.js-clear').on('click', function( ) {
		$container.isotope({ filter: '*' });
		// remove all the active classes from the filter links
		$('.js-filter').removeClass('selected');
		$('.js-clear').fadeOut();
		return false;
	});



  // 1. When we load the page, we want to make sure the lightbox is hidden
  // 2. When we click an image, make sure that the image in the lightbox is the correct one
  // 3. And  display the lightbox
  // 4. When the lightbox is active, we need to be able to close it again 

  // using jquery's $ selector, we grab all the section imgs on the page (the ones we want to display larger in the lightbox)
  // we then attach a 'click' event listener to it, so we can perform a function every time a section img is clicked
  $('section img').on('click', function () {
	  // GET the src of the image that was clicked and store it in the lightboxImage variable
	  var imageSrc = $(this).attr('src');
	  // SET the src attribute of the .lightbox img equal to the lightboxImage variable
	  $('.lightbox img').attr('src', imageSrc);
	
	  // show the lightbox using jquery's built-in show method, which changes the css display to block
	  // the hide method changes the display to none
	  // $('.lightbox').show();
	  // we've commented show out and are using a different method called fadeIn, which also animates the opacity and looks nicer
	  $('.lightbox').fadeIn(250);

	  //remove the default behaviour
	  return false;
  });


  $('.print.meta p').on('click', function () {
	  var imageSrc = $(print.img).attr('src');
	  var imageNm = $(print.meta.h3).attr('src');
	  console.log(imageNm);

	
	  // SET the src attribute of the .lightbox img equal to the lightboxImage variable
	  $('.lightbox img').attr('src', imageSrc);
	
	  // show the lightbox using jquery's built-in show method, which changes the css display to block
	  // the hide method changes the display to none
	  // $('.lightbox').show();
	  // we've commented show out and are using a different method called fadeIn, which also animates the opacity and looks nicer
	  $('.lightbox').fadeIn(250);

	  //remove the default behaviour
	  return false;

  });


// make the function work on the whole lightbox not the image, so if people click outside the image the lightbox still closes
  $('.lightbox').on('click', function () {
		// using this instead of .lightbox means that there would be less to change if we renamed the lightbox class
		$(this).fadeOut(250);
		//remove the default behaviour
		return false;
	});


}); //end of the document ready function