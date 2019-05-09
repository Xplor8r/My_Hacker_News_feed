let Item = {
	templateUrl: 'views/item.html',
	bindings: {
		id: '='
	},
	controller: function (PostsService) {
		let ctrl = this;

		console.log('hey');

		PostsService
			.getPost(this.id)
			.then(function (res) {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);