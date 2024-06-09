// 业务逻辑代码
const date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var hourReturn = '';
var hourStr = '';
if(hour < 12){
    hourStr = AM;
    if(hour < 10){
        hourReturn = '0' + hour;
    }
}else{
    hourStr = PM;
    hourReturn = hour;
}
console.log(hourReturn,minute,hourStr)