<?php
  $sliderPosts = new WP_Query(array(
    'post_type' => 'slide',
    'order' =>  'ASC',
  )); ?>
  <div class="hero-slider">
  <?php
    while($sliderPosts->have_posts()) {
      $sliderPosts->the_post(); ?>
        <div class="hero-slider__slide" style="background-image: url(<?php $slideImage = get_field('slide_image'); echo $slideImage['sizes']['pageBanner'] ?>);">
          <div class="hero-slider__interior container">
            <div class="hero-slider__overlay">
              <h1 class="headline headline--medium t-center"><?php the_field('slide_title') ?></h1>
              <p class="t-center"><?php the_field('slide_subtitle') ?></p>
              <p class="t-center no-margin"><a class="btn btn--blue" href="<?php the_field('slide_link_value') ?>"><?php the_field('slide_link_text') ?></a></p>
            </div>
          </div>
        </div>
    <?php } wp_reset_postdata(); ?>
  </div>