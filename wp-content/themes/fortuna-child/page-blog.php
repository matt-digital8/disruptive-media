<?php 
/**
 * Template Name: DM - AJAX Load More Blog
 *
 * BOC Custom Ajax Blog Template
 * @package WordPress
 */


get_header(); ?>
		<div class="container">
			<div class="section">
				<?php the_content() ?>
</div></div>
	<!-- Page template :: START -->
	<div <?php post_class(''); ?> id="post-<?php the_ID(); ?>" >
		<div class="container">
			<div class="section">
			<ul class="alm-filter-nav">
 	<li><a href="#" data-post-type="post" data-posts-per-page="3" data-scroll="false" data-category="communications" data-button-label="More Work">Communications</a></li>
 	<li><a href="#" data-post-type="post" data-category="branding" data-posts-per-page="3" data-scroll="true" data-button-label="More Articles">Branding</a></li>
 	<li><a href="#" data-post-type="post" data-posts-per-page="3" data-category="design" data-scroll="false" data-button-label="More Work">Design</a></li>
 	<li><a href="#" data-post-type="post" data-scroll="true" data-category="website" data-button-label="More Articles">Website Design</a></li>
</ul>
</div>
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
				<?php echo do_shortcode('[ajax_load_more scroll="false" posts_per_page="3" post_type="post" category="communications" button_label="More"]'); ?>
				<?php while (have_posts()) : the_post(); ?>

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


<?php get_footer(); ?>	