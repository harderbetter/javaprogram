// write your code here
var fgimg = new SimpleImage("drewRobert.png");
var bgimg = new SimpleImage("dinos.png");
var output = new SimpleImage(fgimg.getWidth(), fgimg.getHeight());

for(var pixel of fgimg.values() ){
    if( pixel.getGreen() == 255 && pixel.getRed() == 0 && pixel.getBlue() == 0 ){
        var x = pixel.getX();
        var y = pixel.getY();
        
        var changepixel = bgimg.getPixel(x,y);
        
        output.setPixel(x,y,changepixel);
    }
    else{
        var x = pixel.getX();
        var y = pixel.getY();
        var changepixel = fgimg.getPixel(x,y);
        output.setPixel(x,y,changepixel);
    }
}
print(output);