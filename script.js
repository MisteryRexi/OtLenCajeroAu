function toggleJavaCode() {
    var javaCode = document.getElementById("javaCode");
    var toggleButton = document.querySelector('.code-actions button:first-child');
    javaCode.classList.toggle("hidden");
    if (javaCode.classList.contains("hidden")) {
        toggleButton.textContent = "Mostrar Código Java";
    } else {
        toggleButton.textContent = "Ocultar Código";
    }
}

function copyCode() {
    var code = document.getElementById("javaCode").innerText;
    navigator.clipboard.writeText(code).then(function() {
        alert("Código copiado al portapapeles");
    }, function() {
        alert("Error al copiar el código");
    });
}

let costo = 0;
let pago = 0;

function calcularCosto() {
    let horas = document.getElementById("horas").value;
    costo = horas * 17;
    if (costo > 999) {
        costo = 999;
    }
    document.getElementById("costo").innerText = "Costo total: $" + costo;
    document.getElementById("deuda").innerText = "Debes: $" + costo;
    pago = 0;
    document.getElementById("pago").innerText = "Pago realizado: $" + pago;

    document.getElementById("costo").classList.remove("hidden");
    document.getElementById("deuda").classList.remove("hidden");
    document.getElementById("pago").classList.remove("hidden");
    document.getElementById("opciones-pago").classList.remove("hidden");
    document.getElementById("cambio").classList.add("hidden");
    document.getElementById("reiniciar").classList.add("hidden");
    document.getElementById("costo").classList.remove("complete");
}

function pagar(monto) {
    pago += monto;
    if (pago >= costo) {
        let cambio = pago - costo;
        let moneda10 = Math.floor(cambio / 10);
        cambio %= 10;
        let moneda5 = Math.floor(cambio / 5);
        cambio %= 5;
        let moneda2 = Math.floor(cambio / 2);
        cambio %= 2;
        let moneda1 = cambio;

        document.getElementById("cambio").innerHTML =
            "Cambio a recibir: <br>" +
            moneda10 + " moneda(s) de 10<br>" +
            moneda5 + " moneda(s) de 5<br>" +
            moneda2 + " moneda(s) de 2<br>" +
            moneda1 + " moneda(s) de 1<br>" +
            "---------------------------<br>" +
            "El cambio total es: $" + (pago - costo);

        document.getElementById("cambio").classList.remove("hidden");
        document.getElementById("reiniciar").classList.remove("hidden");
        document.getElementById("costo").classList.add("complete");
    } else {
        document.getElementById("deuda").innerText = "Debes: $" + (costo - pago);
        document.getElementById("pago").innerText = "Pago realizado: $" + pago;
        document.getElementById("cambio").classList.add("hidden");
        document.getElementById("costo").classList.remove("complete");
    }
}

function reiniciarProceso() {
    document.getElementById("horas").value = "";
    document.getElementById("costo").classList.add("hidden");
    document.getElementById("deuda").classList.add("hidden");
    document.getElementById("pago").classList.add("hidden");
    document.getElementById("opciones-pago").classList.add("hidden");
    document.getElementById("cambio").classList.add("hidden");
    document.getElementById("reiniciar").classList.add("hidden");
    document.getElementById("costo").classList.remove("complete");
}