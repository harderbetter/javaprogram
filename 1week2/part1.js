// write your code here
var img = new SimpleImage("usain.jpg");
print(img);
var width = img.getWidth();
print(width);
for(var pixel of img.values() ){
    if(pixel.getX()< width/3)
    {
        pixel.setRed(255);
    }
    if(pixel.getX()> width/3 &&pixel.getX()< (width/3)*2)
    {
        pixel.setGreen(255);
    }
      if(pixel.getX()> (width/3)*2)
    {
        pixel.setBlue(255);
    }
}
print(img);
