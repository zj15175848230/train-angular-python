import angular from "angular";
import search_station from "./search/search_station.js";
import show_station from "./show/show_station.js";
import choose_city from "src/components/common/city_choose/city.js";
import directive_module from "src/components/common/directive/directive_module";
import includeHtml from "src/components/common/city_choose/city.html";
export default angular.module("train_station", [choose_city, directive_module])
    .controller("search_station", ["$scope", "$state", search_station])
    .controller("show_station", ["$scope", "$stateParams",show_station])
    .directive("ngIncludeRite", () => {
        return {
            register: "E",
            replate: true,
            template: includeHtml
        }
    })
    .name;
