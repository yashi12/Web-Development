angular
    .module('registrationForm')
    .directive('checkFileSize', function () {
        return {
            link: function (scope, elem, attr, ctrl) {
                // console.log("elem",elem);
                // console.log("scope",scope);
                function bindEvent(element, type, handler) {
                    if (element.addEventListener ) {
                        element.addEventListener(type, handler, false);
                    } else {
                        element.attachEvent('on' + type, handler);
                    }
                }

                bindEvent(elem[0], 'change', function () {
                    console.log("this",this);
                    if(this.files[0].size > 1000*10){
                        alert('File size should not be more then 10 kb:' + (this.files[0].size)/(10*1000) +'KB');
                        myfile="";
                    }
                    // alert('File size:' + this.files[0].size);
                });
            }
        }
    });