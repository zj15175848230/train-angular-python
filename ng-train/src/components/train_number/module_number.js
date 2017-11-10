import angular from "angular";
import search_number from "./search/search_number.js";
import show_number from "./show/show_number.js";
import directive_module from "src/components/common/directive/directive_module";
import httpService from "src/components/common/http_service/http_service";
import pull_update from "src/components/common/directive/pull_update";
import my_filter from "src/components/common/filter/filter";
export default angular.module("train_number", [directive_module, httpService, pull_update, my_filter])
    .controller("search_number", ["$scope", search_number]) // 车次查询 controller
    .controller("show_number", ["$scope", "train_number_service", "$stateParams", show_number]) // 车次展示 controller
    .filter("filterTrainNumber", () => { // 过滤器对车次进行过滤
        return (arr, val) => {  // 只显示符合条件的前15条
            var newArr = [];
            if(arr.length == 0) return ["请输入正确的车次"];
            var valRegExp = new RegExp( "^" + val, "i" );
            for(let item of arr){
                if(item.match(valRegExp)){
                    newArr.push(item);
                }else {
                    continue;
                }
            }
            return newArr.length >= 15 ? newArr.slice(0, 15) : newArr.length == 0 ? ["请输入正确的车次"] : newArr;
        }
    })
    .name;
