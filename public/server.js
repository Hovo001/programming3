var side = 15;
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
// var matrix = [
// 	[0, 0, 1, 0, 0],
// 	[1, 2, 0, 0, 0],
// 	[0, 1, 0, 0, 0],
// 	[0, 2, 1, 0, 0],
// 	[1, 1, 0, 0, 0],
// 	[1, 1, 0, 0, 0],
// 	[1, 1, 0, 0, 0]
// ];
var matrix = []
var n = 30;
var m = 30;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var xotsarqoxArr = [];
var varvacxotArr = [];
var krakArr = [];
var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;
var xotiguyn = "#59FF00"
var weather = "amar";
var xpel;
var select = 0;
function weatherChange() {
	if (weather == "amar") {
		weather = "ashun";
	}
	else if (weather == "ashun") {
		weather = "dzmer";
	}
	else if (weather == "dzmer") {
		weather = "garun";
	}
	else if (weather == "garun") {
		weather = "amar";
	}
}
setInterval(weatherChange, 2500);
// createCanvas(side * matrix[0].length, matrix.length * side)
// frameRate(2);
// background("#acacac");
// for (var y = 0; y < matrix.length; y++) {
// 	for (var x = 0; x < matrix[y].length; x++) {
// 		if (matrix[y][x] == 1) {
// 			grassArr.push(new Grass(x, y));
// 		} else
// 			if (matrix[y][x] == 2) {
// 				var r = (Math.round(Math.random())) / 2
// 				matrix[y][x] += r;
// 				xotakerArr.push(new Xotaker(x, y, r));
// 			} else
// 				if (matrix[y][x] == 4) {
// 					var r = (Math.round(Math.random())) / 2
// 					matrix[y][x] += r;
// 					gishatichArr.push(new gishatich(x, y, r));
// 				} else
// 					if (matrix[y][x] == 8) {
// 						xotsarqoxArr.push(new xotsarqox(x, y))
// 					} else
// 						if (matrix[y][x] == 16) {
// 							krakArr.push(new krak(x, y))
// 						}
// 	}
// }



// for (var y = 0; y < matrix.length; y++) {
// 	for (var x = 0; x < matrix.length; x++) {
// 		if (matrix[y][x] == 1) {
// 			fill(xotiguyn);

