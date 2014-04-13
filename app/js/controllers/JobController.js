jobsApp.controller('JobController',function JobController($scope, jobData){

    jobData.getJobs().
    then(function(result) {
        console.log('result available');
        $scope.jobs = result;
    }, function(error) {
        console.log('error');
        console.log(error);
    });

    // Vote Function
    $scope.voteUp = function(job) {
        job.votes++;
    };
});
