class Grass extends aliveCreature{
    constructor(x, y) {
        super(x,y);
        this.guyn = 'green'
        this.multiply = 0;
        this.weathermultiply = 8;
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
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.check(0));
        // console.log(norVandak, this.multiply);
        if (this.multiply >=this.weathermultiply && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}