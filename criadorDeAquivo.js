import java.io.DataOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;

import java.io.DataInputStream;
import java.io.FileInputStream;

public class Princiapal {

	public static void main(String[] args) throws FileNotFoundException, IOException  {
		//System.out.println("Hello World");
		
		Scanner ler = new Scanner(System.in);
		String nome;
		char sexo;
		int idade, altura;
		double pc;
		
		FileOutputStream arq = new FileOutputStream("arquivo.dat");
		DataOutputStream gravarArq = new DataOutputStream(arq);
		
		System.out.printf("Informe o seu nome: ");
		nome = ler.nextLine(); // String
		
		System.out.printf("Informe o seu sexo (M/F)...........: ");
		sexo = (char)System.in.read(); // char
		
		System.out.printf("Informe a sua idade.............:");
		idade = ler.nextInt(); // inteiro
		
		System.out.printf("Informe a sua Altura.............:");
		altura = ler.nextInt();
				
		gravarArq.writeUTF(nome);
		gravarArq.writeChar(sexo);
		gravarArq.writeInt(idade);
		gravarArq.writeInt(altura);
		
		arq.close();
		
		System.out.printf("\nDados Gravados Com Sucesso! em aquivo.dart\n");
		
		FileInputStream arq1 = new FileInputStream("arquivo.dat");
		DataInputStream lerArq1 = new DataInputStream(arq1);
		
		nome = lerArq1.readUTF();
		sexo = lerArq1.readChar();
		idade = lerArq1.readInt();
		
		System.out.printf("Nome.................: %s\n", nome);
		System.out.printf("Sexo.................: %c\n", sexo);
		System.out.printf("Idade.................: %danos\n", idade);
		
		arq1.close();
	
	}

}
