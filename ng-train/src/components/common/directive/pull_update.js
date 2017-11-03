import angular from "angular";
/*
*  自定义指令  下拉刷新
* */
export default angular.module("pull.update", [])
    .directive("ngPullUpdate", () => {
        return {
            restrict: "A", // 属性指令
            replace: true,
            scope: {

            },
            link ($scope, $element, $attrs){
                let maxHeight = 70, // 最大下拉距离
                    showHeight = 50; // 最终展示的下拉距离
                $element.bind("touchstart", (event_s) => { // 按下
                    if($element[0].scrollTop != 0) return;
                    let tsPagey = event_s.changedTouches[0].pageY; // 获取当前手指的位置
                    var isRefresh = $scope.$parent.top_scroll == showHeight;
                    $element.bind("touchmove", (event_m) => {
                        let movePagey = event_m.changedTouches[0].pageY - tsPagey;  // 获取手指移动的距离
                        if(isRefresh) { // 看是不是从头开始
                            movePagey = movePagey + showHeight;
                        }
                        if( movePagey <= maxHeight ){
                            $scope.$emit("changeTopScrollEmit", movePagey); // 将值穿给父组件
                        }
                    });
                    $element.bind("touchend", (event_e) => { // 抬起
                        let tePagey = event_e.changedTouches[0].pageY; // 抬起的位置
                        let start_end = tePagey - tsPagey;
                        if(start_end >= showHeight || $scope.$parent.top_scroll > showHeight){ // 达到刷新要求
                            $scope.$emit("changeTopScrollEmit", showHeight);
                        }else if($scope.$parent.top_scroll < showHeight || start_end <= 0){ // 未达到 还原
                            $scope.$emit("changeTopScrollEmit", 0);
                        }
                        $element.unbind("touchmove"); // 接触move end事件
                        $element.unbind("touchend");
                    });
                });
            }
        }
    })
    .name;