class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
		this.ataque = "";
	}

	getNome() {
		return this.nome;
	}

	atacar() {
		if (this.tipo === "Mago") {
			this.ataque = "Magia";
		} else if (this.tipo === "Guerreiro") {
			this.ataque = "Espada";
		} else if (this.tipo === "Monge") {
			this.ataque = "Artes Marciais";
		} else if (this.tipo === "Ninja") {
			this.ataque = "Shuriken";
		} else {
			this.ataque = "Arco e flecha";
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

let party = {
	1: new Heroi("Kelvin", 22, "Ninja"),
	2: new Heroi("Nicolas", 20, "Guerreiro"),
	3: new Heroi("Gabriel", 21, "Monge"),
	4: new Heroi("Heloysa", 22, "Mago"),
	5: new Heroi("Rayanne", 20, "Atirador"),
};

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

function turnoJogador(index) {
	if (!party[index]) {
		readline.close();
		return;
	}

	console.log(`Deseja que ${party[index].getNome()} ataque?\n1 - SIM\n2 - NÃO`);

	readline.question("Escolha: ", (opcao) => {
		opcao = Number(opcao);

		switch (opcao) {
			case 1:
				console.log(`A opção escolhida foi continuar o turno`);
				console.log("------------------------------------------------");
				party[index].atacar();
				party[index].mensagem();
				console.log("------------------------------------------------");
				console.log(`O próximo turno é ${party[index + 1].getNome()}`);
				console.log("------------------------------------------------");
				break;
			case 2:
				console.log(`A opção escolhida foi pular o turno para ${party[index + 1].getNome()}`);
				console.log("------------------------------------------------");
				break;
			default:
				console.log("Opção inválida. Turno ignorado.");
				console.log("------------------------------------------------");
				break;
		}

		turnoJogador(index + 1); // Passa para o próximo herói
	});
}

turnoJogador(1); // Inicia do os turnos
