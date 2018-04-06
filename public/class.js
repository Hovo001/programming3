// class Arj {
//     constructor(morti,axorjak,hasak,kshir,x,y){
//         this.votqeriQanak = 4;
//         this.morti = morti;
//         this.axorjak = axorjak;
//         this.hasak = hasak;
//         this.kshir = kshir;
//         this.x=x;
//         this.y=y;
//     }
//     utel(c) {

//             this.axorjak+=c;
//             if(this.axorjak >=20){
//                     console.log("arjy kusht e");
//                     this.axorjak=20;
//             } 


//     }
//     qnel() {

//     }
//     qaylel() {
//      this.x++;
//      this.y++;
//     }
// }
// var arj1= new Arj("brown",0,250,1000,10,10);
// arj1.qaylel();
// arj1.qaylel();
// arj1.qaylel();
// arj1.utel(26);
// console.log(arj1);
// var arj2= new Arj("brown",0,130,30020,20,20);
// console.log(arj2);
class Grass {
    constructor(x, y) {
        this.guyn = 'green'
        this.x = x;
        this.y = y;
        this.multiply = 0;
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
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.check(0));
        // console.log(norVandak, this.multiply);
        if (this.multiply >= 2 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 12;
        this.directions = [];
        this.index = 2;

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

    bazmanal() {
        var bazmanalutex = random(this.check(1));
        if (this.energy >= 13 && bazmanalutex) {
            var norxotaker = new Xotaker(bazmanalutex[0], bazmanalutex[1])
            xotakerArr.push(norxotaker);
            matrix[norxotaker.y][norxotaker.x] = 2;
            norxotaker.energy = 8;

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
class gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 12;
        this.directions = [];
        this.index = 4;
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
        var bazmanalutex1 = random(this.check(1));
        var bazmanalutex2 = random(this.check(2));
        
if(bazmanalutex2){
    var norgishatich = new gishatich(bazmanalutex2[0], bazmanalutex2[1]);
        gishatichArr.push(norgishatich);
        matrix[norgishatich.y][norgishatich.x] = 4;
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
class xotsarqox {
    constructor (x,y){
        this.x=x;
        this.y=y;
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
        var norvandak = random(this.check(0,1));
        matrix[this.y][this.x] = 0;
        if (norvandak) {
            this.x = norvandak[0];
            this.y = norvandak[1];
            matrix[this.y][this.x] = 8;
        }
    }
    stexcelxot() {
       var xotistexcelutex=random(this.check(0));
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
            var norxotaker=random(this.check(0));
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
            var norgishatich=random(this.check(0));
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
        var gtnelkrak=random(this.check(16));
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
class krak{
    constructor(x,y){
        this.x=x;
        this.y=y;
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