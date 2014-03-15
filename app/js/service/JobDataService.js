jobsApp.factory('jobData', function() {
   return {
       getJobs: function() {
           return [
               {
                   title: "First Job ABC",
                   category: "Dev",
                   company: {
                       name: "Some Company",
                       url: "www.herewego.com",
                       email: "somemail@herwego.com"
                   },
                   votes: 0
               },
               {
                   title: "Second Job ABC",
                   category: "DevOps",
                   company: {
                       name: "Some Other Company",
                       url: "www.tehreis.com",
                       email: "mail@web.com"
                   },
                   votes: 0
               },
               {
                   title: "Third Job ABC",
                   category: "Dev",
                   company: {
                       name: "Some Brand New Startup",
                       url: "www.sturtup.com",
                       email: "jobs@devnull.com"
                   },
                   votes: 0
               }
           ];
       }
   }
});









