import angular from "angular";
import httpService from "src/components/common/http_service/http_service";
// import "angular-datepicker";
// import "angular-datepicker/dist/index.min.css";
import "angularjs-datepicker";
import "angularjs-datepicker/dist/angular-datepicker.min.css";
/*
* 城市选择
* */
export default angular.module("timeChoose", [httpService, "720kb.datepicker"])
    .controller("choose.time", ["$scope", ($scope) => {
        $scope.hideCity = () => {  // 事件 点击隐藏城市选择界面
            $scope.$emit("hideChooseCity", false); // 向父controller传递数据 告诉父组件开始收起城市选择框
        }
        $scope.minDate = moment().format('YYYY-MM-DD');
        $scope.maxDate = moment().subtract(30, "day").format('YYYY-MM-DD');
        // $scope.startDate = 
        $scope.da = new Date()
    }])
    .name;