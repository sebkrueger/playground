var jobsApp = angular.module('jobsApp', ['ngResource', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/newJob', {
                templateUrl: '/templates/NewJob.html',
                controller: 'NewJobController'
            })
                .when('editJob/:jobId', {
                    templateUrl: '/templates/NewJob.html',
                    controller: 'NewJobController'
                })
                .when('/', {
                    templateUrl: '/templates/Jobs.html',
                    controller: 'JobController'
                })
                .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
    });