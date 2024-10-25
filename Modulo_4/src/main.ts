function sumar() {
    // Leer los valores de los inputs
    const sumando1 = document.getElementById("sumando1").value;
    const sumando2 = document.getElementById("sumando2").value;
    // Sumar los dos números
    const resultado = parseInt(sumando1) + parseInt(sumando2);
     // Mostrar el resultado
    document.getElementById("resultado").innerHTML = resultado;
    }

const botonSumar = document.getElementById("sumar");
botonSumar.addEventListener("click", sumar);