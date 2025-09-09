const heroi= "Capitao JS";
const xp = 5000;

if (xp <= 1000){
    console.log (`Até XP = 1000 o herói ${heroi} é nível Ferro`);
}else if(xp >= 1001 && xp <= 2000 ){
    console.log (`O heroi ${heroi} está no nível Bronze`);
}else if(xp >= 2001 && xp <= 5000){
    console.log (`O heroi ${heroi} está no nível Prata`);
}else if(xp >= 5001 && xp <= 7000){
    console.log (`O heroi ${heroi} está no nível Ouro`);
}else if(xp >= 7001 && xp <= 8000){
    console.log (`O heroi ${heroi} está no nível Platina`);
}else if(xp >= 8001 && xp <= 9000){
    console.log (`O heroi ${heroi} está no nível Ascendente`);
}else if(xp > 9001 && xp <= 10000){
    console.log (`O heroi ${heroi} está no nível Imortal`);
}else
    console.log (`O heroi  ${heroi} está no nível Radiante`);

