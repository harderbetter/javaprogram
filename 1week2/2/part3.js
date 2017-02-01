// write your code here
function setBlack(pixel)
{
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    
}
function setBorder( img , thickness )
{
    var i;
    var j;
    var width = img.getWidth();
    var height = img.getHeight();
    
    
    for(i = 0; i < thickness; i++)
    {
        for(j = 0; j < height; j++)
        {
            setBlack(img.getPixel(i,j));
        }
    }
    
    for(i = 0; i < thickness; i++)
    {
        for(j = 0; j < width; j++)
        {
            setBlack(img.getPixel(j,i));
        }
    }
    
     for(i = width - 1; i > width - thickness; i--)
    {
        for(j = 0; j < height; j++)
        {
            setBlack(img.getPixel(i,j));
        }
    }
    
      for(i = height - 1; i > height - thickness; i--)
    {
        for(j = 0; j < width; j++)
        {
            setBlack(img.getPixel(j,i));
        }
    }
}

var img = new SimpleImage("usain.jpg");
setBorder(img,10);
print(img);