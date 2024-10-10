class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
		this.ataque = "";
	}

	atacar() {
		if (this.tipo === "Mago") {
			this.ataque = "Magia";
		} else if (this.tipo === "Guerreiro") {
			this.ataque = "Espada";
		} else if (this.tipo === "Monge") {
			this.ataque = "Artes Marciais";
		} else {
			this.ataque = "Shuriken";
		}
	}

	mensagem() {
		const sucesso = Math.random() < 0.7;
		this.atacar();

		if (sucesso) {
			console.log(`O ${this.tipo} atacou usando ${this.ataque} com sucesso!`);
		} else {
			console.log(`O ${this.tipo} atacou usando ${this.ataque}, mas o ataque falhou.`);
		}
	}
}

let personagem = new Heroi("Kelvin", 22, "Ninja");
personagem.atacar();
personagem.mensagem();
