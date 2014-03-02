jobsApp.controller('JobController',function JobController($scope){

    // Fill data later by database
    $scope.jobs = [
        {
            title: "First Job ABC",
            category: "Dev",
            company: {
                name: "Some Company",
                url: "www.herewego.com",
                email: "somemail@herwego.com"
            }
        },
        {
            title: "Second Job ABC",
            category: "DevOps",
            company: {
                name: "Some Other Company",
                url: "www.tehreis.com",
                email: "mail@web.com"
            }
        },
        {
            title: "Third Job ABC",
            category: "Dev",
            company: {
                name: "Some Brand New Startup",
                url: "www.sturtup.com",
                email: "jobs@devnull.com"
            }
        }
    ];
});
