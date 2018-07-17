/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      list: []
    };
  },
  created: function () {
    axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(response){
      top_list_ids = response.data;
      this.list = response.data;
      // top_list_ids.forEach(function(item){
      //   const instace = axios.create({
      //     baseURL: "https://hacker-news.firebaseio.com/v0/item/" + item,
      //     headers: { 'Access-Control-Allow-Origin': 'true'}
      //   });
      //     instace.get.then(function(response){
      //     this.list.push(response);
      //   }.bind(this));
      // }.bind(this));
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});