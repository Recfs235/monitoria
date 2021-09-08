## Quem sobrevive?
O chefe da guilda requisita um relatório de combatentes que estejam aptos a vencer o dragão. Analise as informações que o nosso batedor conseguiu e produza esse relatório com HOF's.

- O que será avaliado:
  - O ataque do dragão será comparado com o HP do campeão, e também será comparado o ataque do campeão com o HP do dragão.
  - Retorne um array contendo um objeto para cada caso com as informações do resultado da batalha e HP de cada um dos combatentes (se pelo menos um sobreviver).
  
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
  { 
    Thorin: "Derrota o dragão e não sobrevive." },
  { Bilbo: "Não derrota o dragão e não sobrevive. O dragão sai com 26 de HP." }
]
```