function PostsService($http) {

	this.getSavedStories = function () {
		console.log('gonna call rails API')
		return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
	};

	this.getTopStories = function () {
		return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
	};

	this.getPost = function (id) {
		return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
	};
}

angular
	.module('app')
	.service('PostsService', PostsService);