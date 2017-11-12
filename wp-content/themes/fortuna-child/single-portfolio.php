<?php get_header();
/**
 * Template Name Posts: Portfolio single - DM
 Template Post Type: portfolio
 */
 ?>		

<!-- Portfolio item Post -->
<div <?php post_class(''); ?> id="post-<?php the_ID(); ?>" >
	<div class="container">
		<div class="section">

			<!-- Check Sidebar Layout -->
			<?php
				
				$sidebar_layout = esc_html(boc_page_sidebar_layout());

				// IF Sidebar Left
				if($sidebar_layout == 'left-sidebar'){
					get_sidebar();
				}
		
				if($sidebar_layout != 'full-width'){
					echo "<div class='post_content col span_3_of_4'>";
				}else {
					echo "<div class='post_content'>";
				}
			?>
			<!-- End Sidebar Query -->

			<!-- BACK button -->
			<a href="/services/" class="button btn_medium btn_theme_color btn_rounded btn_normal_style icon_pos_before dmButton" target="_self">
				<i class="icon icon-arrow-left6"></i> 
				<span>BACK TO ALL</span>
			</a>

			<!-- Get the current post -->
			<?php while (have_posts()) : the_post(); ?>
					<div class="section">
						<p class="post_meta">
							<span class="calendar_date"><?php printf('%1$s', get_the_date()); ?></span>
							<span class="author">
								<a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID' ))); ?>"><?php echo __('By ','Neal Web Design');?> <?php the_author_meta('display_name'); ?>
								</a>
							</span>
							<?php if(get_the_tags()) { ?>								
							<span class="tags"><?php the_tags('',', '); ?></span>
						<?php } ?>
						</p>
					
						<div class="post_description">
							<?php the_content(); ?>
						</div></div>
<!-- Start image gallery section -->
</div>
	<?php if($sidebar_layout == 'right-sidebar'){ get_sidebar();}?>
<?php 

	$images = get_field('image_gallery');
	$size = 'full'; // (thumbnail, medium, large, full or custom size)

	if( $images ): ?>
	    <ul class="custom-image-gallery">
	        <?php foreach( $images as $image ): ?>
	            <li class="gallery-item">
	            	<?php echo wp_get_attachment_image( $image['ID'], $size ); ?>
	            </li>
	        <?php endforeach; ?>
    	</ul>
	<?php endif; ?>
	<!-- Post End -->

			
			</div>
								


			<?php endwhile; // Loop End  ?>

			
		

			
	
	
		</div>




		</div>
	</div>
</div>
<!-- Post :: END -->	  

<?php 

// Get other projects of the same type
$portcats = get_the_terms( get_the_ID(), 'portfolio_category' );
                         
if ( $portcats && ! is_wp_error( $portcats ) ) : 
 
    $portfolio_taxonomy = array();
 
    foreach ( $portcats as $portcat ) {
        $portfolio_taxonomy[] = $portcat->name;
    }
                         
    $on_portfolio = join( ", ", $portfolio_taxonomy );

endif;

// Set variable that will exclude current post from the loop.
global $post;
$exclude  = $post->ID;


$otherProjectsOfType = do_shortcode( '[ajax_load_more 
	id="other_project_types" 
	container_type="ul" 
	css_classes="single_organisation_project" 
	repeater="template_2" 
	post_type="portfolio" 
	posts_per_page="3" 
	scroll="false" 
	transition="fade"
	taxonomy="portfolio_category" 
	taxonomy_terms="'.$on_portfolio.'" 
	taxonomy_operator="IN"
	post__not_in="'.$exclude.'" 
	progress_bar="true" 
	progress_bar_color="e8d619" 
	destroy_after="3" 
	button_label="See All" 
	button_loading_label="Disrupting..."]' ); 



if($otherProjectsOutput !== '') {

	echo '<div class="full-width-grey">
		<div class="container">
			<h2 class="boc_heading al_left other">
				Other projects of this type
			</h2>
		</div>
	</div>';
	echo $otherProjectsOfType;
	// echo $on_portfolio;
}





//echo $on_portfolio;
?>	

<?php
// Get the Company name and create the shortcode to output the related articles.
$terms = get_the_terms( get_the_ID(), 'company' );
                         
if ( $terms && ! is_wp_error( $terms ) ) : 
 
    $company_taxonomy = array();
 
    foreach ( $terms as $term ) {
        $company_taxonomy[] = $term->name;
    }
                         
    $on_company = join( ", ", $company_taxonomy );

endif;

?>

<!-- OTHER PROJECTS BY THIS COMPANY -->
<?php 
$otherProjectsOutput = do_shortcode( '[ajax_load_more 
	id="other_organisation_projects" 
	container_type="ul" 
	css_classes="single_organisation_project" 
	repeater="template_2" 
	post_type="portfolio" 
	posts_per_page="3" 
	scroll="false" 
	transition="fade"
	taxonomy="company" 
	taxonomy_terms="'.$on_company.'" 
	post__not_in="'.$exclude.'" 
	taxonomy_operator="IN" 
	progress_bar="true" 
	progress_bar_color="e8d619" 
	destroy_after="3" 
	button_label="See All" 
	button_loading_label="Disrupting..."]' ); 

    if($otherProjectsOutput !== '') {
    	echo 	'<div class="full-width-white">
					<div class="container">
						<h2 class="boc_heading al_left other">
							Other projects for <span>'.$on_company.'</span>
						</h2>
					</div>
				</div>';
		echo $otherProjectsOutput;

}

//echo $on_company;
?>	
<?php get_footer(); ?>	