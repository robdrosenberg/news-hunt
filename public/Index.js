/* global Vue, VueRouter, axios */
var HomePage = {
  template: "#home-page",
  data: function () {
    return {
      list: []
    };
  },
  created: function () {
    axios.get("/all").then(function(response){
      this.list = response.data;
    }.bind(this));
  },
  methods: {
    getHackerNews: function(){
      axios.get("/hackernews").then(function(response){
        this.list = response.data;
      }.bind(this));
    },
    getReddit: function () {
      axios.get("/reddit").then(function (response) {
        this.list = response.data;
      }.bind(this));
    },
    getProducthunt: function () {
      axios.get("/producthunt").then(function (response) {
        this.list = response.data;
      }.bind(this));
    },
    getGithubTrending: function () {
      axios.get("/githubtrending").then(function (response) {
        this.list = response.data;
      }.bind(this));
    },
    open: function(which, e) {
      // Prevents clicking the link from doing anything
      e.preventDefault();
      if (modal.active !== null) {
          $('#form-'+modal.active).removeClass('active');
          $('#'+modal.active+'-form').removeClass('active');
      }

      $('#login-modal').addClass('active');
      $('#form-'+which).addClass('active');
      $('#'+which+'-form').addClass('active');
      modal.active = which;
    }
  },
  computed: {}
};

var modal_submit_register = 'Register';  
var modal_submit_password = 'Reset Password';  
var modal_submit_login    = 'Login';

var modal = new Vue({  
  el: '#login-modal',
  data: {
    active: null,
    lock: false,

    // Submit button text
    registerSubmit: modal_submit_register,
    passwordSubmit: modal_submit_password,
    loginSubmit: modal_submit_login,

    // Modal text fields
    registerName:     '',
    registerEmail:    '',
    registerPassword: '',
    loginUser:        '',
    loginPassword:    '',
    passwordEmail:    '',

    // Modal error messages
    registerError: '',
    loginError:    '',
    passwordError: '',

    // ...
  },
  methods: {
    close: function(e) {
      e.preventDefault();
      if (e.target === this.$el) {
        $('#login-modal').removeClass('active');
      }
    },
    flip: function(which, e) {  
      e.preventDefault();
      if (which !== this.active) {

        $('#form-' + this.active).removeClass('active');
        $('#form-' + which).addClass('active');
        $('#'+which+'-form').addClass('active');
        $('#'+this.active+'-form').removeClass('active');

        this.active = which;
      }
      // Remove error messages
      this.registerError = '';
      this.passwordError = '';
      this.loginError = '';
    },
    submit: function(which, e) {  
      e.preventDefault();
      if (this.lock === true) return;  
      // If we get this far, now we lock it!
      this.lock = true; 

      $('#'+which+'Submit').addClass('disabled');
      var data = { 
        form: which 
      };

      switch(which) {
        case 'register':
            data.name = this.registerName;
            data.email = this.registerEmail;
            data.password = this.registerPassword;
            this.registerSubmit = 'Registering...';
            break;
        case 'login':
            data.user = this.loginUser;
            data.password = this.loginPassword;
            this.loginSubmit = 'Logging In...'
            break;
        case 'password':
            data.email = this.passwordEmail;
            this.passwordSubmit = 'Resetting Password...'
            break;
      }

      // TODO: submit our `data` variable
    }
  }
});

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
  router: router,
  data: {
    isLoggedIn: false
  },
  methods: {
  }
});