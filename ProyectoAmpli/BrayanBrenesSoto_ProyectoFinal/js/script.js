
function getForm() {
    let nombre = document.getElementById("Nombre").value;
    let correo = document.getElementById("Correo").value;
    let Fecha = document.getElementById("Fecha").value;
    let nacionalidad = document.getElementById("Nacionalidad").value;
    let ID = document.getElementById("Id").value;

    console.log(nombre + ' ' + correo + ' ' + Fecha + ' ' + nacionalidad + ' ' + ID);
    
    var json = {
        nombre : nombre,
        correo : correo,
        Fecha : Fecha,
        nacionalidad : nacionalidad,
        ID : ID
    }

    console.log(json)
}
