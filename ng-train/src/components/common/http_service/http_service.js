import angular from "angular";
const baseUrl = "http://jisutrain.market.alicloudapi.com";
import testJson from "./test.json";
/*
*  http请求 服务
* */
export default angular.module("http.service", [])
    .service("httpService", ["$rootScope", "$http", ($rootScope, $http) => {
        /*var service = {
            books: [1, 2, 3],
            addB(book){
                service.books.push(book);
                // $rootScope.$broadcast("books.update");
            }
        }*/

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
                    resolve(testJson)
                })
            }
        }
    }])
    .name;