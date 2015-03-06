'use strict';

angular.module('robobetty', 
  [
  'ui.router',
  'widget',
  'product', 
  'dashboard',
  'ui.bootstrap',
  'signin',
  'register',
  'thankyou',
  'DashboardFormBuilderModule',
   'checkin',
   'thankyouCheckIn'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');

// <<<<<<< HEAD
// <<<<<<< HEAD
// .config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/dashboard');
//   $stateProvider
//   .state('common',{
//     templateUrl: 'views/components/dashboard/views/dashboard.html',
//     abstract: true
//   })
//   .state('home', {
//     url: '/home',
//     templateUrl: 'views/components/home/views/home.html'
//   })
//   .state('createForm', {
//     url: '/createform',
//     controller: 'FormCreateController',
//     templateUrl: 'views/components/dashboard/formBuilder/views/create.html'
//   })
//   .state('product', {
//     url: '/product',
//     templateUrl: 'views/components/product/views/product.html',
//     title: 'Product'
//   })
//   .state('dashboard', {
//     url: '/dashboard',
//     template: '',
//     parent: 'common'
//   })
//   .state('doctors', {
//     url: '/doctors',
//     templateUrl: 'views/components/dashboard/doctors/views/doctors.html',
//     parent: 'common',
//     title: 'Doctors View'
//   })
//   .state('signin', {
//     url: '/signin',
//     templateUrl: 'views/components/receptionistPortal/signin/views/login.html'
//   })
//   .state('register', {
//     url: '/register',
//     templateUrl: 'views/components/receptionistPortal/register/views/register.html'
//   });
// });
// =======
    $stateProvider
      .state('common',{
        templateUrl: 'views/components/dashboard/main/views/dashboard.html',
        abstract: true
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/components/home/views/home.html'
      })
      .state('createForm', {
        url: '/createform',
        controller: 'FormCreateController',
        templateUrl: 'views/components/dashboard/formBuilder/views/create.html',
        parent: 'common',
        title: 'Create New Form'
      })
      .state('product', {
        url: '/product',
        templateUrl: 'views/components/product/views/product.html'
      })
      .state('dashboard',{
        url:'/dashboard',
        template: '',
        parent: 'common'
      })
       .state('patientQueue', {
        url: '/patientQueue',
        templateUrl: 'views/components/dashboard/patientQueue/views/patients.html',
        parent: 'common',
        title: 'Patients Queue'
      })    
      .state('doctors', {
        url: '/doctors',
        templateUrl: 'views/components/dashboard/doctors/views/doctors.html',
        parent: 'common'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'views/components/receptionistPortal/signin/views/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/components/receptionistPortal/register/views/register.html'
      })
      .state('checkin', {
        url: '/checkin',
        templateUrl: 'views/components/patientCheckin/checkin/views/checkin.html'
      })
      .state('thankyou', {
        url: '/thankyou',
        templateUrl: 'views/components/receptionistPortal/register/views/thankyou.html'
      })
      .state('thankyouCheckIn', {
        url: '/thankyouCheckIn',
        templateUrl: 'views/components/patientCheckin/checkin/views/CheckInthankyou.html'
      });
  })
// // >>>>>>> 07f432
// =======
// .config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/dashboard');
//   $stateProvider
//   .state('common',{
//     templateUrl: 'views/components/dashboard/views/dashboard.html',
//     abstract: true
//   })
//   .state('home', {
//     url: '/home',
//     templateUrl: 'views/components/home/views/home.html'
//   })
//   .state('createForm', {
//     url: '/createform',
//     controller: 'FormCreateController',
//     templateUrl: 'views/components/dashboard/formBuilder/views/create.html'
//   })
//   .state('product', {
//     url: '/product',
//     templateUrl: 'views/components/product/views/product.html'
//   })
//   .state('dashboard', {
//     url: '/dashboard',
//     template: '',
//     parent: 'common'
//   })
//   .state('doctors', {
//     url: '/doctors',
//     templateUrl: 'views/components/dashboard/doctors/views/doctors.html',
//     parent: 'common'
//   })
//   .state('settings', {
//     url: '/settings',
//     templateUrl: 'views/components/dashboard/settings/views/settings.html',
//     parent: 'common'
//   })
//   .state('signin', {
//     url: '/signin',
//     templateUrl: 'views/components/receptionistPortal/signin/views/login.html'
//   })
//   .state('register', {
//     url: '/register',
//     templateUrl: 'views/components/receptionistPortal/register/views/register.html'
//   })
//   .state('checkin', {
//     url: '/checkin',
//     templateUrl: 'views/components/patientCheckin/checkin/views/checkin.html'
//   })
//   .state('thankyou', {
//     url: '/thankyou',
//     templateUrl: 'views/components/receptionistPortal/register/views/thankyou.html'
//   })
//   .state('thankyouCheckIn', {
//     url: '/thankyouCheckIn',
//     templateUrl: 'views/components/patientCheckin/checkin/views/CheckInthankyou.html'
//   });
// })
  .run(['$rootScope', '$injector', function($rootScope, $injector){
    $injector.get("$http").defaults.transformRequest = function(data, headersGetter) 
    { 
      if ($rootScope.token) headersGetter()['token'] = $rootScope.token;
      if ($rootScope.email) headersGetter()['email'] = $rootScope.email; 
      if (data) 
        { 
            return angular.toJson(data); 
          }
    } 
  }]);
// >>>>>>> origin/Profile2

