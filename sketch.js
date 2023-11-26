const G = 700;

const ball = {
	x: 0,
	y: 0,
	speed: {
		x: 0,
		y: 0,
	},
	acceleration: {
		x: 150,
		y: G,
	},
	radius: 40,
	update(dt) {
		this.speed.x += this.acceleration.x * dt;
		this.speed.y += this.acceleration.y * dt;

		this.x += this.speed.x * dt;
		this.y += this.speed.y * dt;
	},
	bounce() {
		this.speed.x = this.speed.x;
		this.speed.y = -this.speed.y;
	}
}

function setup() {
	createCanvas(windowWidth , windowHeight);
}

function draw() {
	background(0);
	fill('#fff');

	ball.update(deltaTime / 1000);
	if (ball.y + 2*ball.radius > windowHeight) {
		ball.bounce();
	}

	circle(ball.x, ball.y, 2*ball.radius);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}