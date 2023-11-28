function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.")
        return
    }

    var imc = peso / (altura * altura)

    var resultadoDiv = document.getElementById("resultado")
    if (imc < 18.5) {
        resultadoDiv.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - Abaixo do peso."
    } else if (imc >= 18.5 && imc < 24.9) {
        resultadoDiv.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - Peso normal."
    } else if (imc >= 25 && imc < 29.9) {
        resultadoDiv.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - Acima do peso."
    } else {
        resultadoDiv.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " - Obeso."
    }
}