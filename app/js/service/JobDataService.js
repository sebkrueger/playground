jobsApp.factory('jobData', function($resource) {
   return {
       getJobs: function() {
           var test =  $resource('http://localhost:8099/api/jobs').query();
           console.log(test);
           return test;
       }
   }
});