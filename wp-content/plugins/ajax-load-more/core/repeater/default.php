<li<?php if (! has_post_thumbnail() ) { echo ' class="no-img"'; } ?>>
	<div class="title-flex">	
		<p class="entry-meta"><strong><?php the_time("d"); ?></strong><?php the_time("M"); ?></p>
		<h3><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h3>
	</div>
	<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); } ?>
		<div class="meta-flex">
			<ul>
    			<li class="author">By <?php the_author(); ?></li>
    			<li>Posted in <i><?php $category = get_the_category(); echo $category[0]->cat_name;?></i></li>
			</ul>
			<ul class="comments-meta">
    			<li>with <?php comments_number(); ?></li>
			</ul>

			<?php the_excerpt(); ?>
			<a class="article-button" href="<?php the_permalink(); ?>">READ ARTICLE</a>
        		</div>
</li>