export default {
    area: null,   
    lHeight: 0,
    time: 50,
    timer:null,
    scrollMove: function(){
        clearInterval(this.timer);
        this.area.scrollTop++;
        this.timer = setInterval(() => {
            this.scrollUp();
        },this.time);
    },

    scrollUp: function(){
        if(this.area.scrollTop % this.lHeight === 0){
            clearInterval(this.timer);
            setTimeout(() => {
                this.scrollMove();
            },2000);
        }else{
            this.area.scrollTop++;
            if(this.area.scrollTop >= this.area.scrollHeight/2){ 
                this.area.scrollTop = 0;    
            }
        }
    },
    init: function(btn,height){
        this.area = btn;
        this.lHeight = height;
        this.area.innerHTML += this.area.innerHTML;
        this.area.scrollTop = 0;
        setTimeout(() => {
            this.scrollMove();
        },2000);
    }
}

