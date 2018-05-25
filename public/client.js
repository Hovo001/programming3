function setup(){
  var side = 15;
  var fs= require("fs")
  var socket= io.connect('http://localhost:3000');
  var lightning = document.getElementById("lightning")
  createCanvas(450, 450)
  background("#acacac");    
}
console.log("worked");
function draw(){
  function main(){
    lightning.onclick=  function() {
      var data=true;
      socket.emit("i've shoted",data)
    }
    
      socket.on("catch matrix",gcel)
      function gcel(matrix){
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
            } else if (matrix[y][x] == 10){
              fill("#001DFF");
            }else if (matrix[y][x] == 16) {
              fill("#f18d0e");
            } else
              fill("#acacac")
            rect(side * x, side * y, side, side);
          }
        }
      }
      socket.on("matrix sent",gcel)
  }
}