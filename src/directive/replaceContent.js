app.directive('replaceContent', function() {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.replaceWith(element.children());
        }
    }
});