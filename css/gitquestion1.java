import java.util.*;
class input{
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int arr[]= new int[100];
        int k=0;
        int count=0;
        System.out.println("Enter the size of array");
        int n = sc.nextInt();
        arr=sc.nextInt();
        System.out.println("Enter the value of K");
        k=sc.nextInt();
        while(n!=k){
         count=count+n-k;
         n--;
        }
        System.out.println("count");

}