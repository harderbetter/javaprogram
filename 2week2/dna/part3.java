
/**
 * Write a description of part3 here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class part3 {
    public String twoOccurrence(String stringa, String stringb)
    {
        int count = 0;
        int startIndex = 0;
        while(stringb.indexOf(stringa,startIndex) != -1)
        {   startIndex = stringb.indexOf(stringa,startIndex) + 1;
            count = count +1;
            
        }
        if(count >1) {
            return "true";
        }else{
            return "false";}
        }
    
    public void twoOccurrence_testing()
    {
        String stringa = "by";
        String stringb = "A story by Abby Long" ;
        String outcome = twoOccurrence( stringa,stringb);
        System.out.println(outcome);
        
        stringa = "a";
        stringb = "banana" ;
        outcome = twoOccurrence( stringa,stringb);
        System.out.println(outcome);
        
        stringa = "atg";
        stringb = "ctgtatgta" ;
        outcome = twoOccurrence( stringa,stringb);
        System.out.println(outcome);
    }
    public String lastPart(String stringa, String stringb)
    {
        if(stringb.indexOf(stringa) == -1)
        {
            return stringb;}else{
                return stringb.substring(stringb.indexOf(stringa)+stringa.length());}
            
          }
    public void lastPart_testing(){
        String stringa = "an";
        String stringb = "banana";
        System.out.println(lastPart(stringa, stringb));
        stringa = "zoo";
        stringb = "forest";
        System.out.println(lastPart(stringa, stringb));
}
}