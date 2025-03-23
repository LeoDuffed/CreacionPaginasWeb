let nombre = "Pikachu"
let anime = "Pokemon";
let tipo = "Electrico";

let pokemon ={
    nombre: "Charizard",
    anime: "Pokemon",
    tipo: "Fuego",
};

console.log(pokemon)

console.log(pokemon.tipo);

console.log(pokemon['nombre']);

pokemon.nombre = "Richu";

let llave = 'anime';
pokemon[llave] = "Pokemon go"

console.log(pokemon.anime);

// Para borrar variables de tipo objeto

delete pokemon.anime;