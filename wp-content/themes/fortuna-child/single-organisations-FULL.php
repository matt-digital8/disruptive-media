<?php get_header();
/*
 * Template Name: Organisation Template - DM
 * Template Post Type: organisations
 */
 ?>

	<!-- Page template :: START -->
	<div <?php post_class(''); ?> id="post-<?php the_ID(); ?>" >
		<div class="container">
			<div class="section">
				<a href="/organisation/" class="button btn_medium btn_theme_color btn_rounded btn_normal_style icon_pos_before   dmButton" target="_self"> <i class="icon icon-arrow-left6"></i> <span>BACK TO ALL</span></a>

			<div class="section">
				<?php
				// Check Sidebar Layout
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

				<?php while (have_posts()) : the_post(); ?>

				<?php the_content() ?>
				<?php wp_link_pages(array(
					'before' => "<div class='pagination'><div class='links'>",
					'after' => "</div></div>",
				   )); ?>
				<?php endwhile; ?>
				
				<?php 
				$show_page_comments	= ot_get_option('show_page_comments','off') == 'on';
				if($show_page_comments) { 
					comments_template('', true);
				} 
				?>
				
				<?php 
				// Close "post_content"
				echo "</div>";

				// IF Sidebar Right
				if($sidebar_layout == 'right-sidebar'){
					get_sidebar();
				}
				?>
			</div>
		</div>
	</div>
	<!-- Page template :: END -->	
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
<div class="full-width-grey">
	<div class="container">
		<h2 class="boc_heading al_left other">
			Projects for <span><?php echo $on_company; ?></span>
		</h2>
	</div>
</div>
<?php
echo do_shortcode( '[ajax_load_more 
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
	taxonomy_operator="IN" 
	progress_bar="true" 
	progress_bar_color="e8d619" 
	destroy_after="3" 
	button_label="See All" 
	button_loading_label="Disrupting..."]' ); 

?>

<?php get_footer(); ?>	