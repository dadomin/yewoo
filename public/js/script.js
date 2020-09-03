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
		let src = location.href.split("//")[1].split("/")[1];

		switch(src) {
			case "company" :
				$("#header-menu > li").eq(0).addClass("active");
			break;
			case "musician" :
				$("#header-menu > li").eq(1).addClass("active");
			break;
			case "actor" :
				$("#header-menu > li").eq(2).addClass("active");
			break;
			case "entertainer" :
				$("#header-menu > li").eq(3).addClass("active");
			break;
			case "model" :
				$("#header-menu > li").eq(4).addClass("active");
			break;
			case "cheer" :
				$("#header-menu > li").eq(5).addClass("active");
			break;
			case "influencer" :
				$("#header-menu > li").eq(6).addClass("active");
			break;
			case "notice" :
				$("#header-menu > li").eq(7).addClass("active");
			break;
		}
		log(src);
	}
}

window.onload = function(){
	let app = new App();
}