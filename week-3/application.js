var app = new Vue({
    el:'#app',
    data:{
        message : "Hello world",
        visitor_name:"",
        visitors:[]
    },
    methods:{
        sayHi: function(){
            this.message = "Hi";
            this.count +=1;
            this.visitors.push(this.visitor_name);
            this.visitor_name="";
        }
    },
    coumputed:{
        count:function(){
            return this.visitors.length;
        }
    }
})