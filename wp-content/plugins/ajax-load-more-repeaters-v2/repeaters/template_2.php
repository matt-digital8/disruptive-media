<?php 

// Set variable for background image url
$thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
?>

	<div class="post_item_block">
		<div class="pic  img_hover_effect2">
			<a href="<?php the_permalink();?>"><img src="<?php echo $thumb['0'];?>">
				<div class="img_overlay2">
                <div class="info_desc">
					<span class="hover_icon icon_plus round-arrow">
                    	<span class="boc_icon icon icon-arrow-right6 article-icon"></span>
                	</span>
                	<h3><?php the_title();?></h3>
                </div>
				</div>
            
			</a>
		</div>
	</div>