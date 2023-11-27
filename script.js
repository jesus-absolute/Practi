function calcularIMC() {
    // Obtener los valores de peso y altura desde los campos de entrada
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular el IMC
    var imc = peso / (altura ** 2);

    // Mostrar el resultado
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = "Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2);

    // Interpretar el resultado
    if (imc < 18.5) {
        resultadoElement.textContent += " - Estás bajo peso.";
    } else if (imc < 25) {
        resultadoElement.textContent += " - Tu peso es normal.";
    } else if (imc < 30) {
        resultadoElement.textContent += " - Tienes sobrepeso.";
    } else {
        resultadoElement.textContent += " - Tienes obesidad.";
    }
}
