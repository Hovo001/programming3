class varvacxot{    
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
     varvel(){
        for(var i in varvacxotArr){
            matrix[varvacxotArr[i].y][varvacxotArr[i].x]=16;
            krakArr.push(new krak(varvacxotArr[i].x,varvacxotArr[i].y))
            varvacxotArr.splice(i,1)
           console.log(krakArr)
        }
    }
}