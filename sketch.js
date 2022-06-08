let mirtilos;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0)

}

function draw() {

	background(0)

	if(mouseY>=height/2 && mouseX<=width/2)  
    fill(0,0,255);
	
    else if(mouseY<height/2 && mouseX<=width/2) 
    fill(255,0,0);
  	
    else if(mouseY<height/2 && mouseX>width/2) 
    fill(0,255,0); 

	else{
		 noFill();
	}

	stroke(230);
	strokeWeight(2);
	circle(width / 2, height / 2, height / 4);
}

