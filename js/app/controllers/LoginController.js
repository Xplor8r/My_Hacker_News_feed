function LoginController($scope) {
	let ctrl = this;

	ctrl.name = '';
    ctrl.email = '';
    ctrl.password = '';

	$scope.$watch(function () {
		return ctrl.name;
	}, function (newValue) {
		console.log(newValue);
    });
    $scope.$watch(function () {
		return ctrl.email;
	}, function (newValue) {
		console.log(newValue);
    });
    $scope.$watch(function () {
		return ctrl.password;
	}, function (newValue) {
		console.log(newValue);
	});
}

angular
	.module('app')
	.controller('LoginController', LoginController);