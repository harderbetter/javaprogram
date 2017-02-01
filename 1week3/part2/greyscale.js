// write your code here
var img = new SimpleImage("chapel.png");
print(img);
function greyscale()
{
    for(var pixel of img.values())
    {
        var avg = 0;
        avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
}
greyscale();
print(img);
