/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function () {
    return {
      message: "News-Hunt",
      list: [],
      reddit: [],
      producthunt: []
    };
  },
  created: function () {
    // axios.get("http://localhost:3000/api/all").then(function(response){
    //   this.list = response.data;
    // }.bind(this));
    // TESTING PURPOSES ONLY -- UNTIL ALL ALGORITHM IS SPED UP //
    axios.get("http://localhost:3000/api/reddit").then(function(response){
      this.list = response.data;
    }.bind(this));
  },
  methods: {
    getReddit() {
      this.list = this.reddit;
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