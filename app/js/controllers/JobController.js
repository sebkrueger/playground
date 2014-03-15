jobsApp.controller('JobController',function JobController($scope, jobData){

    // Fill data later by database
    $scope.jobs = jobData.getJobs();

    // Vote Function
    $scope.voteUp = function(job) {
        job.votes++;
    };
});
