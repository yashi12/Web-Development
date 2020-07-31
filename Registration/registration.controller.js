angular
    .module('registrationForm')
    .controller('FormController', FormController);

FormController.$inject = ['$timeout'];

function FormController($timeout) {
    const vm = this;
    vm.confirmPassword = confirmPassword;

    function confirmPassword() {
        if (vm.password === vm.confirmPass) {
            return true;
        }
        return false;
    }

    // vm.clickBtn = clickBtn;
    //
    // function clickBtn() {
    //     vm.loading = true; // start loading
    //     $timeout(function() {
    //         vm.loading = false; // stop loading
    //     }, 2000);
    // }
}