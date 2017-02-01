var image;

function upload()
{
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can1");
  image.drawTo(canvas);
}

function makegrey()
{
  var canvas2 = document.getElementById("can2");
    for(var pixel of image.values())
    {
        var avg = 0;
        avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
   image.drawTo(canvas2);
}