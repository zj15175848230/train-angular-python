import angular from "angular";
export default angular.module("my.filter", [])
	.filter("timetohours", () => { // 时间格式过滤
        return (val) => {
            if( val < 60 ){
                return val + "分";
            }else{
                return Math.floor(val / 60) + "时" + val % 60 + "分";
            }
        }
    })
    .filter("price_no", () => { // 金钱格式过滤
        return (val) => {
            if( val == 0 ){
                return "￥" + 0;
            }else{
                return "￥" + val;
            }
        }
    })
    .filter("time_filter", () => {
    	return (val, b) => {
    		let d = new Date(val);
    		var init_d = `${ d.getFullYear() }-${ d.getMonth() < 9 ? "0" + ( d.getMonth() + 1 ) : d.getMonth() + 1 }-${ d.getDate() < 10 ? "0" + d.getDate() : d.getDate() }`;
    		if(!b) return init_d
    		return init_d.split("-").join("/");
    	}
    })
    .name;