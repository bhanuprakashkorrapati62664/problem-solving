public class BinaryPattern {
    public static void main(String[] args) {
        int zero = 0;
        int one = 1;
        for(int i = 1; i <= 5; i++){
            for(int j = 1; j <= i ; j++){
                if (i%2 != 0 && j % 2 != 0 || i % 2 == 0 && j % 2 ==0) {
                    System.out.print(one+" ");
                }
                else{
                    System.out.print(zero+" ");
                }
            }
            System.out.println();
        }
    }
}
