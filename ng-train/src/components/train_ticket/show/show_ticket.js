export default ($scope, train_ticket_service, $stateParams, $filter) => {
    console.log($stateParams);
    $scope.start = $stateParams.start;
    $scope.end = $stateParams.end;
    $scope.timer = $stateParams.time;
    $scope.train_info = null; // 车次信息
    $scope.top_scroll = 0; // 卷曲长度
    train_ticket_service.queryTicket($scope.start, $scope.end, $filter("time_filter")($scope.timer)).then((response) => {
    	console.log(response);
        $scope.train_info = response.data.result;;
    }).catch((err) => {
    	console.log(err);
        $scope.train_info = null;
        alert("加载失败，请重新加载！");
    })
    
    $scope.$on("changeTopScrollEmit", (e, v) => { // 接受子组件传来的数据
        $scope.top_scroll = v;
        $scope.$apply(); // 改变数据  渲染视图
    });
}