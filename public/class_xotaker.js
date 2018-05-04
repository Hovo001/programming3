class Xotaker extends aliveCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 12;
        this.directions = [];
        this.index = 2;
        this.multiply = 3;
        this.weathermultiply = 4;
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
        return super.check(ch);

    }

    bazmanal() {
        var bazmanalutex = random(this.check(1));
        if (this.energy >= 13 && bazmanalutex && this.multiply>=this.weathermultiply) {
            var norxotaker = new Xotaker(bazmanalutex[0], bazmanalutex[1])
            xotakerArr.push(norxotaker);
            matrix[norxotaker.y][norxotaker.x] = 2;
            norxotaker.energy = 8;
            this.multiply++;
        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norvandak = random(this.check(0));
        matrix[this.y][this.x] = 0;
        if (norvandak) {
            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[this.y][this.x] = 2;
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var gtacxot = random(this.check(1))
        if (gtacxot) {
            matrix[this.y][this.x] = 0;
            this.x = gtacxot[0];
            this.y = gtacxot[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            for (var j in grassArr) {
                if (grassArr[j].x == this.x && grassArr[j].y == this.y) {
                    grassArr.splice(j, 1);
                }
            }
        } else {
            this.energy--;
        }
    }
    mahanal() {
        
        matrix[this.y][this.x] = 0;
        for (var j in xotakerArr) {
            if (xotakerArr[j].x == this.x && xotakerArr[j].y == this.y) {
                xotakerArr.splice(j, 1);
            }
        }
    }
}