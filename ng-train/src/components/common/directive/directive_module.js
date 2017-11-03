import angular from "angular";
import footer from "./html/footer.html";
import header from "./html/header.html";

/*
*  自定义指令 头部标签 尾部标签 本地存储属性
* */
export default angular.module("directive_module", [])
    .directive("ngFooter", () => { // 头部标签
        return {
            restrict: "E",
            template: footer,
            replace: true,
            scope: { // 会生成一个隔离作用域 不能调用其他作用域的变量

            }
        }
    })
    .directive("ngHeader", () => { // 尾部标签
        return {
            restrict: "E",
            template: header,
            replace: true,
            scope: { // 会生成一个隔离作用域 不能调用其他作用域的变量

            },
            link($scope, $element, $attrs){
                $scope.$on("toChild", (c, d) => {
                    $scope.train_number = `${ d }`;
                })
                $scope.train_number = `${ $attrs.name }` ;
            }
        }
    })
    .directive("locals", () => { // 本地存储 属性指令 两个参数 [需要存入的值， 标识name]
        return {
            restrict: "A",
            replace: true,
            scope: { // 会生成一个隔离作用域 不能调用其他作用域的变量

            },
            link($scope, $element, $attrs){
                $element.bind("click", () => { // 当点击当前绑定属性的标签触发
                    try{
                        let locals = JSON.parse($attrs.locals)
                        let localsHistory = localStorage.getItem(locals[1]);
                        let historyList = localsHistory ? JSON.parse(localsHistory) : [];
                        let ifTrue = Array.prototype.includes ? !historyList.includes(locals[0]) : !historyList.some((val) => val == locals[0]);
                        if( ifTrue ) {
                            historyList.push(locals[0]);
                        }
                        localStorage.setItem(locals[1], JSON.stringify(historyList));
                    }catch (e){
                        alert("历史记录失败！");
                        // localStorage.clear(locals[1]);
                    }
                });
            }
        }
    })
    .name;