import angular from "angular";
import search_ticket from "./search/search_ticket.js";
import show_ticket from "./show/show_ticket.js";
import httpService from "src/components/common/http_service/http_service";
import directive_module from "src/components/common/directive/directive_module";
import my_filter from "src/components/common/filter/filter";

export default angular.module("train_ticket", [httpService, directive_module, my_filter])
    .controller("search_ticket", ["$scope", "$state", search_ticket])
    .controller("show_ticket", ["$scope", "train_ticket_service", "$stateParams", "$filter", show_ticket])
    .name;
