function setup() {
	createCanvas(600, 600);
}

var value = 25;

function draw() {
	
	background(244, 248, 252);
	
  	line(mouseX, 0, mouseX, 600);
	
	fill(value)
	
    ellipse(mouseX, mouseY, 30, 30);
	
		textSize(32);
		fill(0, 102, 153);
		text("word", 10, 30);

}

function mouseClicked() {
	
	if(value == 0){
	
		value = 255;
	}else{
		value = 0;
	}
}