jobsApp.factory('jobData', function($resource, $q) {
   return {
       getJobs: function() {
           var deferred = $q.defer();
           $resource('http://localhost:8099/api/jobs').query(
               function (jobs) {
                   deferred.resolve(jobs);
               },
               function (response) {
                   deferred.reject(response);
               }
           );
           return deferred.promise;
       }
   }
});