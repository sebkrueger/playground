/**
 * Created by Sebastian on 16.05.14.
 */

function initCrafty() {
    // Init canvas and paint background
    var canvas_width = 1000;
    var canvas_height = 500;
    var bar_width = 100;
    var bar_height = 20;


    Crafty.init(canvas_width, canvas_height);
    Crafty.background('rgb(30,30,30)');

    // add a bar as user steering element
    var bar = Crafty.e();

    // give it shape
    bar.addComponent("2D, Canvas, Color, Red_Bar, LeftRightControl, Collision");
    bar.color("red");
    bar.attr({w:bar_width, h:bar_height});
    bar.y = canvas_height-bar_height-30;
    bar.x = canvas_width/2;

    // Stop the bar at the wall
    // use of fixed value here and below is bad, try to avoid
    bar.onHit("Wall_Left", function() {
        this.x -= this._moveX * 132;
    }).onHit("Wall_Right", function() {
        this.x -= this._moveX * 132;
    });

    // Audiofile for ball hit
    Crafty.audio.add({
        ball: ["sounds/ball.wav",
               "sounds/ball.mp3",
               "sounds.ogg"]
    });

    // add the playball
    var ball = Crafty.e();
    ball.addComponent("2D, Canvas, Color, BallMove, Collision");
    ball.color("red");
    ball.attr({w:15, h:15});
    ball.x = canvas_width/2;
    ball.y = canvas_height/2;

    // Hit detection ball with wall
    ball.onHit("Wall_Top", function() {
        this._moveY = -1*this._moveY;
        Crafty.audio.play("ball");
    }).onHit("Wall_Bottom", function() {
        this._moveY = -1*this._moveY;
        Crafty.audio.play("ball");
    }).onHit("Wall_Left", function() {
        this._moveX = -1*this._moveX;
        Crafty.audio.play("ball");
    }).onHit("Wall_Right", function() {
        this._moveX = -1*this._moveX;
        Crafty.audio.play("ball");
    }).onHit("Red_Bar", function() {
        // now did't work with left and right bar end - funny effect ;)
        this._moveY = -1*this._moveY;
        Crafty.audio.play("ball");
    });

    // draw wall
    var wallthickness = 10;

    var wall = Crafty.e();
    wall.addComponent("2D, Canvas, Wall_Top, Color");
    wall.color("green");
    wall.attr({w:canvas_width, h:wallthickness});
    wall.x = 0;
    wall.y = 0;

    var wall = Crafty.e();
    wall.addComponent("2D, Canvas, Wall_Bottom, Color");
    wall.color("green");
    wall.attr({w:canvas_width, h:wallthickness});
    wall.x = 0;
    wall.y = canvas_height-wallthickness;

    var wall = Crafty.e();
    wall.addComponent("2D, Canvas, Wall_Left, Color");
    wall.color("green");
    wall.attr({w:wallthickness, h:canvas_height-2*wallthickness});
    wall.x = 0;
    wall.y = 0+wallthickness;

    var wall = Crafty.e();
    wall.addComponent("2D, Canvas, Wall_Right, Color");
    wall.color("green");
    wall.attr({w:wallthickness, h:canvas_height-2*wallthickness});
    wall.x = canvas_width-wallthickness;
    wall.y = 0+wallthickness;
}

Crafty.c("BallMove",
    {
        // Make the ball move
        init: function() {
            this._moveX = 2;
            this._moveY = 2;

            this.bind("EnterFrame", function() {
                if(this._moveX || this._moveY) {
                    // We have to move our object
                    this.x += this._moveX;
                    this.y += this._moveY;
                    this.trigger('Moved', {x: this.x, y: this.y});
                }
            });
        }
    }
);

Crafty.c("LeftRightControl",
    {
        // key list with keys we want to be active
        _keys: {
            RIGHT_ARROW: 0.2,
            LEFT_ARROW: -0.2
        },

        init: function() {
            // init intern position pointer
            this._moveX = 0;

            for(var k in this._keys) {
                var keyCode = Crafty.keys[k] || k;
                this._keys[keyCode] = this._keys[k];
            }

            this.bind("KeyDown", function(e) {
                // Bind KeyDown
                if(this._keys[e.key]) {
                    // If Key in Array pressed move intern position pointer
                    this._moveX += this._keys[e.key];
                }
            });

            this.bind("KeyUp", function(e) {
                if(this._keys[e.key]) {
                    // if key not pressed any more, reset intern position counter
                    this._moveX -= this._keys[e.key];
                }
            });

            this.bind("EnterFrame", function() {
                if(this._moveX) {
                    // We have to move our object
                    this.x += this._moveX * 132;
                    this.trigger('Moved', {x: this.x});
                }
            });
        }
    }
);