/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function () {
    return {
      message: "News-Hunt",
      list: []
    };
  },
  created: function () {
    axios.get("http://localhost:3000/api/all").then(function(response){
      this.list = response.data;
    }.bind(this));
  },
  methods: {
    getHackerNews: function(){
      axios.get("http://localhost:3000/api/hackernews").then(function(response){
        this.list = response.data;
      }.bind(this));
    },
    getReddit: function () {
      axios.get("http://localhost:3000/api/reddit").then(function (response) {
        this.list = response.data;
      }.bind(this));
    },
    getProducthunt: function () {
      axios.get("http://localhost:3000/api/producthunt").then(function (response) {
        this.list = response.data;
      }.bind(this));
    },
    getGithubTrending: function () {
      axios.get("http://localhost:3000/api/githubtrending").then(function (response) {
        this.list = response.data;
      }.bind(this));
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});