angular
    .module('app', [
	    'ui.router',
	    'ngSanitize'
    ])
	.config(($stateProvider, $urlRouterProvider) => {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'views/top-stories.html',
				controller: 'TopStoriesController as top',
				resolve: {
					posts: (PostsService) =>{
						return PostsService.getTopStories();
					}
				}
			})
			.state('post', {
				url: '/post/:id',
				templateUrl: 'views/post.html',
				controller: 'PostController as post',
				resolve: {
					post: ($stateParams, PostsService) => {
						return PostsService.getPost($stateParams.id);
					}
				}
			})
		
		$urlRouterProvider.otherwise('/top');
	});