//Perguntas ao usuario 

let nome = prompt("Olá, me diga o seu nome completo por favor.")
let diaNascimento = Number( prompt ("OK, agora me diga o dia do seu nascimento"))
let mesNascimento = Number(prompt ("Tudo bem, agora o mês do seu nascimento"))
let anoNascimento = Number(prompt ("agora por ultimo o ano que você nasceu"))
let endereco = prompt ("Me diga por favor o endereço da rua residência e o numero da casa por favor")
let cpf = Number (prompt("Digite o numero do seu CPF por favor"))
let escolaridade = prompt ("Qual o seu grau de escolaridade?")
let cnh = confirm ("Possui CNH?")
let filhos = confirm ("Possui filhos?")
let ocupaçao = prompt ("Qual a sua ocupação atual?")
let salario = prompt ("qual o valor do salário que voce atualmente?")
let comissao = prompt ("Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")
let anoAdmissao = Number (prompt("Agora para finalizar me diga o ano que você foi admitido"))
// fim das perguntas ao usuarios, assim armanando as informoçes que serão usadas no decorrer do codigo.

// //impressão no console dos tipos de variaveis usadas para coletar os dados do usuario.
// console.log(typeof nome, diaNascimento,mesNascimento, anoNascimento, endereco,cpf, escolaridade, cnh, filhos, ocupaçao, salario,comissao, anoAdmissao,)

// impressão no console de todoso os dados do usuario.
console.log(nome, diaNascimento, "/", mesNascimento, "/", anoNascimento, endereco, cpf, escolaridade, cnh, filhos, ocupaçao, salario, anoAdmissao)