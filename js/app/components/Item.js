let Item = {
	templateUrl: 'views/item.html',
	bindings: {
		id: '='
	},
	controller: function (PostsService) {
		let ctrl = this;
		PostsService
			.getPost(this.id)
			.then((res) => {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);