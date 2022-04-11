Vue.component('projectHead',{
    props:['APP_ID','title', 'links',],
    data : function(){
        return {
            search : '',
            searchState : false,
            navActive : false,
            apiResult : null,
            comupdate: 1,
        };
    },
    methods:{
        activate : function(){
            this.navActive = !this.navActive
        },
        getSearch : function(){
            this.searchState = true;
            this.$nextTick(function(){
            this.apiResult = {'a':6};
            this.comupdate++;
            })
        },
    },
    template:`<div>
        <div class="mx-3">
        <nav class="navbar navbar-expand-lg has-shadow is-white" style="width : 100%">
            <div class="navbar-brand">
                <router-link class="navbar-item" v-bind:to="title.url">
                    <img v-on:click="searchState = false" v-bind:src="title.img" v-bind:alt="title.text" />
                </router-link>
                <div v-on:click="activate()" class="navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div v-if="navActive" class="navbar-menu is-active">
                <div class="navbar-start">
                    <div v-for="link in links" class="navbar-items" v-on:click="searchState = false">
                    <router-link  class="button is-fullwidth" v-bind:to="link.url">
                        {{link.title}}
                    </router-link></div>    
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <input class="input is-rounded" v-model="search" 
                        v-on:keyup.enter="getSearch()"
                        type="search" name="search" id="search" placeholder="search"  />
                    </div>
                </div>
            </div>
        </nav>
        </div>
        
        <section class='section' v-if="searchState">

            <search :key="comupdate"
                v-bind:val="search"
                v-bind:allData="apiResult"
            />

        </section>
    </div>`,
});

/*
 title : {
     url : 'link to home',
     text : 'name of site',
     img : 'link to logo source',
 }
 links : [
    {
        title: 'name of link eg post',
        url: 'link of the link'
    },
    {
        title: 'name of link eg post',
        url: 'link of the link'
    },  
 ]
search : ''
 */
 
