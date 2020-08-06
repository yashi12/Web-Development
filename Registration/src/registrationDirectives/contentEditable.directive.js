// import {controllerApp} from "../registration.controller.js";
//
// console.log("edit");
// controllerApp
//     .directive('contenteditable', contenteditable);

function contenteditable() {
    console.log("function");
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            // view -> model
            elm.on('blur', function () {
                ctrl.$setViewValue(elm.html());
                console.log("blur");
            });

            // model -> view
            ctrl.$render = function () {
                elm.html(ctrl.$viewValue);
                console.log("render");
            };

            // load init value from DOM
            ctrl.$setViewValue(elm.html());
            console.log("return");
        }
    };
}

export default contenteditable;