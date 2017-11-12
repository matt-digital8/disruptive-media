jQuery(document).ready(function($){
	jQuery(function() {
   		var alm_is_animating = false; // Animating flag
   		$('.alm-filter-nav li').eq(0).addClass('active'); // Set initial active state
   
   		// Btn Click Event
   		$('.alm-filter-nav li a').on('click', function(e){    
      		e.preventDefault();  
      		var el = $(this); // Our selected element     
      	
      		if(!el.hasClass('active') && !alm_is_animating){ // Check for active and !alm_is_animating  
        		alm_is_animating = true;   
        	 	el.parent().addClass('active').siblings('li').removeClass('active'); // Add active state
        	 
        	 	var data = el.data(), // Get data values from selected menu item
        	     	transition = 'fade', // 'slide' | 'fade' | null
        	     	speed = '300'; //in milliseconds
        	     
        	 	$.fn.almFilter(transition, speed, data); // Run the filter     
      		}      
   		});
   
   		$.fn.almFilterComplete = function(){      
   		   alm_is_animating = false; // clear animating flag
   		};
   
	})
});

jQuery(document).ready(function () {
	// Fix Wordpress Jquery Bug
	var $ = jQuery;
	// Add Data type for each *SERVICE*
	$('#branding').attr("data-taxonomy-terms", "branding");
	$('#annual-reports-publications').attr("data-taxonomy-terms", "annual-reports");
	$('#graphic-design').attr("data-taxonomy-terms", "graphic-design");
	$('#communications-strategy').attr("data-taxonomy-terms", "communications-strategy");
	$('#environment-signage').attr("data-taxonomy-terms", "environment-signage");
	$('#cause-related-marketing').attr("data-taxonomy-terms", "cause-related-marketing");
	$('#websites-digital-media').attr("data-taxonomy-terms", "websites-digital-media");
	$('#writing-services').attr("data-taxonomy-terms", "writing-services");
  
  // Add Data type for each *SERVICE*
	$('#health').attr("data-taxonomy-terms", "Health");
	$('#community').attr("data-taxonomy-terms", "Community");
	$('#disability').attr("data-taxonomy-terms", "Disability");
	$('#family-services').attr("data-taxonomy-terms", "Family-services");
	$('#food-security').attr("data-taxonomy-terms", "Food-security");
	$('#environment').attr("data-taxonomy-terms", "Environment");
	$('#education').attr("data-taxonomy-terms", "Education");
	$('#youth').attr("data-taxonomy-terms", "Youth");
	$('#homelessness').attr("data-taxonomy-terms", "Homelessness");
	$('#arts-culture').attr("data-taxonomy-terms", "Arts-culture");
	$('#social-enterprise').attr("data-taxonomy-terms", "Social-enterprise");
	$('#watch-this-space').attr("data-taxonomy-terms", "Watch-this-space");



$('.service-button').click(function(e) {
	e.preventDefault();

    var bla = this.id;	// Get the ID of item clicked
    var fullId = '.' + bla + '-excerpt'; // Turn ID into a class with -excerpt

    $('.excerpt').removeClass('show-excerpt');
    $(fullId).addClass('show-excerpt');


    console.log(fullId);
    $('html, body').animate({
        scrollTop: $(fullId).offset().top - 130
    }, 1350);
});

$('.sector-button').click(function(e) {
	e.preventDefault();
    var bla = this.id;

    var nodashes = bla.replace('-', ' ');
    $("h1.sector-type").html(nodashes);
     $('html, body').animate({
         scrollTop: $("#scroll-here").offset().top - 130
    }, 1350);
});


$(".menu-item").hover(
  function () {
     $(this).children("ul").addClass('sub-menu-show');
  },
  function () {
    $(this).children("ul").removeClass('sub-menu-show');
  }
);



$(".pic_info").hover(function() {
 	$(this).find('.plus_overlay').toggleClass("hover-add");
 	 $(this).find('.plus_overlay_icon').toggleClass("hover-add");
});


$(".team_block_content").hover(function() {
	$('.toggle-div').removeClass("toggle-divvie");
 	$(this).find('.toggle-div').toggleClass("toggle-divvie");
});

	var obj= {};
	
	obj['post-type'] = 'post';
		
	console.log(obj);
		
	var data = obj;  
 
  $('.topImage').on('click', function(){
     var el = $(this);
     var data = el.data(); // Get data values of selected item 
     $.fn.almFilter('fade', '250', data);
  });




});

// Get the # from the url and turn it into 'excerpt'
jQuery(document).ready(function () {
	$ = jQuery;
	var hash = window.location.hash.substr(1); // GET # from url 
	var fullExcerptClass = '.' + hash + '-excerpt';
	console.log(fullExcerptClass);
	$(fullExcerptClass).addClass('show-excerpt');
});
