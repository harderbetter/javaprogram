var fgcanvas;
var bgcanvas;
var bgimg = null;
var fgimg = null;

function upload_fgimg()
{
  var fileinput = document.getElementById("fgimg");
  fgimage = new SimpleImage(fileinput);
  fgcanvas = document.getElementById("fgcan");
  fgimage.drawTo(fgcanvas);
}

function upload_bgimg()
{
  var fileinput = document.getElementById("bgimg");
  bgimage = new SimpleImage(fileinput);
  bgcanvas = document.getElementById("bgcan");
  bgimage.drawTo(bgcanvas);
}

function clear_two_canvas()
{
  clear_canvas(fgcanvas);
  clear_canvas(bgcanvas);
}

function clear_canvas(canvas)
{ 
  var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
}

function doGreenScreen()
{
  if (fgimage == null  || ! fgimage.complete()) {
    alert("Foreground image not loaded");
  }
  if (bgimage == null || ! bgimage.complete()) {
    alert("Background image not loaded");
  }
  
  clear_two_canvas();
  var finalImage = createComposite();
  finalImage.drawTo(fgcanvas);
}

function createComposite()
{
  var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  var greenThreshold = 240;
  for (var pixel of fgimage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() > greenThreshold) {
      //pixel is green, use background
      var bgPixel = bgimage.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else {
      //pixel is not green, use foreground
      output.setPixel(x,y,pixel);
    }
  }
  return output;

}