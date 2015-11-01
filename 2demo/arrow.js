function car1() {
    this.name = "tesla";

    this.fun = {
    	getName: function() {
	        console.log(this.name);
	    }	
    };
}

var a = new car1();
a.fun.getName();

function car2() {
    this.name = "tesla";
    this.fun = {
    	getName: () => {
	        console.log(this.name);
	    }	
	};
}

var b = new car2();
b.fun.getName();