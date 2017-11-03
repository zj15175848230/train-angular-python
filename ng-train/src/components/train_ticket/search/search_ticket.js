import trainJson from "../../../static/train_name/train.json";
export default ($scope, $http) => {
    $scope.data = "余票查询";
    console.log($http);
    // var a = $http.get("../static/train.json");
    // console.log(a);
    console.log(trainJson)
}