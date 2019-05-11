angular
    .module('app', [
	    'ui.router',
	    'ngSanitize'
    ])
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('top', {
				url: '/top',
				templateUrl: 'views/top-stories.html',
				controller: 'TopStoriesController as top',
				resolve: {
					posts: function (PostsService) {
						return PostsService.getTopStories();
					}
				}
			})
			.state('saved', {
				url: '/saved',
				templateUrl: 'views/saved-stories.html',
				controller: 'SavedStoriesController as saved',
				resolve: {
					posts: function (PostsService) {
						return PostsService.getSavedStories();
					}
				}
			})
			.state('post', {
				url: '/post/:id',
				templateUrl: 'views/post.html',
				controller: 'PostController as post',
				resolve: {
					post: function ($stateParams, PostsService) {
						return PostsService.getPost($stateParams.id);
					}
				}
			})
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginController as login'
			})
			.state('signup', {
				url: '/signup',
				templateUrl: 'views/signup.html',
				controller: 'SignupController as signup'
			})
		
		$urlRouterProvider.otherwise('/top');
	});