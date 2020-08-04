angular
    .module('registrationForm')
    .config(registrationConfig);

registrationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function registrationConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('form',{
            url:'',
            controller:'FormController as vm',
            templateUrl:'../dist/registrationFormTemplate.html',
            // template:'<h1>hello</h1>',
        });
    $urlRouterProvider.otherwise('');
}