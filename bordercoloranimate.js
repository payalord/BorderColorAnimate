/*!-----------------------------------------------------
 * BorderColorAnimate v1.0.1
 * (c) 2017 by Azat Ahmedov (payalord@gmail.com)
 * MIT License
 * https://github.com/payalord/BorderColorAnimate
 * hexToRgb by Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5624139#5624139
 * requestAnimFrame by Paul Irish: https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
 * and little bit extended by me
 *------------------------------------------------------*/
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 20);
    };
})();
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
jQuery.fn.BorderColorAnimate = function(d, s, f) {
    var s = s == 'fast' ? 200 : s == 'slow' ? 600 : typeof s == 'undefined' ? 400 : s;
    var t = jQuery(this);
    var c = t.css('border-color');
    var cRGB = dRGB = step = [];
    cRGB = c.match(/\d+/g);
    dRGB = hexToRgb(d);
    for (var i = 0; i < 3; i++) {
        cRGB[i] = +cRGB[i];
        dRGB[i] = +dRGB[i];
        step[i] = (dRGB[i] - cRGB[i]) / s;
    }

    var start = Date.now();

    function loop() {
        var now = Date.now() - start;
        if (now > s) now = s;
        var color = 'rgb(' + Math.ceil(cRGB[0] + step[0] * now) + ',' + Math.ceil(cRGB[1] + step[1] * now) + ',' + Math.ceil(cRGB[2] + step[2] * now) + ')';
        t.css('border-color', color);
        if (now < s) {
            requestAnimFrame(loop);
        } else {
            if (typeof f == 'function') { t.f = f; t.f() }
        }
    }
    loop();
    return t;
}