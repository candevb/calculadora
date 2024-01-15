const suma = () => {
    if (valor1.value == "" || valor2.value == "") {
        alert("Debe ingresar dos valores")
    } else {
        mostrarResultado = Number(valor1.value) + Number(valor2.value);
        resultado.innerHTML = "Resultado " + mostrarResultado;
    }

}


const resta = () => {
    if (valor1.value == "" || valor2.value == "") {
        alert("Debe ingresar dos valores")
    } else {
    mostrarResultado = Number(valor1.value) - Number(valor2.value);
    resultado.innerHTML = "Resultado " + mostrarResultado;
}
}

const multiplicacion = () => {
    if (valor1.value == "" || valor2.value == "") {
        alert("Debe ingresar dos valores")
    } else {
    mostrarResultado = Number(valor1.value) * Number(valor2.value);
    resultado.innerHTML = "Resultado " + mostrarResultado;
}
}

const division = () => {
    if (valor1.value == "" || valor2.value == "") {
        alert("Debe ingresar dos valores")
    } else if (Number(valor1.value) !== 0 && Number(valor2.value) !== 0) {
        mostrarResultado = Number(valor1.value) / Number(valor2.value);
        resultado.innerHTML = "Resultado " + mostrarResultado;
    } else {
        alert("No se puede dividir por cero")
    }

}