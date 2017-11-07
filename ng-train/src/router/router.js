import angular from "angular";
import uiRouter from "angular-ui-router";
import train from "./../components/module.js";
import home from "./../components/train_home/home.html";
import show_number from "./../components/train_number/show/show_number.html";
import search_number from "./../components/train_number/search/search_number.html";
import show_station from "./../components/train_station/show/show_station.html";
import search_station from "./../components/train_station/search/search_station.html";
import show_ticket from "./../components/train_ticket/show/show_ticket.html";
import search_ticket from "./../components/train_ticket/search/search_ticket.html";
export default angular.module("my.router", [uiRouter, train])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider ) {
        $stateProvider.state("home", {
            url: "/",
            template: home,
            controller: "home"
        }).state("search_number", {
            url: "/search_number",
            template: search_number,
            controller: "search_number"
        }).state("show_number", {
            url: "/show_number/:id",
            template: show_number,
            controller: "show_number"
        }).state("search_station", {
            url: "/search_station",
            template: search_station,
            controller: "search_station"
        }).state("show_station", {
            url: "/show_station/:start/:end/:ishigh",
            template: show_station,
            controller: "show_station"
        }).state("search_ticket", {
            url: "/search_ticket",
            template: search_ticket,
            controller: "search_ticket"
        }).state("show_ticket", {
            url: "/show_ticket/:start/:end/:time",
            template: show_ticket,
            controller: "show_ticket"
        });
        $urlRouterProvider.otherwise("/");
    }])
    .name;