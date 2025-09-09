let heroi= "Capitao JS";
let xp = 5000;

switch(xp){
    case 'Bronze' : xp >= 1001 && <= 2000;
    break;
    case 'Prata' : xp >= 2001 && <= 5000;
    break;
    case 'Ouro' : xp >= 5001 && <= 7000;
    break;
    case 'Platina' : xp >= 7001 && <=8000;
    break;
    case 'Ascendente' : xp >= 8001 && <= 9000;
    break;
    case 'Imortal' : xp >= 9001 && <= 10000;
    break;
    case 'Radiante' : xp >= 10001;
    break;
    default:
        console.log ("Nível Ferro até XP 1000");
        break;

}
console.log('O herói ${heroi} tem a XP = ${xp}');