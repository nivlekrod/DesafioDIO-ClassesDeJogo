# 3️⃣ Escrevendo as Classes de um Jogo

## O que deve ser utilizado

- **Variáveis**  
- **Operadores**  
- **Laços de repetição**  
- **Estruturas de decisão**  
- **Funções**  
- **Classes e Objetos**

## Objetivo

Criar uma classe genérica que represente um herói de aventura. Esta classe deve incluir as seguintes propriedades:

- **nome**: O nome do herói.  
- **idade**: A idade do herói.  
- **tipo**: O tipo de herói, como guerreiro, mago, monge ou ninja.

Além disso, a classe deve ter um método chamado **atacar**, que atenda aos seguintes requisitos:

- Exibir a mensagem:  
  `O {tipo} atacou usando {ataque}`  
- Onde:
  - `{tipo}`: Corresponde ao tipo do herói.
  - `{ataque}`: Descrição específica do ataque, que varia de acordo com o tipo do herói, conforme a tabela abaixo:

### Ataques por Tipo de Herói

| Tipo      | Descrição do Ataque      |
|-----------|--------------------------|
| **Mago**  | Usou magia               |
| **Guerreiro** | Usou espada          |
| **Monge** | Usou artes marciais      |
| **Ninja** | Usou shuriken            |

## Exemplo de Saída

Ao final, a mensagem exibida será algo como:
  `O {tipo} atacou usando {ataque}`

Exemplo:
- O **mago** atacou usando **magia**  
- O **guerreiro** atacou usando **espada**

### Implementação Extra

Foi implementada uma lógica de sucesso aleatório ao ataque do Herói, utilizando o método `Math.random()`. Essa lógica gera um número aleatório para determinar se o ataque foi bem-sucedido ou não, com 70% de chance de sucesso.
