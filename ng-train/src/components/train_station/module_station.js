import angular from "angular";
import search_station from "./search/search_station.js";
import show_station from "./show/show_station.js";
import directive_module from "src/components/common/directive/directive_module";
import httpService from "src/components/common/http_service/http_service";

export default angular.module("train_station", [directive_module, httpService])
    .controller("search_station", ["$scope", "$state", search_station])
    .controller("show_station", ["$scope", "$stateParams", "train_station_service", show_station])
    .name;
