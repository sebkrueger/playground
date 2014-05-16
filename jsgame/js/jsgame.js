/**
 * Created by Sebastian on 16.05.14.
 */

function initCrafty() {
    // Init canvas and paint background
    Crafty.init(800,450);
    Crafty.background('rgb(30,30,30)');

    // Add a new element / Entity
    var figure = Crafty.e();

    // give it shape
    figure.addComponent("2D, Canvas, Color");
    figure.color("red");
    figure.attr({w:100, h:20});
}