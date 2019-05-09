let POSTS_PER_PAGE = 30;

function TopStoriesController(posts) {
	let ctrl = this;

	ctrl.page = 0;
	ctrl.totalPosts = posts.data.length;
	ctrl.totalPages = Math.ceil(ctrl.totalPosts / POSTS_PER_PAGE);

	ctrl.paginatePosts = function () {
		ctrl.posts = posts.data.slice(ctrl.page * POSTS_PER_PAGE, (ctrl.page + 1) * POSTS_PER_PAGE);
	};

	ctrl.nextPage = function () {
		ctrl.page++;
		ctrl.paginatePosts()
	};

	ctrl.previousPage = function () {
		ctrl.page--;
		ctrl.paginatePosts();
	};

	ctrl.paginatePosts();
}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController);