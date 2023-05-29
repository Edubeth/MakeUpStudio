
const citasLista = document.getElementById("citas-lista");

function mostarcitas(doc) {
  const citaDiv = document.createElement("div");
  citaDiv.setAttribute("data-id", doc.id);

  const fecha = document.createElement("p");
  fecha.textContent = `Fecha: ${doc.data().fecha}`;

  const hora = document.createElement("p");
  hora.textContent = `Hora: ${doc.data().hora}`;

  const nombre = document.createElement("p");
  nombre.textContent = `Nombre: ${doc.data().nombre}`;

  const tipo = document.createElement("p");
  tipo.textContent = `Tipo de maquillaje: ${doc.data().tipo}`;

  const confirmacion = document.createElement("p");
  confirmacion.textContent = `Correo o número de contacto: ${doc.data().confirmacion}`;

  citaDiv.appendChild(fecha);
  citaDiv.appendChild(hora);
  citaDiv.appendChild(nombre);
  citaDiv.appendChild(tipo);
  citaDiv.appendChild(confirmacion);

  citasLista.appendChild(citaDiv);
}

db.collection("citas")
  .orderBy("fecha")
  .onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        mostarcitas(change.doc);
      }
    });
  });