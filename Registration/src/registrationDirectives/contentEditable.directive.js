
import {controllerApp} from "../registration.controller.js";

(function (angular) {
    'use strict';
    controllerApp
        .directive('contenteditable', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ctrl) {
                    // view -> model
                    elm.on('blur', function () {
                        ctrl.$setViewValue(elm.html());
                    });

                    // model -> view
                    ctrl.$render = function () {
                        elm.html(ctrl.$viewValue);
                    };

                    // load init value from DOM
                    ctrl.$setViewValue(elm.html());
                }
            };
        });
})(window.angular);