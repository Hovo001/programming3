class xotsarqox extends aliveCreature{
    constructor (x,y){
      super(x,y);
        this.directions = [];
        this.energy=5;
        this.energy1=7
        this.index=8;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    check(a,b) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == a || matrix[y][x]==b) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;

    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norvandak = randomelement(this.check(0,1));
        matrix[this.y][this.x] = 0;
        if (norvandak) {
            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[this.y][this.x] = 8;
        }
    }
    stexcelxot() {
       var xotistexcelutex=randomelement(this.check(0));
       if(xotistexcelutex){
           var norxotik=new Grass(xotistexcelutex[0],xotistexcelutex[1]);
           grassArr.push(norxotik);
           matrix[xotistexcelutex[1]][xotistexcelutex[0]]=1;
           this.energy++;
           this.energy1++;
       }
    }
    stexcelxotaker(){
        if(this.energy >=20){
            var norxotaker=randomelement(this.check(0));
            if(norxotaker){
                var xotutox= new Xotaker(norxotaker[0],norxotaker[1]);
                xotakerArr.push(xotutox);
                matrix[norxotaker[1]][norxotaker[0]]=2;
                this.energy =5;
            }
        }
    }
    stexcelgishatich(){
        if(this.energy1>=30){
            var norgishatich=randomelement(this.check(0));
            if(norgishatich){
                var gishatich1= new gishatich(norgishatich[0],norgishatich[1])
                gishatichArr.push(gishatich1);
                matrix[norgishatich[1]][norgishatich[0]]=4;
                this.energy1 = 7;
            }
        }
    }
    hangcnelkrak(){
        this.stanalNorKordinatner();
        var gtnelkrak=randomelement(this.check(16));
        if(gtnelkrak){
            this.energy+=2;
            this.energy1+=5
            for(var i in krakArr){
                if(this.x==krakArr[i].x && this.y==krakArr[i].y){
                    krakArr.splice(i,1);
                }
            }
        }
    }
}