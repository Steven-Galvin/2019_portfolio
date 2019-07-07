<?php require_once('config.php') ?>
<?php require_once( ROOT_PATH . '/includes/public_functions.php') ?>
<?php require_once( ROOT_PATH . '/includes/registration_login.php') ?>

<!-- Retrieve all posts from database  -->
<?php $posts = getPublishedPosts(); ?>

<!DOCTYPE html>
<?php require_once('includes/head_section.php') ?>
<html>
<body>
	<!-- container - wraps whole page -->
	<div class="container">
		<!-- navbar -->
    <?php require_once('includes/navbar.php') ?>
		<!-- // navbar -->

    <!-- Banner -->
    <?php include('includes/banner.php') ?>
    <!-- // Banner -->

		<!-- Page content -->
		<main class="content">
			<h2 class="content-title">Recent Articles</h2>
			<hr>
			<!-- more content still to come here ... -->
			<?php foreach ($posts as $post): ?>
				<div class="post" style="margin-left: 0px;">
					<img src="<?php echo BASE_URL . '/static/images/' . $post['image']; ?>" class="post_image" alt="">
					<?php if (isset($post['topic']['name'])): ?>
						<a href="<?php echo BASE_URL . 'filtered_posts.php?topic=' . $post['topic']['id'] ?>"
							class="btn category">
							<?php echo $post['topic']['name'] ?>
						</a>
					<?php endif ?>
					<a href="single_post.php?post-slug=<?php echo $post['slug']; ?>">
						<div class="post_info">
							<h3><?php echo $post['title'] ?></h3>
							<div class="info">
								<span><?php echo date("F j, Y ", strtotime($post["created_at"])); ?></span>
								<span class="read_more">Read more...</span>
							</div>
						</div>
					</a>
				</div>
			<?php endforeach ?>
		</main>
		<!-- // Page content -->

		<!-- footer -->
    <?php require_once('includes/footer.php') ?>
		<!-- // footer -->

	</div>
	<!-- // container -->
</body>
</html>
