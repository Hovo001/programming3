aliveCreature = require("./alivecreature.js")
      function randomelement(items)
{
return items[Math.floor(Math.random()*items.length)];   
}
module.exports=class varvacxot{    
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
       randomelement(items)
{
return items[Math.floor(Math.random()*items.length)];   
}
     varvel(){
        for(var i in varvacxotArr){
            matrix[varvacxotArr[i].y][varvacxotArr[i].x]=16;
            krakArr.push(new krak(varvacxotArr[i].x,varvacxotArr[i].y));
            varvacxotArr.splice(i,1);
        //    console.log("varvel");
        }
    }
}