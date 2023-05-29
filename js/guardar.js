function guardarcita() {
    const horaInput = document.getElementById('hora');
    const horaSeleccionada = horaInput.value;

    const fechaInput = document.getElementById('fecha');
    const fechaSeleccionada = new Date(fechaInput.value);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const fechaFormateada = fechaSeleccionada.toLocaleDateString('es-MX', options);

    const nombre = document.getElementById("nombre").value;

    const confirmacion = document.getElementById("confirmacion").value;

    const tipoInput = document.getElementById('tipo');
    const tipoSeleccionado = tipoInput.value;

    db.collection("citas").add({
        hora: horaSeleccionada,
        fecha: fechaFormateada,
        nombre: nombre,
        tipo: tipoSeleccionado,
        confirmacion: confirmacion
    })


        .then((docRef) => {
            alert("cita registrada")
        })

        .catch((error) => {
            alert("error")
        });
}