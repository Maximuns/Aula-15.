
function comparar(num1, num2) {
  let mensagem

  if (num1 > num2 ) {
       mensagem = "O primeiro número é maior que o segundo"
  }
  else if (num1 < num2) 
    mensagem = "O primeiro número é menor que o segundo"
  
 if (num1 === num2){
    mensagem = "O primeiro número é igual ao segundo"  
 }

  console.log(mensagem)
  
}    
let num1 = Number = prompt("Insira o primeiro número") 
let num2 = Number = prompt("Insira o segundo número") 

comparar(num1,num2)
