import angular from "angular";
import "./sass/site.scss";
import routerRoot from "./router/router";
import ngSanitize from "angular-sanitize";
import ngTouch from "angular-touch";
angular.module("myApp", [routerRoot, ngSanitize, ngTouch]);