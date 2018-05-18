    class aliveCreature {
        constructor(x,y){
            this.x=x;
            this.y=y;
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
    randomelement(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}
    }