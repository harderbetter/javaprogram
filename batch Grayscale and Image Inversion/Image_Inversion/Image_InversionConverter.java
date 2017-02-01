import edu.duke.*;
import java.io.*;
/**
 * Write a description of Image_InversionConverter here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Image_InversionConverter {
public ImageResource Image_Inversion(ImageResource inImage){
      ImageResource outImage = new ImageResource(inImage.getWidth(),inImage.getHeight());
      for(Pixel pixel: outImage.pixels()){
          Pixel inPixel = inImage.getPixel(pixel.getX(), pixel.getY());
          int average = (inPixel.getRed() + inPixel.getBlue() + inPixel.getGreen())/3;
          pixel.setRed(255- inPixel.getRed());
          pixel.setGreen(255- inPixel.getGreen());
          pixel.setBlue(255- inPixel.getGreen());
        }
      return outImage;
    }
    public void testImage_Inversion(){
    ImageResource ir = new ImageResource();
    ImageResource image = Image_Inversion(ir);
    image.draw();
}
    public void Image_InversionConverter_save(){
    DirectoryResource dr = new DirectoryResource();
    for(File f : dr.selectedFiles()){
        ImageResource inImage = new ImageResource(f);
        ImageResource Image_inverse = Image_Inversion(inImage);
        String fname = inImage.getFileName();
		String newName = "inverted-" + fname;
		Image_inverse.setFileName(newName);
        Image_inverse.draw();
        Image_inverse.save();
    }
    
}
}
