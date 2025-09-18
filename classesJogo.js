// Solicita o nome do usuário
let nome = prompt("Digite seu nome:");

// Define os tipos de personagem
const tipos = {
	mago: "magia",
	guerreiro: "espada",
	arqueiro: "flecha",
	monje: "punho"
};

// Solicita o tipo do personagem
let tipoEscolhido = prompt("Escolha seu tipo (mago, guerreiro, arqueiro, monje):");
let tipo = tipos[tipoEscolhido] || "desconhecido";

// Solicita a idade do usuário
let idade = parseInt(prompt("Digite sua idade:"));

console.log("Seu nome é " + nome + ", você é um " + tipoEscolhido + " e tem " + idade + " anos.");