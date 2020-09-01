Number.prototype.timeFormat = function() {
	let min = ~~(this / 60);
	let sec = ~~(this % 60);

	return `${String(min).padStart(2, 0)}:${String(sec).padStart(2, 0)}`;
}

function log(msg) {
	console.log(msg);
}

class App {
	constructor(){
	}
}

window.onload = function(){
	let app = new App();
}