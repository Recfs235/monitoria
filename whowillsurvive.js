const { theMightyHofDragon, fighters, fightersStats } = require('./data.js');

function fight() {
  return fighters.map((fighter) => {
    const fighterName = fighter.name;
    const fighterAttack = fightersStats[fighterName].attack;
    const fighterHp = fightersStats[fighterName].hp;
    const dragonAttack = theMightyHofDragon.attack;
    const dragonHp = theMightyHofDragon.hp;

    const dragonRemainLife = dragonHp - fighterAttack;
    const fighterRemainLife = fighterHp - dragonAttack;

    return {
      dragonHp: dragonRemainLife,
      fighter: {
        name: fighterName,
        hp: fighterRemainLife,
      }
    }
  })
}

function getResult(fightResult) {
  if (fightResult.dragonHp <= 0 && fightResult.fighter.hp >= 0) {
    return `Derrota o dragão e sobrevive. ${fightResult.fighter.name} sai com ${fightResult.fighter.hp} de HP.`
  }
}

function whoWillSurvive() {

  const survivor = {}

  fight().forEach((fightResult) => {
    survivor[fightResult.fighter.name] = getResult(fightResult);
  })

  return survivor;
}

console.log(whoWillSurvive());

