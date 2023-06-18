class CuentaBancaria {
    saldo: number;
  
    constructor() {
      this.saldo = 0;
    }
  
    asignarFondos(monto: number) {
      this.saldo += monto;
    }
  
    sacarFondos(monto: number) {
      if (monto > this.saldo) {
        console.log("No hay suficientes fondos en la cuenta.");
      } else {
        this.saldo -= monto;
        console.log(`Se han retirado ${monto} fondos de la cuenta.`);
      }
    }
  }
  
  const cuenta = new CuentaBancaria();
  
  cuenta.asignarFondos(1000);

  cuenta.sacarFondos(500);
  
  cuenta.sacarFondos(800);