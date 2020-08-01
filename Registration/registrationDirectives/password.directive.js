angular
    .module('registrationForm')
    .directive('password', password);

function password() {

    let PASS_REGEXP =  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    let directive = {
        require: 'ngModel',
        link: link,
    }

    return directive;

    function link(scope, elm, attrs, ctrl) {
        ctrl.$validators.password= function (modelValue,viewValue) {
            return ctrl.$isEmpty(modelValue) || PASS_REGEXP.test(modelValue);
        }
    }
}