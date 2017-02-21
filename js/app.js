angular.module('miniRouting', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home', {
    templateUrl: "/home/homeTmpl.html",
    controller: "homeCtrl",
    url: '/'
  })
  .state('settings', {
    templateUrl: "/settings/settingsTmpl.html",
    controller: "settingsCtrl.js",
    url: "/settings"
  })
  .state('products', {
    templateUrl: "/products/productTmpl.html",
    controller: "productsCtrl.js",
    url: "/products/:id"
  });

  $urlRouterProvider.otherwise('/');

})
