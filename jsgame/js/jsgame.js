/**
 * Created by Sebastian on 16.05.14.
 */

function initCrafty() {
    // Init canvas and paint background
    var canvas_width = 1000;
    var canvas_height = 500;
    var figure_width = 100;
    var figure_height = 20;


    Crafty.init(canvas_width, canvas_height);
    Crafty.background('rgb(30,30,30)');

    // Add a new element / Entity
    var figure = Crafty.e();

    // give it shape
    figure.addComponent("2D, Canvas, Color, LeftRightControl");
    figure.color("red");
    figure.attr({w:figure_width, h:figure_height});
}

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
                // Bind KeyDown
                if(this._moveX) {
                    // We have to move our object
                    this.x += this._moveX * 32;
                    this.trigger('Moved', {x: this.x, y: 0});
                }
            });
        }
    }
);