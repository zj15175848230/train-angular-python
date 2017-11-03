import trainJson from "../../../static/train_name/train.json";
export default ($scope) => {
    let localsData = localStorage.getItem("history_h"); // 获取到车次搜索历史
    $scope.search_history = localsData ? JSON.parse(localsData) : [];
    $scope.clearInput = () => { // 事件 清空搜索框
        $scope.search_number = "";
    }
    $scope.goToInput = (val) => { // 事件 将历史加入到搜索框
        $scope.search_number = val;
    }
    $scope.clearLocalstroage = () => { // 事件 清空历史记录
        localStorage.setItem("history_h", "");
        $scope.search_history = [];
    }

    $scope.$watch("search_number", (val) => { // 监听输入框的变化
        $scope.search_show = val ? true : false;
        if(val) {
            let firstResult = val[0] * 1 ? trainJson["p"] : trainJson[val[0].toLowerCase()];
            $scope.search_result = firstResult ? firstResult : [];
        }
    });


}