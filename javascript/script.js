//alert("Seja bem vindo!");
//document.write("Iniciando em javascript");
//prompt("Digite seu nome");
//resp = confirm("Será que vai chover?");

/*var a, b;
a = 5;
b = "5Kg de açucar";
document.write("O valor da variavel A é:" +a);
document.write("<p>" + "O valor da variavel B é:" +b+ "<p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é:" + a/2 + "</p>");
document.write("<p>" + "O valor da variavel B dividido por 2 é:" + b/2 + "</p>"); */

/* var a, inteiro, flutuante;
a = "45.78 Kg de açucar";
inteiro = parseInt(a);
flutuante = parseFloat(a);
document.write("O valor da varial A é: " +a);
document.write("<p>" + "O valor númerico inteiro da variavel é: " +inteiro+"</p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é:" +inteiro/2 +"</p>");
document.write("<p>" + "O valor da variavel decimal da variavel é: " +flutuante +"</p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é:" +flutuante/2 +"</p>");*/

/*var a, b, c;
a = "Olá pessoal! ";
b = "Sejam bem vindos ao javascript!";
c = a + b;
document.write(c);*/

//E(&&)
//a = 6, b = 3, c = 1;
//document.write((a>b) && (b>c)); //(a é maior que b) e (b é maior que c)

//OU(||)
//a = 6, b = 3, c = 1;
//alert((a>b) || (b==c)); //(a é maior que b) ou (b é igual a c)

//Negação(!)
//a = 6, b = 3, c = 1;
//alert(a!=b)

/*Unários diversos
Incremento de prefixo e sufixo (++)
a = 5;
alert(++a +2); // Adiciona 1 a variavel "a" antes de executar a expressão.
alert("a=" +a); // O resultado do alert será 8

a = 5;
alert(a++ +2); // adiciona 1 à variavel "a" após a execução da expressão. 
alert("a=" +a); // O resultado do alert será 7

*Decremento de prefixo e sufixo (--)
1. a = 5
b = --a +2; //Subtrai 1 da variavel "a" antes a execução da expressão, "b" receberá 6.
document.write("a = " + a);
document.write("b = " + b);
2. a = 5
b = a-- +2; //Subtrai 1 da variavel "a" após a execução da expressão, "b" receberá 7.
document.write("a = " + a);
document.write("b = " + b);

Unário (-)
1. a =  2;
b = -a; // Muda o sinal de positivo para negativo, portanto "b" receberá -2
2. c = -3;
d = -c; // Muda o sinal de negativo para positivo, "d" receberá 3.

*/
/* hoje = new Date(); // O operador new cria uma instancia de um tipo de objeto definido pelo usuario ou de um dos tipos nativos (built-in) que possuem uma função construtora.
xDia = hoje.getDay(); // o getDay é responsavél por mostrar o dia da semana da matriz
diaSemana = new Array(7);
diaSemana[0] = "domingo";
diaSemana[1] = "Segunda-feira";
diaSemana[2] = "Terça-feira";
diaSemana[3] = "Quarta-feira";
diaSemana[4] = "Quinta-feira";
diaSemana[5] = "Sexta-feira";
diaSemana[6] = "Sábado";
//document.write("O número da semana é:" + " " + (xDia +1));
//document.write("<p><b>" + "hoje é: " + diaSemana[xDia]);
*/
/* Atividade
Crie um programa que exiba os seguintes itens:
1. Prato do dia;
2. Preço do prato;

document.write("O prato do dia é Virada Paulista");
document.write(diaSemana[xDia + 1] + "Virada Paulista");

"Segunda-feira:"
"Virada Paulista"
"Preço = R$20,00"
*/
/*
document.write("<p><b>" + "Usando o método toUpperCase" + "</p></b>");
A= new String ("Olá pessoal!");
b= new String ("Sejam bem vindos ao javascript!");
document.write(A.toUpperCase());
document.write(b.toUpperCase());
document.write("<p><b>" +"Você poderá usar: " + "</p></b>");
document.write("<p>" + A.toUpperCase() + b.toUpperCase() + "</p>");
document.write("<p><b>" + "Usando o método toLowerCase" + "</p></b>");
document.write(A.toLowerCase());
document.write(b.toLowerCase());
document.write("<p><b>" +"Você poderá usar: " + "</p></b>");
document.write("<p>" + A.toLowerCase() + b.toUpperCase() + "</p>");
*/

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado').value;
    
}