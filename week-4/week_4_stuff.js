Vue.component('message-board',{
    props:['title'],
    template:`
    <div>
        <h4>{{title}}</h4>
        <p>your name:<input type="text" v-model="visitor_name"></p>
        <p>your message: <input type="text" v-model="visitor_message"></p>

        <button v-on:click="sayHi">Say hi</button>

        <ul>
            <li v-for="message in messages">{{message["visitor_name"]}} : {{message["visitor_message"]}}</li>
        </ul>
    </div>
    `,
    data:function(){
        return{
            visitor_name:"",
            visitor_message:"",
            messages:[]
        }
    },
    methods:{
        sayHi: function(){
            this.messages.push({
                "visitor_name":this.visitor_name, 
                "vistior_message":this.visitor_message
            });
            this.visitor_name="";
            this.visitor_message="";
            this.$emit('add-to-global-count')
        }
    },
    coumputed:{
        count:function(){
            return this.messages.length;
        }
    }
})
var app = new Vue({
    el:'#app',
    data:{
        global_count:0,
    },
    methods:{
        count_global:function(){
            this.global_count=this.global_count+1;
        }
    }
})