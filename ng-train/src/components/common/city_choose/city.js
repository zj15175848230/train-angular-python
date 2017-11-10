import angular from "angular";
import station_names from "src/static/station_name/station.json";
import httpService from "src/components/common/http_service/http_service";
/*
* 城市选择
* */
export default angular.module("cityChoose", [httpService])
    .controller("choose.city", ["$scope", "city_choose_service", "$timeout", ($scope, city_choose_service, $timeout) => {
        // 推荐城市列表
        $scope.recommend_city = ["北京", "上海", "杭州", "广州", "南京", "成都", "西安", "郑州", "重庆", "合肥", "汉口", "武汉", "长沙", "武昌", "太原", "苏州", "厦门", "南昌", "沈阳", "天津", "深圳"];
        // 右侧导航列表
        $scope.latter_hash = ["当前", "推荐", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
        $scope.station_names = station_names; // 所有城市列表
        $scope.search_name = ""; // 输入框输入的value
        $scope.show_query_result = false; // 输入框结果是否显示
        $scope.hashHeight = (window.innerHeight - 55 - 40) / 22 + "px"; // 用js定义右侧导航的高度 平均沾满整个屏幕

        $scope.$on("chooseSearchToChild", (e, val) => { // 接收父组件传下来的值
            $scope.now_city = val; // 当前城市名
            $scope.search_name = ""; // 清空输入框
        });

        $scope.hideCity = () => {  // 事件 点击隐藏城市选择界面
            $scope.$emit("hideChooseCity", false); // 向父controller传递数据 告诉父组件开始收起城市选择框
        }
        $scope.confirmCity = (val) => { // 事件 确认选择的城市 将值传给父组件 并告诉父组件收起城市选择框
            $scope.$emit("chooseSearchToParent", val, false);
        }
        $scope.hashGo = (index, $event) => { // 事件 点击右侧导航，调到对应的位置
            if(index == 0){ // 当前
                document.getElementsByClassName("scroll")[0].scrollTop = 0;
            }else if(index == 1){ // 推荐
                document.getElementsByClassName("scroll")[0].scrollTop = 40;
            }else{ // a-z
                document.getElementsByClassName("scroll")[0].scrollTop = document.getElementsByClassName("all_city")[index - 2].offsetTop;
            }
            $event.stopPropagation();
        }

        $scope.$watch("search_name", (val) => { // 监听input输入值的变化
            if(!val) { // 当输入框的值为空时， 隐藏搜索结果框
                $scope.query_result = [];
                $scope.show_query_result = false;
                return
            }
            $timeout.cancel($scope.timer); // 清空延时器
            $scope.timer = $timeout(() => { // 延时器， 方式请求过多
                city_choose_service.inputStationName(val).then((res) => {
                    $scope.query_result = res.data.data;
                    $scope.show_query_result = true;
                }).catch((err) => {
                    console.error(err);
                })
            }, 600);
        })
    }])
    .name;