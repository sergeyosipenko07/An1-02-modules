(function () {
    'use strict';

    angular.module('app')
        .directive('highlight', highlight);

    function highlight() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                let value = scope.$ctrl.day;

                if (value === attrs['highlight']) {
                    elem.css('color', 'red');
                }
            }
        };
    }
})();