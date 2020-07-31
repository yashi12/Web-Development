angular
    .module('registrationForm')
    .directive('enrollNumber', enrollNumber);

enrollNumber.$inject = ['$q', '$timeout'];

function enrollNumber($q, $timeout) {
    console.log("enroll dir");
    let directive = {
        require: 'ngModel',
        link: link,
    };
    return directive;

    function link(scope, elm, attrs, ctrl) {

        let enrollNumberList = [18803033, 18803034, 18803035];

        ctrl.$asyncValidators.enrollNumber = function (modelValue, viewValue) {
            let def = $q.defer();

            if (ctrl.$isEmpty(modelValue)) {
                return $q.resolve();
            }
            $timeout(function () {
                if (enrollNumberList.indexOf(modelValue) === -1) {
                    def.resolve();
                } else {
                    def.reject();
                }
            }, 2000);
            return def.promise;
        }

    }
}