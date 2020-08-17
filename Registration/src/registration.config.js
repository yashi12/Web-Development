// import moduleApp from "./index.js";
// import '../dist/registrationFormTemplate.html';
//
// export let configApp = moduleApp
//     .config(registrationConfig);

registrationConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function registrationConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('form',{
            url:'',
            controller:'FormController as vm',
            template:require('../dist/registrationFormTemplate.html'),
            // template:'<h1>hello</h1>',
        });
    $urlRouterProvider.otherwise('');
}
export default registrationConfig;