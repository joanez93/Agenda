var app = angular.module("appAgenda", ["ngMessages"]);
app.controller("appAgendaCtrl", function($scope){
	$scope.agenda = [
		{name: "Joanez Andrades", ddd: 45, phone: "8830-4602", city: "Santa Lúcia", op: "Claro"},
		{name: "Grazi Massafera", ddd: 35, phone: "99922-4223", city: "São Paulo", op: "Tim"}
	];
	$scope.operadoras = ["Claro", "Oi", "Vivo", "Tim"];

	$scope.adcContato = function (contato){
		$scope.agenda.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine;
	};
});