class Auto {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;

  constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.maxVelocidad = maxVelocidad;
  }

  calcularTiempo(distancia: number): number {
    const tiempo = distancia / this.maxVelocidad;
    return tiempo;
  }
}

const autos: Auto[] = [
  new Auto("Ford", "Mustang", 300, 250),
  new Auto("Chevrolet", "Camaro", 350, 270),
  new Auto("BMW", "M3", 400, 280),
  new Auto("Audi", "R8", 450, 300),
  new Auto("Mercedes-Benz", "AMG GT", 500, 320),
];

console.log("Autos disponibles:");
autos.forEach((auto) => {
  console.log(`- ${auto.marca} ${auto.modelo}`);
});

const distancia = 100; 
console.log(`\nTiempo óptimo para recorrer ${distancia} km:`);
autos.forEach((auto) => {
  const tiempo = auto.calcularTiempo(distancia);
  console.log(`- ${auto.marca} ${auto.modelo}: ${tiempo.toFixed(2)} horas`);
});


