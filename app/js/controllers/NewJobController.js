jobsApp.controller('NewJobController',function NewJobController($scope, jobData){

    $scope.saveJob = function(job, form) {
        if (form.$valid) {
            console.log('Form valid, calling jobData-Service for saving ...');
            jobData.saveJob(job).then(
                function (result) {
                    console.log('Job saved succesfully');
                    console.log(result);
                    $location.url('/');
                },
                function (result) {
                    console.log('Job not saved');
                    console.log(result);
                }
            );
        }
    };

    $scope.cancelEdit = function(job, form) {
        $location.url('/');
    };
});