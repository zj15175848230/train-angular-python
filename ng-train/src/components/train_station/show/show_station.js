export default ($scope, $stateParams, train_station_service) => {
    $scope.start = $stateParams.start;
    $scope.end = $stateParams.end;
    $scope.ishigh = $stateParams.ishigh;
    train_station_service.showStation($scope.start, $scope.end, $scope.ishigh).then((res) => {
    	console.log(res);
    	$scope.show_result = res.data.result;
    }).catch((err) => {
    	console.log(err);
    })
}