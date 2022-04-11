var Search =  Vue.component('search',{
    props:['val','allData'],
    data : function(){
        return {
        }
    },
    methods :{
       init : function() {
          console.log('hi')
          
       },
       
    },
    template: `<div>
    <div class="box has-shadow">
       searching for : <p class="has-text-primary is-inline"> {{val}} </p>
       <div  v-if="allData == null" class="container has-text-centered">
            <div class="button is-outlined is-primary is-loading"></div>
        </div>
        <div v-else class='container has-text-centered' >
            <div class="box">
                    {{allData}}
            </div>
        </div>
    </div>
    </div>`
});



/*
props

1. search-value

2. data recieved from app data method  that has that specified search detail  a) name b) url c) author d) part of post that has it
3.
*/