import Icon from '../images/registrationFormSide.jpeg';

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

}
export default FormController;