const background = document.getElementById("main")

function Color(r, g, b, a) {
    this.r = r
    this.g = g
    this.b = b
    this.a = a
    
}

Color.prototype.rgb = function() {   

return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    
}

Color.prototype.hex = function(r, g, b) {

        this.r = this.r.toString(16);
        this.g = this.g.toString(16);
        this.b = this.b.toString(16);
      
        if (this.r.length == 1)
          this.r = "0" + r;
        if (this.g.length == 1)
          g = "0" + g;
        if (this.b.length == 1)
          this.b = "0" + this.b;
      
        return "#" + this.r + this.g + this.b;
}

Color.prototype.rgba = function(r,g,b,a) {

    return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a +")";


}



const color1 = new Color(150, 23, 235);
const color2 = new Color(150, 26, 68, 0.9);

console.log(color1.rgb());
console.log(color1.hex());
console.log(color2.rgba());

background.style.backgroundColor = color1.rgb();

