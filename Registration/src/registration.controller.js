import {configApp} from "./registration.config.js";
import moduleApp from "./registration.module.js";
import Icon from '../images/registrationFormSide.jpeg';


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
        sideImage:"../images/registrationFormSide.jpeg",
        content:"",
    };
    vm.setName = setName;
    vm.setIfNameEntered = setIfNameEntered;
    vm.checkIfEmailPresent = checkIfEmailPresent;

    const myIcon = new Image();
    myIcon.src = Icon;
    document.getElementById('sideImageDiv').appendChild(myIcon);

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
