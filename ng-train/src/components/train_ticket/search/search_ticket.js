export default ($scope, $state) => {
    $scope.show_choose_city = false; // 是否显示城市选择
    $scope.show_choose_time = false; // 是否显示时间选择
    $scope.start_station = "长沙"; // 始发站
    $scope.end_station = "北京"; // 终点站
    $scope.start_date = Date.now(); // 当日时间
    $scope.tabStation = () => { // 事件  交换车站
        let centerVar = $scope.start_station;
        $scope.start_station = $scope.end_station;
        $scope.end_station = centerVar;
    }
    $scope.chooseCity = (val, flag, $event) => { // 事件  打开城市选择 并 将当前城市传给子组件
        $scope.show_choose_city = !$scope.show_choose_city;
        $scope.$broadcast("chooseSearchToChild", val);
        $scope.stationFlag = flag;
        $event.stopPropagation();
    }
    $scope.chooseTime = () => { // 事件 打开时间选择 并获取焦点显示时间插件
        document.getElementsByClassName("angular-datepicker-input")[0].focus();
    	$scope.show_choose_time = !$scope.show_choose_time;
    }
    $scope.routeGo = () => { // 事件 确认查询
        $state.go("show_ticket", {
            start: $scope.start_station,
            end: $scope.end_station,
            time: $scope.start_date
        });
    }

    $scope.$on("hideChooseCity", (e, val) => { // 接受子组件传来的数据  说明选择城市完成 需要隐藏了
        $scope.show_choose_city = val;
        $scope.show_choose_time = val;
    });
    $scope.$on("chooseSearchToParent", (e, val, show) => { // 接受子组件传来的数据  选择的城市
        $scope.show_choose_city = show;
        if ($scope.stationFlag) {
            $scope.start_station = val;
        } else {
            $scope.end_station = val;
        }
    });
    $scope.$on("choose_time_to_parent", (e, val) => { // 接受 时间子组件传来当前选择的时间
        $scope.start_date = val;
    })
    let localsData = localStorage.getItem("ticket_locals"); // 获取车票查询的历史记录
    let localsJson = localsData ? JSON.parse(localsData) : [];
    $scope.history_station = localsJson.map((el, index) => {
        return el.split("@@");
    });
    $scope.clearLocalstroage = () => { // 事件 清空历史记录
        localStorage.removeItem("ticket_locals");
        $scope.history_station = [];
    }
}