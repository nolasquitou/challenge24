let gold = 0;
let potion = 0;
let nothing = 0;
let cofres = 0;

for (let index = 0; index < 10; index++) {
    cofres = Math.round(Math.random()* 3)

    if(cofres == 0){
        console.log("Encontraste + 10 de oro");
        gold = gold + 10
    }else if(cofres == 1){
        console.log("Encontraste +2 posiones");
        potion = potion + 2
    }else if(cofres == 3){
        console.log("No encontraste nada");
        nothing = nothing + 1
    }
}
console.log(`Tienes ${gold} de oro`);
console.log(`Tienes ${potion} pociones de vida`);
console.log(`Te salieron ${nothing} cofres vacios`);