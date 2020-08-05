import {configApp} from "./registration.config.js";
import moduleApp from "./registration.module.js";
export let controllerApp = configApp
    .controller('FormController', FormController);


function FormController() {
    const vm = this;
    vm.user = {
        name: "",
        nameEntered: false,
        email: "",
        confirmPassword: "",
        originalPassword:"",
        fileSize:"",
        sideImage:""
    };
    vm.setName = setName;
    vm.setIfNameEntered = setIfNameEntered;
    vm.checkIfEmailPresent = checkIfEmailPresent;

    function setName() {
        console.log(typeof (vm.user.email));
        if (vm.user.nameEntered == false && (vm.user.email!="" && typeof(vm.user.email)!=='undefined')) {
            let name = vm.user.email.substring(0, vm.user.email.indexOf('@'));
            console.log(name);
            vm.user.name = name;
        }
        console.log("setName");
    }

    function setIfNameEntered() {
        if (vm.user.name != "") {
            vm.user.nameEntered = true;
        } else {
            vm.user.nameEntered = false;
        }
        console.log("setIfNameEntered");
    }

    function checkIfEmailPresent() {
        if (vm.user.email != "" && vm.user.name == "" && typeof(vm.user.email)!=='undefined') {
            let name = vm.user.email.substring(0, vm.user.email.indexOf('@'));
            vm.user.name = name;
            console.log("checkIfEmailPresent");
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
