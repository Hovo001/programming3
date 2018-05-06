class gishatich extends aliveCreature{
    constructor(x, y,ser) {
        super(x,y);
        this.energy = 12;
        this.directions = [];
        this.index = 4;
        this.multiply =0;
        this.ser =(ser == 0 ? "arakan": "igakan" ) 
        this.weathermultiply =4;
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
    check(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;

    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norvandak = random(this.check(0));
        matrix[this.y][this.x] = 0;
        if (norvandak) {
            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[this.y][this.x] = 4;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var gtackendani = random(this.check(2))
        if (gtackendani) {
            matrix[this.y][this.x] = 0;
            this.x = gtackendani[0];
            this.y = gtackendani[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
        } else {
            this.energy--;
        }
        for (var j in xotakerArr) {
            if (xotakerArr[j].x == this.x && xotakerArr[j].y == this.y) {
                xotakerArr.splice(j, 1);
            }
        }
    }

    bazmanal() {
          if (this.ser == "arakan") {
            var pntrelaxjik = random(this.check(4.5))
            if (pntrelaxjik) {
                var bazmanalutex = random(this.check(0))
                if (bazmanalutex && this.multiply >= this.weathermultiply) {
                    var r = (Math.round(Math.random())) / 2
                    matrix[y][x] += r;
                    var norgishatich = new gishatich(bazmanalutex[0], bazmanalutex[1])
                    gishatichArr.push(norgishatich);
                    matrix[norgishatich.y][norgishatich.x] = 4;
                    matrix[norgishatich.y][norgishatich.x] += r;
                    this.multiply++;
                }
            }

        }
        
    }
    mahanal() {
        for (var i in gishatichArr) {
            if(gishatichArr[i].x==this.x && gishatichArr[i].y==this.y){
                gishatichArr.splice(i, 1)
                matrix[this.y][this.x] = 0;
                }
        }
    }
}