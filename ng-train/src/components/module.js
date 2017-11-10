import angular from "angular";
import home from "./train_home/home.js";
import train_number from "./train_number/module_number";
import train_station from "./train_station/module_station";
import train_ticket from "./train_ticket/module_ticket";
import pull_update from "src/components/common/directive/pull_update";
export default angular.module("train", [train_number, train_station, train_ticket, pull_update])
	.controller("home", ["$scope", home])
	.name;
