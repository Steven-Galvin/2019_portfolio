<div class="header">
	<div class="logo">
		<a href="<?php echo BASE_URL .'admin/dashboard.php' ?>">
			<h1>On The Soul - Admin</h1>
		</a>
	</div>
	<div class="user-info">
		<?php echo $_SESSION['user']['username'] ?> &nbsp; &nbsp; <a href="<?php echo BASE_URL . '/logout.php'; ?>" class="logout-btn">logout</a>
	</div>
</div>
