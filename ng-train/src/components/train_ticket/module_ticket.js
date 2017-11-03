import angular from "angular";
import search_ticket from "./search/search_ticket.js";
import show_ticket from "./show/show_ticket.js";

export default angular.module("train_ticket", [])
    .controller("search_ticket", ["$scope", search_ticket])
    .controller("show_ticket", ["$scope", show_ticket])
    .name;
