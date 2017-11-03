import angular from "angular";
import home from "./train_home/home.js";
import train_number from "./train_number/module_number";
import train_station from "./train_station/module_station";
import train_ticket from "./train_ticket/module_ticket";

export default angular.module("train", [train_number, train_station, train_ticket])
	.controller("home", ["$scope", home])
	.name;
