(function()
{
    'use strict';

    angular
        .module('Controllers')
        .controller('DemoCheckboxController', DemoCheckboxController);

    /* @ngInject */
    function DemoCheckboxController()
    {
        var vm = this;

        vm.checkboxes = {
            basic:
            {
                checked: true,
                unchecked: false
            },
            states:
            {
                disabled: false
            },
            colors:
            {
                blue: true,
                green: true,
                orange: true,
                red: true
            },
            regular:
            {
                basic: true,
                advanced: false
            }
        };
    }
})();