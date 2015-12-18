(function() {
    'use strict';

    angular.module('uiRouterPlayground', [
        'ui.router'
    ]);

    angular.module('uiRouterPlayground')
        .config(config)
        .directive('testDirective', testDirective)
        .controller('MainController', MainController);

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/an-id');

        $stateProvider
            .state('main', {
                url: '/:id',
                templateUrl: 'main-view.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
    }

    function testDirective() {
        return {
            controller: TestDirectiveController,
            controllerAs: 'vm',
            template: '{{vm.hello}}!'
        }
    }

    function TestDirectiveController() {
        this.hello = 'Hello Zach';
    }

    function MainController($stateParams) {
        this.id = $stateParams.id;
    }


})();
