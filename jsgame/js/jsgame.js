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
    bar.addComponent("2D, Canvas, Color, LeftRightControl");
    bar.color("red");
    bar.attr({w:bar_width, h:bar_height});
    bar.y = canvas_height-bar_height-30;

    // add the playball
    var ball = Crafty.e();
    ball.addComponent("2D, Canvas, Color, BallMove");
    ball.color("red");
    ball.attr({w:15, h:15});
    ball.x = canvas_width/2;
    ball.y = canvas_height/2;
}

Crafty.c("BallMove",
    {
        // Make the ball move
        init: function() {
            this._moveX = 1;
            this._moveY = 1;

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