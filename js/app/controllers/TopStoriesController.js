function TopStoriesController(posts) {
	let ctrl = this;

	ctrl.page = 0;
	ctrl.totalPosts = posts.data.length;
	ctrl.totalPages = Math.ceil(ctrl.totalPosts / 25);

	ctrl.paginatePosts =  () => {
		ctrl.posts = posts.data.slice(ctrl.page * 25, (ctrl.page + 1) * 25);
	};

	ctrl.nextPage = () => {
		ctrl.page++;
		ctrl.paginatePosts()
	};

	ctrl.previousPage = () => {
		ctrl.page--;
		ctrl.paginatePosts();
	};

	ctrl.paginatePosts();
}

angular
	.module('app')
	.controller('TopStoriesController', TopStoriesController);