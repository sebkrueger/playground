playground
==========

Place to try something out ....

First app inspired by tutorials and articles around the internet

Based on:
---------
* AngularJS
* jquery
* twitter bootstrap
* node.js
* mongodb

Start the engine:
-----------------

Make sure node.js is installed on the system.
Start system console and *cd* to the subdir */app* of the project.

Type the following command to start the build in webserver:

    $ node ../scripts/web-server.js

After that you will get access via **localhost:8000** on your webbrowser of choice.

For the next step you need a mongodb instance hosted by yourself or as a service (for example: https://mongolabs.com)

Copy the file *\app\api\config\mongodbconfig.template.json* to *mongodbconfig.json* and fill out your url to mongodb instance.

Open second system console *cd* to subdir */app* and start the REST server to access the mongo DB Data (don't forget to put data in the db!)

    $ node ./api/server.js

When you get your db data in json format under URL **http://localhost:8080/app/jobs** everthing works fine.

Masonry test
------------

Under folder **/masonry** resist a small testpage of masonry first step not connect with Angular app.


Crafty test
------------

Under folder **/jsgame** resist a small javascript game test based on crafty js lib.

Nodejs Part
-----------

Under subfolder **/nodejs** resist some scripts with javascript codeexamples