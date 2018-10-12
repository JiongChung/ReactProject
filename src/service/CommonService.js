export default{
    referer: function(){
        return document.referrer.replace(/\$/g,"");
    },
    zValidate: {
        int: function(int){
            var myreg = /^[0-9]*[0-9][0-9]*$/;
            return myreg.test(int);
        },
        phone: function(phone){
            var myreg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
            return myreg.test(phone);
        },
        email: function(email){
            var myreg = /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,8}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
            return myreg.test(email.replace(/(^\s*)|(\s*$)/g, ""));
        },
        password : function(password){
            var myreg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{8,20}$/;
            return myreg.test(password);
        }
    },
    setTimer: null,
    getPhoneCodeNow: function(o, time, status, text, retext, type){
        var that = this;
        if(type !== undefined && type === 'off'){
            clearTimeout(this.setTimer)
        }
        
        if(time === 0) {
            o.innerHTML = text;
            o.classList.remove('loading');
            time = 60;
            status = true;
        } else {
            status = false;
            o.classList.add('loading');
            o.innerHTML = retext + '(' + time + 's)';
            time--;
            this.setTimer = setTimeout(function() {
                that.getPhoneCodeNow(o,time,status,text,retext)
            }, 1000);
        }

        return status;
    },
    formatPhone: function(value){
        if(typeof(value) === 'number'){
            value = value.toString();
        }
        value = value.substr(0,2) + '***' + value.substr(value.length - 4);

        return value;
    },
    minute : 1000 * 60,
    hour : 1000 * 60 * 60,
    day : 1000 * 60 * 60 * 24,
    halfamonth : 1000 * 60 * 60 * 24 * 15,
    month : 1000 * 60 * 60 * 24 * 30,
    getDateDiff: function (dateandtime) {
        var result = '';
        var idata = new Date(dateandtime).getTime()
        var now = new Date().getTime();
        var diffValue = now - idata;
        var monthC = diffValue / this.month;
        var weekC = diffValue / (7 * this.day);
        var dayC = diffValue / this.day;
        var hourC = diffValue / this.hour;
        var minC = diffValue / this.minute;
        if (monthC >= 1) {
            result = parseInt(monthC,10) + "个月前";
        }
        else if (weekC >= 1) {
            result = parseInt(weekC,10) + "周前";
        }else if (dayC >= 1) {
            result = parseInt(dayC,10) + "天前";
        }else if (hourC >= 1) {
            result = parseInt(hourC,10) + "个小时前";
        }else if (minC >= 1) {
            result = parseInt(minC,10) + "分钟前";
        }else{
            result = "一分钟前";
        }
        return result;
    },

    integerMultiple: function(multiple, value){
        return (value < multiple) ? false : ((value % multiple === 0) ? true : false);
    }
}