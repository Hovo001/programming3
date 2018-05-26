var side = 15;
var xotiguyn = "green";
var matrix;
var socket = io();
var lightning;
function setup() {
  lightning = document.getElementById("lightning");
  createCanvas(450, 450)
  background("#acacac");
  socket.on("catch matrix", function (data) {
    console.log("matrix sent")
    matrix = data;
  })
  socket.on("weather control", function (data) {
    xotiguyn = data;
    console.log(xotiguyn);
  })
  socket.on("matrix sent", function (data) {
    matrix = data;
  });
  lightning.onclick = function () {
    var data = true;
    socket.emit("i've shoted", data)
  }
}


socket.on('matrix sent', function (matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix.length; x++) {
      if (matrix[y][x] == 1) {
        fill(xotiguyn);

      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 2.5) {
        fill("FFCB55");
      }
      else if (matrix[y][x] == 4) {
        fill("red")
      } else if (matrix[y][x] == 4.5) {
        fill("black");
      }
      else if (matrix[y][x] == 8) {
        fill("#b511de");
      } else if (matrix[y][x] == 10) {
        fill("#001DFF");
      } else if (matrix[y][x] == 16) {
        fill("#f18d0e");
      } else
        fill("#acacac")
      rect(side * x, side * y, side, side);
    }
  }
}) 
