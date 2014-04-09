jobsApp.factory('jobData', function($resource) {
   return {
       getJobs: function() {
           return $resource('http://localhost:8080/api/jobs').query();
       }
   }
});