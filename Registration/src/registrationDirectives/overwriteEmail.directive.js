
import {controllerApp} from "../registration.controller.js";

controllerApp
    .directive('overwriteEmail', overwriteEmail);

function overwriteEmail() {

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@td\.com$/i;
    let directive = {
        require: 'ngModel',
        link: link,
    }

    return directive;

    function link(scope, elm, attrs, ctrl) {
        ctrl.$validators.email = function (modelValue) {
            // if(!ctrl.$isEmpty(modelValue)){
            //     let name = modelValue.substring(0, modelValue.indexOf('@'));
            //     console.log(name);
            // }
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        }
    }
}