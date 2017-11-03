// import g from "./../../../static/test-data/gt.json";
// import d from "./../../../static/test_data/dc.json";
// import c from "./../../../static/test_data/c.json";
// import k from "./../../../static/test_data/k.json";
// import p from "./../../../static/test_data/p.json";
// import s from "./../../../static/test_data/s.json";
// import t from "./../../../static/test_data/t.json";
// import y from "./../../../static/test_data/y.json";
// import z from "./../../../static/test_data/z.json";
// const testData = {
//     g, d, c, k, p, s, t, y, z
// }
export default ($scope, httpService, $stateParams) => {
    $scope.train_info = null; // 车次信息
    $scope.top_scroll = 0; // 卷曲长度
    $scope.train_number = null; // 车次名字
    httpService.trainNumber($stateParams.id).then((response) => { // 获取车次信息  httpServer
        let result = response.data.result;
        $scope.train_info = result.list;
        $scope.train_number = result.type + result.trainno + "次列车时刻表";
        $scope.$broadcast("toChild", $scope.train_number);
    }).catch((err) => {
        console.log(err);
        $scope.train_info = null;
        alert("加载失败，请重新加载！");
    });
    $scope.$on("changeTopScrollEmit", (e, v) => { // 接受子组件传来的数据
        $scope.top_scroll = v;
        $scope.$apply(); // 改变数据  渲染视图
    });

    $scope.priceIndex = null; // 当前展开index
    $scope.showPrice = (index) => { // 事件  展开查看票价
        if( $scope.priceIndex == index ){
            $scope.priceIndex = null;
        }else {
            $scope.priceIndex = index;
        }
    }
}