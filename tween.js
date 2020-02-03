
class Tween {
    
  constructor(from=0, to=1) {

    this.from = from;
    this.to = to;
    this.progress = from;
    this.onComplete = function() {}
    this.completed = false;
  }


    animate(func, duration) {
    
    if(10 > duration) {
    	throw "duration cannot be less than 10 millis";
    }

    var rateOfChange = ((this.to - this.from) * 10) / duration;
    
    var interval = setInterval((function(self) {

    	return function() {

    	if(self.to >= self.from) {
    		if(self.progress > self.to) {
	            clearInterval(interval);
	            return;
        	}
    	}else {
    		if(self.progress < self.to) {
	            clearInterval(interval);
	            return;
        	}
    	}
        
        func(self.progress);
        self.progress += rateOfChange;
    }
    })(this), 10);

    setTimeout((function(self) {
    	return function() {
    		self.onComplete();
    		self.completed = true;
    	}
    })(this), duration);
    
  }

  reverse(func, duration) {
  	var tween = new Tween(this.to, this.from);
  	tween.animate(func, duration);

  }

  reset() {
  	this.progress = this.from;
  	this.completed = false;
  }
}


