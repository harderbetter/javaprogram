
/**
 * Write a description of part2 here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class part2 {
      public String findSimpleGene(String dna, String startCodon, String stopCodon) {
        //Find first occurrence of “ATG” call its index "startIndex"
        int startIndex = dna.indexOf(startCodon);
        //Find the "TAA" starting from (startIndex+3), call this result currIndex
        int currIndex = dna.indexOf(stopCodon, startIndex + 3);
        //As long as currIndex is not equal to -1
        while (currIndex != -1) {
            //Check if (currIndex - startIndex) is a multiple of 3
            if((currIndex - startIndex) % 3 == 0) {
               //If so, the text between startIndex and currIndex + 3 is your answer
               return dna.substring(startIndex, currIndex +3);
            }
            //If not, update currIndex to the index of the next TAA, starting from (currIndex+1)
            else {
                  currIndex = dna.indexOf(stopCodon, currIndex + 1);
            }
        }
        //Your answer is the empty string
        return "";
}
     public void testFindGeneSimple() {
        //             v  v  v  v  v
        String dna = "AATGCGTAATTAATCG";
        System.out.println("DNA strand is " + dna);
        String gene = findSimpleGene(dna,"ATG","TAA");
        System.out.println("Gene is " + gene);
        //       v  v  v  v  v  v  v  v
        dna = "CGATGGTTGATAAGCCTAAGCTATAA";
        System.out.println("DNA strand is " + dna);
        gene = findSimpleGene(dna,"ATG","TAA");
        System.out.println("Gene is " + gene);
        //       v  v  v  v  v  v  v  v
        dna = "CGATGGTTGATAAGCCTAAGCTAAA";
        System.out.println("DNA strand is " + dna);
        gene = findSimpleGene(dna,"ATG","TAA");
        System.out.println("Gene is " + gene);
    }
}
