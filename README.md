# Tween.js
a simple light javascript tween animation class written by me makes your animation life with javascript much easier.

## usage:
```javascript
var tween = new Tween(0/*start value*/, 50/*end value*/)
// by default the values are 0, 1
tween.onComplete = function() {
	console.log("animation completed!!");
}
console.log(tween.completed) // >>> false
// to check if the animation has been completed or not
```
### tween.animate
 `tween.animate` function takes two parameters
 1.  the first parameter is a function that is getting called each single tick
 2. the second parameter is time in millis which represents the life time of the animation
 ```javascript
 tween.animate(function(value) {
	 console.log(value);
}, 2000);
```
the `value` parameter is the current progress of the animation.

### tween.reverse

`tween.reverse` function reverses the animation.
```javascript
tween.reverse(function(value) {
	.....
}, 1000)
```
### tween.reset()
`tween.reset` function resets the animation to make it usable again
