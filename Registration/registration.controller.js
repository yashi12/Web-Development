angular
    .module('registrationForm')
    .controller('FormController', FormController);

// FormController.$inject = ['$timeout'];

function FormController() {
    const vm = this;
    vm.user = {
        name: "",
        nameEntered: false,
        email: "",
        password: "",
        confirmPassword: ""
    };
    vm.setName = setName;
    vm.setIfNameEntered = setIfNameEntered;
    vm.checkIfEmailPresent = checkIfEmailPresent;

    function setName() {
        if (vm.user.nameEntered == false && vm.user.email.length > 0) {
            let name = vm.user.email.substring(0, vm.user.email.indexOf('@'));
            console.log(name);
            vm.user.name = name;
        }
    }

    function setIfNameEntered() {
        if (vm.user.name != "") {
            vm.user.nameEntered = true;
        } else {
            vm.user.nameEntered = false;
        }
    }

    function checkIfEmailPresent() {
        if (vm.user.email != "" && vm.user.name == "") {
            let name = vm.user.email.substring(0, vm.user.email.indexOf('@'));
            vm.user.name = name;
        }
    }

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