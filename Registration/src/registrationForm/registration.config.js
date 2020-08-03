angular
    .module('registrationForm')
    .config('registrationConfig', registrationConfig);

registrationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function registrationConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('form',{
            url:'',
            controller:'FormController as vm',
            template:'<h1>hello</h1>',
            // templateUrl:'registrationForm.tmpl.html'
        });
    $urlRouterProvider.otherwise('');
}