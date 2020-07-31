angular
    .module('registrationForm')
    .directive('compareTo', compareTo);


function compareTo() {
    return {
        require: "ngModel",
        scope:
            {
                confirmPassword: "=compareTo"
            },
        link: function (scope, element, attributes, modelVal)
        {

            modelVal.$validators.compareTo = function (val)
            {
                console.log("val",val);
                return val == scope.confirmPassword;
            };
            scope.$watch("confirmPassword", function ()
            {
                modelVal.$validate();
            });
        }
    };
}