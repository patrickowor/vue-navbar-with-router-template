var routes = [
    {path : '/', component : Home  },
    {path : '/contact', component : Contact },
    ];
    
var router = new VueRouter({
    routes : routes,
    modes : 'history',
    base: '/',
});