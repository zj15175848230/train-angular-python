export default ($scope, $stateParams, httpService) => {
    $scope.start = $stateParams.start;
    $scope.end = $stateParams.end;
    $scope.ishigh = $stateParams.ishigh;
    httpService.showStation($scope.start, $scope.end, $scope.ishigh).then((res) => {
    	console.log(res);
    	$scope.show_result = res.data.result;
    }).catch((err) => {
    	console.log(err);
    })
}