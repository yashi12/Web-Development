angular
    .module('registrationForm')
    .controller('FormController', FormController);

// FormController.$inject = ['$timeout'];

function FormController() {
    const vm = this;
    vm.user = {
        password: "",
        confirmPassword: ""
    };
    //
    // function confirmPassword() {
    //     if (vm.originalPassword === vm.confirmPass) {
    //         console.log(vm.originalPassword,vm.confirmPass);
    //         console.log("true");
    //         return true;
    //     }
    //     console.log(vm.originalPassword,vm.confirmPass);
    //     console.log("false");
    //     return false;
    // }

}