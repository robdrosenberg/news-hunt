/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function () {
    return {
      message: "News-Hunt",
      list: [],
      top_list_ids: []
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
    // this.list = [1,2,3]

    // top_list_ids.forEach(function(id){
    //   console.log("COLLEEN")
    //   axios.get("https://hacker-news.firebaseio.com/v0/item/"+ id +".json?print=pretty").then(function(response){
    //     console.log(id);
    //     console.log(response.data);
    //   })
    // })
    
  },
  methods: {},
  computed: {
    getStories: function (){
      console.log(top_list_ids);
    }
  }
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