// 		} else if (matrix[y][x] == 2) {
// 			fill("yellow");
// 		} else if (matrix[y][x] == 2.5) {
// 			fill("FFCB55");
// 		}
// 		else if (matrix[y][x] == 4) {
// 			fill("red")
// 		} else if (matrix[y][x] == 4.5) {
// 			fill("black");
// 		}   															//piti gna client
// 		else if (matrix[y][x] == 8) {
// 			fill("#b511de");
// 		} else if (matrix[y][x] == 10){
// 			fill("#001DFF");
// 		}else if (matrix[y][x] == 16) {
// 			fill("#f18d0e");
// 		} else
// 			fill("#acacac")
// 		rect(side * x, side * y, side, side);
// 	}
// }
function setInterval(main,100)
	function main() {
		xpel = document.getElementById("lightning");
		for (var i = 0; i < n; i++) {
			matrix[i] = [];
			for (var j = 0; j < m; j++) {
				matrix[i][j] = 0;
			}
		}
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				if (index1 <= (matrix[0].length / 2)) {
					matrix[floor(math.random(n))][Math.floor(Math.random(m))] = 1;
					index1++;
				}
			}
		}


		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				if (index2 <= (matrix[0].length / 2) && matrix[i][j] != 1) {
					matrix[Math.floor(Math.random(n))][Math.floor(Math.random(m))] = 2;
					index2++;
				}
			}
		}
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				if (index3 <= (matrix[0].length / 4) && matrix[i][j] != 1 && matrix[i][j] != 2) {
					matrix[Math.floor(Math.random(n))][Math.floor(Math.random(m))] = 4;
					index3++;
				}
			}
		}
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				if (index4 <= (matrix[0].length / 15) && matrix[i][j] != 1 && matrix[i][j] != 2 && matrix[i][j] != 4) {
					matrix[Math.floor(Math.random(n))][Math.floor(Math.random(m))] = 8;
					index4++;
				}
			}
		}
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				if (index5 <= (matrix[0].length / 2) && matrix[i][j] != 1 && matrix[i][j] != 2 && matrix[i][j] != 4 && matrix[i][j] != 8) {
					matrix[Math.floor(Math.random(n))][Math.floor(Math.random(m))] = 16;
					index5++;
				}
			}
		}
		xpel.onclick = function () {
			for (var y = 0; y < n; y++) {
				for (var x = 0; x < m; x++) {


					if (select >= 24 && matrix[y][x] == 1) {
						for (var i in grassArr) {
							if (y == grassArr[i].y && x == grassArr[i].x) {
								matrix[y][x] = 10;
								// varvacxotArr.push(grassArr[i]);
								grassArr.splice(i, 1);
								varvacxotArr.push(new varvacxot(x, y))
							}
						}
						select = 0;
					}
					select++;

				}
			}
		}

		if (weather == "amar") {
			for (var i in grassArr) {
				grassArr[i].weathermultiply = 4;
				xotiguyn = "#59FF00"
			}
			for (var i in xotakerArr) {
				xotakerArr[i].weathermultiply = 5;
			}
			for (var i in gishatichArr) {
				gishatichArr[i].weathermultiply = 4;
			}
			for (var i in krakArr) {
				krakArr[i].weathermultiply = 4;
			}
		}
		if (weather == "ashun") {
			for (var i in grassArr) {
				grassArr[i].weathermultiply = 10;
				xotiguyn = "#FFB200"
			}
			for (var i in xotakerArr) {
				xotakerArr[i].weathermultiply = 7;
			}
			for (var i in gishatichArr) {
				gishatichArr[i].weathermultiply = 8;
			}
			for (var i in krakArr) {
				krakArr[i].weathermultiply = 8;
			}
		}
		if (weather == "dzmer") {
			for (var i in grassArr) {
				grassArr[i].weathermultiply = 16;
				xotiguyn = "#00FFF3";
			}
			for (var i in xotakerArr) {
				xotakerArr[i].weathermultiply = 8;
			}
			for (var i in gishatichArr) {
				gishatichArr[i].weathermultiply = 2;
			}
			for (var i in krakArr) {
				krakArr[i].weathermultiply = 12;
			}
		}
		if (weather == "garun") {
			for (var i in grassArr) {
				grassArr[i].weathermultiply = 12;
				xotiguyn = "#00FF55";
			}
			for (var i in xotakerArr) {
				xotakerArr[i].weathermultiply = 6;
			}
			for (var i in gishatichArr) {
				gishatichArr[i].weathermultiply = 4;
			}
			for (var i in krakArr) {
				krakArr[i].weathermultiply = 8;
			}
		}
		for (var i in grassArr) {
			grassArr[i].bazmanal();
		}
		for (var i in xotakerArr) {
			xotakerArr[i].sharjvel();
			xotakerArr[i].utel();
			xotakerArr[i].bazmanal();
			if (xotakerArr[i].energy <= 4) {
				xotakerArr[i].mahanal();
			}

		}
		for (var i in gishatichArr) {
			gishatichArr[i].sharjvel();
			gishatichArr[i].utel();
			gishatichArr[i].bazmanal();
			if (gishatichArr[i].energy <= -20) {
				gishatichArr[i].mahanal();
			}

		}
		for (var i in xotsarqoxArr) {
			xotsarqoxArr[i].sharjvel();
			xotsarqoxArr[i].stexcelxot();
			xotsarqoxArr[i].stexcelxotaker();
			xotsarqoxArr[i].hangcnelkrak();
			xotsarqoxArr[i].stexcelgishatich();
		}
		for (var i in krakArr) {
			krakArr[i].bazmanal();
			krakArr[i].hangel();
		}
		for (var i in varvacxotArr) {
			varvacxotArr[i].varvel();
		}
	}
	app.use(express.static("."));
	app.get('/', function (req, res) {
		res.redirect('index.html');
	});
	server.listen(3000);




