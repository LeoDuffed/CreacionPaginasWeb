// IF

console.log("Ciclo If");

let edad = 12;

if(edad > 17){
    console.log("Es mayor de edad");
} else if (edad > 13) {
    console.log("Usario tiene que estar compañado");
} else {
    console.log("No es mayor de edad");
}

// While

console.log("Ciclo While");

let i = 0;

while(i < 10){

    if(i%2 == 0){
        console.log('Numero par', i);
    }
    i++;
}

// Do While

console.log("Ciclo Do While");

j = 0;
do{
    if(j%2 == 0){
        console.log('Numero par',j);

    }
    j++

} while(j < 3);

// FOR

console.log("Ciclo For");

for(let n = 2;n < 10; n++){
    if(n %2 == 0){
        console.log('Numero par', n)
    }
}

// For Of

console.log("Ciclo For Of");

let animales=['Perro', 'Gato', 'Pez', 'Gallina'];

for(let animal of animales){
    console.log(animal);
}
