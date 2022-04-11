var project = new Vue({
    el : '#vue-app',
    router,
    data : {
        head:{
            title : {
                url : '/',
                img : '/',
                text : 'home'
             },
            links : [
                {
                 title : 'post',
                 url : '/post' ,
                },
                {
                    title: 'contact' ,
                     url: '/contact',
                 },
                ]
            },
        post : {
            
        } ,
        APP_ID : '60022968a5bfba3b5b1e312f',
    },
    methods: {
        
    },
    template:`<div><div>
        <div id="project-head" class="">
            <projectHead
                v-bind:APP_ID='APP_ID'
                v-bind:title="head.title"
                v-bind:links="head.links"
            />
        </div>
        <div id="body" class="">
            <router-view></router-view>
        </div>
        <div id="footer" class="">
            
        </div>
    </div></div>`,
});