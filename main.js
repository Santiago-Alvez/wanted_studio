function reservarTurno() {
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
  
        // Para seleccionar un barbero y otro
        switch (nombreBarbero.toLowerCase()) {
          case "guillermo":
          case "nahuel":
          case "federico":
            // Solicitar la hora y fecha
            let horaTurno = prompt("Ingresa la hora del turno (formato HH:mm):");
            let fechaTurno = prompt("Ingresa la fecha del turno (formato DD/MM/YYYY):");
  
            // Mostrar un mensaje de confirmación con los detalles del turno
            alert("Turno reservado con éxito!\nBarbero: " + nombreBarbero + "\nHora: " + horaTurno + "\nFecha: " + fechaTurno);
            break;
          default:
            // Si el nombre del barbero no existe o esta mal escrito, muestra un mensaje de error
            alert("Barbero no reconocido. Por favor, elige entre Guillermo, Nahuel o Federico.");
            break;
        }
      } else if (respuesta === "no") {
        // Si el usuario no quiere reservar, salir del bucle
        alert("Gracias. Hasta luego, vuelva pronto!");
        break;
      } else {
        // Si la respuesta no es válida, mostrar un mensaje de error y repetir el bucle
        alert("Por favor, ingresa 'Sí' o 'No'.");
      }
    }
  }
  
  // Para reservar turno llamar a la misma.
  reservarTurno();