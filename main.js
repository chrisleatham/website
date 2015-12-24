var myApp = angular.module('myApp', ['ui.router']);

//Controllers for each page
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html',
        controller: 'AboutController',
    })
    .state('education', {
        url: '/education',
        templateUrl: 'pages/education.html',
        controller: 'EducationController',
    })
    .state('CV', {
        url: '/CV',
        templateUrl: 'pages/CV.html',
        controller: 'CVController',
    })
    .state('projects',{
        url:'/projects',
        templateUrl: 'pages/projects.html',
        controller: 'ProjectsController',
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'ContactController',
    })
})

.controller('HomeController', function($scope) {

})

.controller('AboutController', function($scope) {

})

//Reading in JSONS for classes
.controller('EducationController', function($scope, $http) {
    $http.get('data/classes.JSON').success(function(response) {
        $scope.courseInfo = response;
    })

})

.directive('popover', function(){
    return function(scope, elem) {
        elem.popover();
    }
});

//Reading in JSONS for work
.controller('CVController', function($scope, $http) {
    $http.get('data/work.JSON').success(function(response) {
        $scope.workInfo = response;
    })
    $http.get('data/activity.JSON').success(function(response) {
        $scope.activityInfo = response;
    })
})

.controller('ProjectsController', function($scope) {

})

.controller('ContactController', function($scope) {

}); 