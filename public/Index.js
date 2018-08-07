/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function () {
    return {
      message: "News-Hunt",
      list: [],
      top_list_ids: [],
      products: []
    };
  },
  created: function () {
    axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then(function(response){
      this.top_list_ids = response.data;
      // console.log(this.top_list_ids)
      this.top_list_ids.forEach(function(id){
        axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty").then(function (response) {
          this.list.push(response.data);
        }.bind(this));
        
      }.bind(this));
      console.log(this.list);
      
    }.bind(this));

    var config = {
      headers: { 'Authorization': 'Bearer 3e627f2710c24eadf5c4cbdda0bd0aeace3adbe0b706ed8f14a4e4eb60bab936' }
    };

    axios.get('https://api.producthunt.com/v1/posts', config).then(function(response){
      console.log(response.data);
      this.products = response.data;
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