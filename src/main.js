import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const rouuter = new VueRouter({
  //We can register routes here too
  //but we will make a nnew file for it
  routes: Routes,
  mode:'history' //by default the mode is hash
})
//Hash that is '#'comes in path because
//currently you dont have a server to make REST calls
//so basically the vue development server which we are
//using redirects us using links with '#'
//'#' helps development server to make sure that calls are for
//Vue router and not to a server
// its like targetting an HTML ID on the page
//This is what we are making a Single Page Application
//So hash is default mode of VueRouter , you can change
//it to History mode

Vue.filter('snippet',function(value) {
  return value.slice(0,70) + '......(click for more)';
});


//Add the instannce of vue router in here
new Vue({
  el: '#app',
  render: h => h(App),
  router: rouuter //from line 10
})
