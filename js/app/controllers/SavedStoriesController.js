function SavedStoriesController(posts) {
	let ctrl = this;

	ctrl.page = 0;
	ctrl.totalPosts = posts.data.length;
	ctrl.totalPages = Math.ceil(ctrl.totalPosts / 30);

	ctrl.paginatePosts = function () {
		ctrl.posts = posts.data.slice(ctrl.page * 30, (ctrl.page + 1) * 30);
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
	.controller('SavedStoriesController', SavedStoriesController);