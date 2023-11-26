const G = 700;

const ball = {
	x: 0,
	y: 0,
	speed: {
		x: 0,
		y: 0,
	},
	acceleration: {
		x: 10,
		y: G,
	},
	radius: 40,
	angleOfMovement: 60 * (Math.PI / 180),
	update(dt) {
		const acceleration = Math.sqrt(Math.pow(this.acceleration.x, 2) + Math.pow(this.acceleration.y, 2));
		this.speed.x += Math.cos(this.angleOfMovement) * acceleration * dt;
		this.speed.y += Math.sin(this.angleOfMovement) * acceleration * dt;

		const speed = Math.sqrt(Math.pow(this.speed.x, 2) + Math.pow(this.speed.y, 2));
		this.x += Math.cos(this.angleOfMovement) * speed * dt;
		this.y += Math.sin(this.angleOfMovement) * speed * dt;
	},
	bounce() {
		this.angleOfMovement = this.angleOfMovement + 90;
	}
}

function setup() {
	createCanvas(windowWidth , windowHeight);
}

function draw() {
	background(0);
	fill('#fff');

	ball.update(deltaTime / 1000);
	if (ball.x + 2*ball.radius > windowWidth)	{
		ball.x = windowWidth - 2*ball.radius;
		ball.bounce();
	} else if ((ball.y + 2*ball.radius > windowHeight)) {
		ball.y = windowHeight - 2*ball.radius;
		ball.bounce();
	} else if (ball.y < 0) {
		ball.y = 0;
		ball.bounce();
	} else if (ball.x < 0) {
		ball.x = 0;
		ball.bounce();
	}

	circle(ball.x, ball.y, 2*ball.radius);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}