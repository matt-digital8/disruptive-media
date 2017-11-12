<?php 
// Set variable for background image url
$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
?>
<a href="<?php the_permalink();?>">
  <div class="portfolio_animator_class ">
	<div class="pic_info type7">

		<div class="pic img_hover_effect2">
			<div class="plus_overlay"></div>
			<div class="plus_overlay_icon"></div>
			<img src="<?php echo $thumb['0'];?>">
			<div class="img_overlay_icon">
				<span class="portfolio_icon icon_camera"></span>
			</div>
		</div>


		<div class="info_overlay">
			<div class="info_overlay_padding">
				<div class="info_desc services-page">
                	<h3><?php the_title();?></h3>
					<span class="portfolio_icon icon_camera"></span>				
					
				</div>
			</div>
		</div>


	</div>
  </div>
</a>