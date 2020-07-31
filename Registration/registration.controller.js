angular
.module('registrationForm')
.controller('FormController',FormController);

FormController.$inject = ['$timeout'];

function FormController($timeout) {
    const vm = this;
    // vm.clickBtn = clickBtn;
    //
    // function clickBtn() {
    //     vm.loading = true; // start loading
    //     $timeout(function() {
    //         vm.loading = false; // stop loading
    //     }, 2000);
    // }
}