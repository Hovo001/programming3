class krak extends aliveCreature{
    constructor(x,y){
        super(x,y);
        this.directions= [];
        this.energy=6;
        this.index=16;
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
    check(a,b,c) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == a || matrix[y][x]==b || matrix[y][x] == c ) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;

    }
    bazmanal() {
        var norVandak = random(this.check(1, 2, 4));
        // console.log(norVandak, this.multiply); 
        // console.log("REGEN")
        if (norVandak) {
            if (matrix[norVandak[1]][norVandak[0]] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == norVandak[0] && grassArr[i].y == norVandak[1]) {
                        grassArr.splice(i, 1);
                    }
                }
            }else
            if (matrix[norVandak[1]][norVandak[0]] == 2) {
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == norVandak[0] && xotakerArr[i].y == norVandak[1]) {
                        xotakerArr.splice(i, 1);
                    }
                }
            }else
            if (matrix[norVandak[1]][norVandak[0]] == 4) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == norVandak[0] && gishatichArr[i].y == norVandak[1]) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }
            var norkrak = new krak(norVandak[0], norVandak[1]);
            matrix[this.y][this.x]=0;
            this.x=norVandak[0];
            this.y=norVandak[1];
            krakArr.push(norkrak);
            matrix[this.y][this.x] = 16;
        }else
        this.energy-=2;
    }
    hangel(){
        if(this.energy <= 3 ){
            matrix[this.y][this.x]=0;
                  for(var i in krakArr){
                if (krakArr[i].x == this.x && krakArr[i].y== this.y){
                    krakArr.splice(i,1);
                }
            }
        }
    }


}