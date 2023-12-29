function reservarTurno() {
  const reservas = [];
    // Bucle para permitir múltiples reservas
    while (true) {
      // Preguntar al usuario si desea reservar un turno
      let respuesta = prompt("¿Quieres reservar un turno? (Sí/No)");
     
      // Convertir la respuesta a minúsculas para hacer la comparación insensible a mayúsculas
      respuesta = respuesta.toLowerCase();
  
      // Condición para determinar si el usuario quiere reservar o no
      if (respuesta === "si") {
        // Solicita el nombre del barbero
        
        let nombreBarbero = prompt("Elige un barbero (Guillermo, Nahuel, Federico):");
        nombreBarbero = nombreBarbero.toLowerCase();
        if (nombreBarbero !== "nahuel" && nombreBarbero !== "guillermo" && nombreBarbero !== "federico") {
        
          alert("Nombre no válido. Por favor, ingrese Nahuel, Guillermo o Federico.");
        reservarTurno();
        }
        
        let nombreCliente = prompt("Ingrese su nombre: ")
        let horaTurno = prompt("Ingresa la hora del turno (formato HH:mm):");
        let fechaTurno = prompt("Ingresa la fecha del turno (formato DD/MM/YYYY):");
        
            
            
            let datosReserva = {
              nombreB : nombreBarbero,
              nombreC : nombreCliente,
              horaT : horaTurno,
              fecha : fechaTurno,
          }
          reservas.push(datosReserva);
          
            /* Mostrar un mensaje de confirmación con los detalles del turno
          
            alert(`Turno reservado con éxito! Barbero: ${datosReserva.nombreB} Cliente: ${datosReserva.nombreC} Hora: ${datosReserva.horaT} Fecha:  ${datosReserva.fecha}`);*/
          // Devuelvo desde el array
            for(let i=0; i<reservas.length;i++){
              alert(`Turno reservado con exito
                  Barbero: ${datosReserva.nombreB} 
                  Cliente: ${datosReserva.nombreC }
                  Fecha: ${datosReserva.fecha} 
                  Hora: ${datosReserva.horaT}`)
            }
                   
      } else{
        // Si el usuario no quiere reservar, salir del bucle
        alert("Gracias. Hasta luego, vuelva pronto!");
      }
    }
}

  
  // Para reservar turno llamar a la misma.
  reservarTurno();