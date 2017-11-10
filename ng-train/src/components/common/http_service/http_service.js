import angular from "angular";
const baseUrl = "http://jisutrain.market.alicloudapi.com";
import testJson from "./test.json";
import showStationJson from "./show_station.json";
import showTicket from "./show_ticket.json";
/*
*  http请求 服务
* */
export default angular.module("http.service", [])
    .service("train_number_service", ["$http", ($http) => {
        return {
            trainNumber: (val) => {
                // return $http({
                //     method: "GET",
                //     url: `${ baseUrl }/train/line?trainno=${ val }`,
                //     headers: {
                //         Authorization: "APPCODE 38c3b715773c4fcbb574d6b7e7cd49b1"
                //     }
                // })
                return new Promise((resolve, reject) => {
                    resolve(testJson);
                })
            }
        }
    }])
    .service("city_choose_service", ["$http", ($http) => {
        return {
            inputStationName: (val) => {
                return $http({ // 获取输入值相关的城市名
                    method: "GET",
                    url: "/v1/train/query/station_name/" + val
                });
            }
        }
    }])
    .service("train_station_service", ["$http", ($http) => {
        return {
            showStation: (start, end, ishigh) => {
                // return $http({
                //     method: "GET",
                //     url: `${ baseUrl }/train/station2s?start=${ start }&end=${ end }&ishigh=${ ishigh }`,
                //     headers: {
                //         Authorization: "APPCODE 38c3b715773c4fcbb574d6b7e7cd49b1"
                //     }
                // })
                return new Promise((resolve, reject) => {
                    resolve(showStationJson);
                })
            }
        }
    }])
    .service("train_ticket_service", ["$http", ($http) => {
        return {
            queryTicket: (start, end, time) => {
                // return $http({
                //     method: "GET",
                //     url: `${ baseUrl }/train/ticket?start=${ start }&end=${ end }&date=${ time }`,
                //     headers: {
                //         Authorization: "APPCODE 38c3b715773c4fcbb574d6b7e7cd49b1"
                //     }
                // });
                return new Promise((resolve, reject) => {
                    resolve(showTicket);
                });
            }
        }
    }])
    .name;