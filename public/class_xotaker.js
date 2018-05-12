class Xotaker extends aliveCreature {
    constructor(x, y, ser) {
        super(x, y);
        this.energy = 12;
        this.directions = [];
        this.index = 2;
        this.multiply = 3;

        this.ser = (ser == 0 ? "arakan" : "igakan")
        this.weathermultiply = 2;
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
        if (this.ser == "arakan") {
            var pntrelaxjik = random(this.check(2.5))
            if (pntrelaxjik) {
                var bazmanalutex = random(this.check(0))
                if (bazmanalutex && this.multiply >= this.weathermultiply) {
                    var r = (Math.round(Math.random())) / 2;
                    var norxotaker = new Xotaker(bazmanalutex[0], bazmanalutex[1],r)
                    xotakerArr.push(norxotaker);
                    matrix[norxotaker.y][norxotaker.x] = 2;
                    matrix[norxotaker.y][norxotaker.x] += r;
                    norxotaker.energy = 30;
                    this.multiply++;
                }
            }

        }
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norvandak = random(this.check(0));
        matrix[this.y][this.x] = 0;
        if (this.ser == "arakan") {
            if (norvandak) {
                this.x = norvandak[0];
                this.y = norvandak[1];
                matrix[this.y][this.x] = 2;
            }
        } else if (this.ser == "igakan") {
            if (norvandak) {
                this.x = norvandak[0];
                this.y = norvandak[1];
                matrix[this.y][this.x] = 2.5;
            }
        }

    }
    utel() {
        this.stanalNorKordinatner();
        var gtacxot = random(this.check(1))
        if (this.ser == "arakan") {
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
        } else if (this.ser == "Igakan") {
            if (gtacxot) {
                matrix[this.y][this.x] = 0;
                this.x = gtacxot[0];
                this.y = gtacxot[1];
                matrix[this.y][this.x] = 2.5;
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