import angular from "angular";
import my_filter from "src/components/common/filter/filter";
import "angularjs-datepicker";
import "angularjs-datepicker/dist/angular-datepicker.min.css";

/*
* 日期选择
* */

export default angular.module("timeChoose", ["720kb.datepicker", my_filter])
    .controller("choose.time", ["$scope", ($scope) => {
        $scope.hideCity = () => {  // 事件 点击隐藏城市选择界面
            $scope.$emit("hideChooseCity", false); // 向父controller传递数据 告诉父组件开始收起城市选择框
        }
        let d = Date.now();
        $scope.limit_min = d; // 当前时间
        $scope.limit_max = d + 30 * 24 * 60 * 60 * 1000; // 往后30天
        $scope.$watch("start_date", (str) => { // 选择日期
            if(str != undefined && str != "Invalid Date"){
                $scope.$emit("choose_time_to_parent", str);
                $scope.$emit("hideChooseCity", false);
            }
        })
    }])
    .name;