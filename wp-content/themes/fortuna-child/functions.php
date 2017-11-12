<?php
//creates shortcode to echo out social media icons.
//USAGE: paste '[socialIcon]' anywhere in WordPress.
function socialIcons() {
	echo "<h3>CONNECT</h3>";
	echo "<div class='flex'>";
	if(is_array($footer_icons = ot_get_option('footer_icons'))){
		$footer_icons = array_reverse($footer_icons);							
		
		foreach($footer_icons as $footer_icon){
			echo "<a target='_blank' class='footer_soc_icon' href='". $footer_icon['icons_url_footer']."'>
					<span class='icon ". $footer_icon['icons_service_footer'] ."' title='". esc_attr($footer_icon['title']) ."'></span>
				  </a>";			
		}
	}
	echo "</div>";
					
}
add_shortcode('socialIcon', 'socialIcons');

// output company image from custom field.
function getCompanyImage() {

	$image = get_field('company_logo');
	
	if( $image ) {
		echo '<img src="' . $image['url'] .'" class="compLogo"/>'; 
	}
}
add_shortcode('companyImage', 'getCompanyImage');


// output email address fields
function getCompanyServices() {

	echo '<BR><BR><h3><span>Share</span></h3>';
	$website = the_field('website_link');
	echo '<a href="'.$website.'">'.$website.'</a>';

}

add_shortcode('servicesProvided', 'getCompanyServices');


function my_limit_archives( $args ) {
    $args['limit'] = 6;
    return $args;
}
add_filter( 'widget_archives_args', 'my_limit_archives' );




// Get services provided by taxonomy 
function list_taxonomy_names() {

	$terms = get_field('services_provided');

	if( $terms ):

		echo '<h4 class="sidebar-title"><span>Services provided</span></h4>';
		echo '<ul class="taxonomy-list">';

 		foreach( $terms as $term ):

			echo '<li>'.$term->name.'</li>';

 		endforeach; 

		echo '</ul>';

	endif;
}

add_shortcode('list_taxoneight', 'list_taxonomy_names');


// output custom field 'link'
function custom_link() {
	$link = get_field('website_link');

		if( $link ):
	
			echo '<a target="_blank" class="button" href="'.$link.'">Visit organisation page</a>';

		endif;
	}

add_shortcode('organisationlink', 'custom_link');


// Get type of project by taxonomy 
function type_of_project() {

	$terms = get_field('type_service');

	if( $terms ):

		echo '<h4 class="sidebar-title"><span>Service</span></h4>';
		echo '<ul class="taxonomy-list">';

 		foreach( $terms as $term ):

			echo '<li>'.$term->name.'</li>';

 		endforeach; 

		echo '</ul>';

	endif;
}

add_shortcode('projecttype', 'type_of_project');


// Get type of project by taxonomy 
function sector_of_project() {

	$terms = get_field('sector_type');
	
	if( $terms ):

		echo '<h4 class="sidebar-title"><span>Sector</span></h4>';
		echo '<ul class="taxonomy-list">';

 		foreach( $terms as $term ):

			echo '<li>'.$term->name.'</li>';

 		endforeach; 

		echo '</ul>';

	endif;
}

add_shortcode('sectortype', 'sector_of_project');

?>
