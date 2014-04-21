/**
 * Created by Sebastian on 05.04.14.
 * Restinterface to read data from mongo db
 */

var express     = require("express");
var app         = express();
var mongoose    = require("mongoose");
var port        = process.env.PORT || 8100;
var database    = require("./config/mongodbconfig.json");

// Configuration of Database
var db = mongoose.connect(database.url);

var Job = mongoose.model("Job", {
    title: String,
    category: String,
    votes: Number,
    company: {
        name: String,
        url: String,
        email: String
    }
});

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

// Routes
app.get('/api/jobs', function (req, res) {
    // Allow everyone to connect playground has not much to hide here
    res.setHeader("Access-Control-Allow-Origin", "*");
    Job.find(function(err, jobs) {
        if (err) {
            res.send(err);
            return;
        }
        res.json(jobs);
    });
});

// Listen
app.listen(port);
console.log("App listing on port " + port);