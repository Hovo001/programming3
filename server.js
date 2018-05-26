console.log("working on port 3000");
var express = require('express');
var fs = require("fs")
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
global.aliveCreature = require("./public/aliveCreature.js")
global.Grass = require("./public/class_grass.js");
global.Xotaker = require("./public/class_xotaker.js");
global.xotsarqox = require("./public/class_xotsarqox.js")
global.gishatich = require("./public/class_gishatich.js");
global.krak = require("./public/class_krak.js");
global.varvacxot = require("./public/class_varvacxot");
// var matrix = [
// 	[0, 0, 1, 0, 0],
// 	[1, 2, 0, 0, 0],
// 	[0, 1, 0, 0, 0],
// 	[0, 2, 1, 0, 0],
// 	[1, 1, 0, 0, 0],
// 	[1, 1, 0, 0, 0],
// 	[1, 1, 0, 0, 0]
// ];
global.matrix = []
var n = 30;
var m = 30;
global.xotakerutel =0;
global.xotakerbazmanal =0;
global.xotbazmanal =0;

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.xotsarqoxArr = [];
global.varvacxotArr = [];
global.krakArr = [];
var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;
var xotiguyn = "#59FF00"
var weather = "amar";
var select = 0;
function weatherChange() {
	if (weather == "amar") {
		xotiguyn = "#59FF00"
		weather = "ashun";
	}
	else if (weather == "ashun") {
		xotiguyn = "#FFB200"
		weather = "dzmer";
	}
	else if (weather == "dzmer") {
		xotiguyn = "#00FFF3";
		weather = "garun";
	}
	else if (weather == "garun") {
		xotiguyn = "#00FF55";
		weather = "amar";
	}
}
matrixGen(30, 30)
setInterval(weatherChange, 2500);
for (var y = 0; y < matrix.length; y++) {
	for (var x = 0; x < matrix[y].length; x++) {
		if (matrix[y][x] == 1) {
			grassArr.push(new Grass(x, y));
		} else
			if (matrix[y][x] == 2) {
				var r = (Math.round(Math.random())) / 2
				matrix[y][x] += r;
				xotakerArr.push(new Xotaker(x, y, r));
			} else
				if (matrix[y][x] == 4) {
					var r = (Math.round(Math.random())) / 2
					matrix[y][x] += r;
					gishatichArr.push(new gishatich(x, y, r));
				} else
					if (matrix[y][x] == 8) {
						xotsarqoxArr.push(new xotsarqox(x, y))
					} else
						if (matrix[y][x] == 16) {
							krakArr.push(new krak(x, y))
						}
	}
}




function xpel() {
	console.log("SHOT")
	for (var y = 0; y < 30; y++) {
		for (var x = 0; x < 30; x++) {
			if (select >= 10 && matrix[y][x] == 1) {
				console.log(grassArr);
				for (var i in grassArr) {
					// console.log("Mtav", x,y,grassArr[i].x, grassArr[i].y);
					if (y == grassArr[i].y && x == grassArr[i].x) {
						console.log("prcccc")
						matrix[y][x] = 10;
						grassArr.splice(i, 1);
						varvacxotArr.push(new varvacxot(x, y));
					}
				}
				select = 0;
			}
			select++;

		}
	}
}
function matrixGen(x, y) {
	for (var i = 0; i < x; i++) {
		matrix[i] = [];
		for (var j = 0; j < y; j++) {
			matrix[i][j] = 0;
		}
	}
	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {
			var r = Math.floor(Math.random() * 101)
			if (r < 20) {
				matrix[i][j] = 0;
			} else if (r < 45) {
				matrix[i][j] = 1;
			} else if (r < 55) {
				matrix[i][j] = 2;
			} else if (r < 65) {
				matrix[i][j] = 4;
			} else if (r < 95) {
				matrix[i][j] = 16;
			} else {
				matrix[i][j] = 8;
			}
		}
	}
}
setInterval(main, 600)
function main() {
	
	// for (var i = 0; i < n; i++) {
	// 	for (var j = 0; j < m; j++) {
	// 		if (index1 <= (matrix[0].length / 2)) {
	// 			matrix[Math.floor(Math.random()*n)][Math.floor(Math.random()*m)] = 1;
	// 			index1++;
	// 		}
	// 	}
	// }


	// for (var i = 0; i < n; i++) {
	// 	for (var j = 0; j < m; j++) {
	// 		if (index2 <= (matrix[0].length / 2) && matrix[i][j] != 1) {
	// 			matrix[Math.floor(Math.random()*30)][Math.floor(Math.random()*30)] = 2;
	// 			index2++;
	// 		}
	// 	}
	// }
	// for (var i = 0; i < n; i++) {
	// 	for (var j = 0; j < m; j++) {
	// 		if (index3 <= (matrix[0].length / 4) && matrix[i][j] != 1 && matrix[i][j] != 2) {
	// 			matrix[Math.floor(Math.random()*30)][Math.floor(Math.random()*30)] = 4;
	// 			index3++;
	// 		}
	// 	}
	// }
	// for (var i = 0; i < n; i++) {
	// 	for (var j = 0; j < m; j++) {
	// 		if (index4 <= (matrix[0].length / 15) && matrix[i][j] != 1 && matrix[i][j] != 2 && matrix[i][j] != 4) {
	// 			matrix[Math.floor(Math.random()*30)][Math.floor(Math.random()*30)] = 8;
	// 			index4++;
	// 		}
	// 	}
	// }
	// for (var i = 0; i < n; i++) {
	// 	for (var j = 0; j < m; j++) {
	// 		if (index5 <= (matrix[0].length / 2) && matrix[i][j] != 1 && matrix[i][j] != 2 && matrix[i][j] != 4 && matrix[i][j] != 8) {
	// 			matrix[Math.floor(Math.random()*30)][Math.floor(Math.random()*30)] = 16;
	// 			index5++;
	// 		}
	// 	}
	// }


	if (weather == "amar") {
		for (var i in grassArr) {
			grassArr[i].weathermultiply = 4;
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

	io.sockets.emit("matrix sent", matrix);
	io.sockets.emit("weather control", xotiguyn);
	// console.log(matrix);

}
function stats(){
	var file="stat.json";
	var texekutyun ={
		"xotakery_kerav":xotakerutel,
		"xoty_bazmacav":xotbazmanal,
		"xotakery_bazmacav":xotakerbazmanal
	}
	var myJSON = JSON.stringify(texekutyun);
	fs.writeFileSync(file,myJSON);

}
setInterval(stats,600)



app.use(express.static("."));
app.get('/', function (req, res) {
	res.redirect('./public/index.html');
});
server.listen(3000);
io.on("connection", function (socket) {
	socket.on("i've shoted", function (data) {
		xpel();
		io.sockets.emit("catch matrix", matrix);
	})
});