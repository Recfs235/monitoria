## Experiência de combate
Estratégias precisam ser tomadas. É preciso saber qual combatente possui a maior idade, e qual
possui a menor.

**O que será avaliado:**

Retorne uma _string_ com a mensagem:
```js
Jedi possui maestria. Padawan ainda é um pupilo.
```

## Média de idade por classe
O censo da guilda solicita a média de idade de cada classe, com o objetivo de distribuir os benefícios de aposentadoria. Descubra a média de cada classe e ordene por ordem decrescente da média.

> Obs: Arredonde as médias para um número inteiro.

**O que será avaliado:**

Retorne um _array_ de objetos com a seguinte estrutura:

```js
[
  ...
  { barbarian: 33 },
  { alien: 27 },
]
```

## Quem sobrevive?
O chefe da guilda requisita um relatório de combatentes que estejam aptos a vencer o dragão. Analise as informações que o nosso batedor conseguiu e produza esse relatório com HOF's.

**O que será avaliado:**

O ataque do dragão será comparado com o HP de cada combatente, e também será comparado o ataque de cada combatente com o HP do dragão.

Retorne um _array_ contendo um objeto para cada caso, com as informações do resultado da batalha e HP de cada combatente (se pelo menos um ou uma sobreviver).

**Resultados possíveis:**
  - Derrota o dragão e não sobrevive.
  - Não derrota o dragão e não sobrevive.
    O dragão sai com X de HP.
  - Derrota o dragão e sobrevive.
    "Nome" sai com X de HP.
  - Não derrota o dragão e sobrevive.
    "Nome" sai com X de HP e o dragão com Y de HP.

Exemplo:
```js
[
  ...
  { Thorin: "Derrota o dragão e não sobrevive." },
  { Bilbo: "Não derrota o dragão e não sobrevive. O dragão sai com 26 de HP." },
  { Gandalf: "Derrota o dragão e sobrevive. Gandalf sai com 43 de HP." },
]
```