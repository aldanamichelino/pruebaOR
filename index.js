const vehiculos = {
  
    vehiculo1: {
       marca: "Peugeot", modelo: "206", puertas: 4, precio: `200.000,00`
   },

   vehiculo2: {
        marca: "Honda", modelo: "Titan", cilindrada: "125c", precio: `60.000,00`
    },

    vehiculo3: {
        marca: "Peugeot", modelo: "208", puertas: 5, precio: `250.000,00`
    },

    vehiculo4: {
        marca: "Yamaha", modelo: "YBR", cilindrada: "160c", precio: `80.500,50`
    }
   
};

const vehiculo = Object.values(vehiculos);

function imprimirVehiculos(objeto){
    for(let item of objeto){
        if(item.puertas){
            console.log(`Marca: ${item.marca} // Modelo: ${item.modelo} // Puertas: ${item.puertas} // Precio: $${item.precio}`);
        } else {
            console.log(`Marca: ${item.marca} // Modelo: ${item.modelo} // Cilindrada: ${item.cilindrada} // Precio: $${item.precio}`);
        }
    }
}

imprimirVehiculos(vehiculo);

console.log('=============================================');

//--------------------------------------------------------------------------------

const max = vehiculo.reduce(function (ant, post){
    return (parseFloat(ant.precio) > parseFloat(post.precio)) ? ant : post;
});

console.log(`Vehículo más caro: ${max.marca} ${max.modelo}`);

//--------------------------------------------------------------------------------

const min = vehiculo.reduce(function (ant, post){
    return (parseFloat(ant.precio) < parseFloat(post.precio)) ? ant : post;
});

console.log(`Vehículo más barato: ${min.marca} ${min.modelo}`);

//--------------------------------------------------------------------------------

const letraY = vehiculo.find(item => item.marca.includes('Y'));

console.log(`Vehículo que contiene en el modelo la letra 'Y': ${letraY.marca} ${letraY.modelo} $${letraY.precio}`);

console.log('=============================================');

//--------------------------------------------------------------------------------

console.log('Vehículos ordenados por precio de mayor a menor:');

const mayorAMenor = vehiculo.sort((ant, post) => parseFloat(post.precio) - parseFloat(ant.precio));

for(let item of mayorAMenor){
    console.log(`${item.marca} ${item.modelo}`);
}

