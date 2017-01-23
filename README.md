# BorderColorAnimate
jQuery plugin to animate border color
# Syntax
```javascript
.BorderColorAnimate( hexcolor [, duration ] ) //Returns jQuery
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
$('#ID').BorderColorAnimate('#ff1a4b');
```

Duration same as in jQuery:  
> Given in milliseconds; higher values indicate slower animations, not faster ones. The default duration is 400 milliseconds. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively.

```javascript
$('#ID').BorderColorAnimate('#ff1a4b', 1000);
```

# License
[MIT License](LICENSE)
