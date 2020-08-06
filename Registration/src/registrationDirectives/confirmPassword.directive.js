
function compareTo() {
    return {
        require: "ngModel",
        scope:
            {
                compareTo: "="
            },
        link: function (scope, element, attributes, ctrl)
        {

            ctrl.$validators.compareTo = function (ctrl)
            {
                console.log("ctrl",ctrl);
                console.log("ori",scope.compareTo);
                return ctrl == scope.compareTo;
            };
            scope.$watch('compareTo', function ()
            {
                ctrl.$validate();
            });
        }
    };
}
export default compareTo;