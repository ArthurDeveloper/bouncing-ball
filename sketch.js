const G = 150;

const ball = {
	x: 0,
	y: 0,
	speed: {
		x: 0,
		y: 0,
	},
	acceleration: {
		x: 0,
		y: 0,
	},
	radius: 40,
	update(dt) {
		this.acceleration.y += G * dt;
		this.speed.x += this.acceleration.x * dt;
		this.speed.y += this.acceleration.y * dt;

		this.x += this.speed.x * dt;
		this.y += this.speed.y * dt;
	},
}

function setup() {
	createCanvas(windowWidth , windowHeight);
}

function draw() {
	background(0);
	fill('#fff');
	ball.update(deltaTime / 1000);
	circle(ball.x, ball.y, 2*ball.radius);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}