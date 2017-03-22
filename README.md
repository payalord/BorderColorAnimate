# BorderColorAnimate
jQuery plugin to animate border color.
# Syntax
```javascript
$(<selector>).BorderColorAnimate( hexcolor [, duration ] [, complete ] ) //Returns jQuery object of <selector>
```

# Usage
Include the plugin after your jQuery:
```html
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="bordercoloranimate.js"></script>
</head>
```

Animate:
```javascript
$(<selector>).BorderColorAnimate('#ff1a4b');
```

Duration same as in jQuery:  
> Given in milliseconds; higher values indicate slower animations, not faster ones. The default duration is 400 milliseconds. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.

```javascript
$(<selector>).BorderColorAnimate('#ff1a4b', 1000);
```

Custom complete function can be provided at the end, which will be executed after animation complete:
* `this` refers to `<selector>` element inside custom function
```javascript
$(<selector>).BorderColorAnimate('#ff1a4b', 1000, function(){$(this).BorderColorAnimate('#66ff1a');});
```

# License
[MIT License](LICENSE)
