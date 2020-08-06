
// import {controllerApp} from "../registration.controller.js";
//
// controllerApp
//     .directive('checkFileSize', checkFileSize)

function checkFileSize() {
    let directive = {
        require: 'ngModel',
        link: link,
    }

    return directive;

    function link(scope, elem, attr, ctrl) {
        // console.log("elem",elem);
        // console.log("scope",scope);
        function bindEvent(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else {
                element.attachEvent('on' + type, handler);
            }
        }

        console.log("0", elem[0]);
        bindEvent(elem[0], 'change', function () {
            console.log("this", this);
            if (this.files[0].size > 1024*1024*10) {
                console.log(ctrl);
                ctrl= 'File size should not be more then 10 kb:' + (this.files[0].size) / (10 * 1024*1024) + 'MB';
                // ctrl.$modelValue = ctrl.$viewValue;
                // ctrl.$$rawModelValue = ctrl.$modelValue;
                console.log(ctrl);
                alert('File size should not be more then 10 kb:' + (this.files[0].size) / (10 * 1024*1024) + 'MB');
                elem.val(null);
            }
        });
    }
}

export default checkFileSize;