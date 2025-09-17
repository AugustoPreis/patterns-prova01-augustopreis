class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class MeioTransporte {
  static types = {
    bicicleta: Bicicleta,
    patinete: Patinete,
    onibus: Onibus,
  };

  static createMeioTransporte(tipo) {
    const MeioTransporteClass = this.types[tipo];

    if (!MeioTransporteClass) {
      throw new Error(`Tipo de transporte "${tipo}" inválido`);
    }

    return new MeioTransporteClass();
  }
}

function main() {
  const tipos = ['bicicleta', 'patinete', 'onibus'];

  tipos.forEach(tipo => {
    const transporte = MeioTransporte.createMeioTransporte(tipo);

    console.log(transporte.move());
  });
}

main();