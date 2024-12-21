

function calculate() {
    const nb1 = parseFloat(document.querySelector("#nb1").value)
    const nb2 = parseFloat(document.querySelector("#nb2").value)
    const op = document.querySelector("#operateur").value
    const content = document.querySelector("#result")
    if (!nb1 || !nb2) {
        content.innerHTML = "<span>Vous devez saisir un nombre</span>"
        return
    }
    switch (op) {
        case "+":
            result = nb1 + nb2
            content.innerHTML =`<span>Le resultat de l'addition est : ${result}<span>`
            break
        case "-":
            result = nb1 - nb2
            content.innerHTML =`<span>Le resultat de la soustraction est : ${result}<span>`
            break
        case "*":
            result = nb1 * nb2
            content.innerHTML =`<span>Le resultat de la multiplication est : ${result}<span>`
            break
        case "%":
            result = nb1 % nb2
            content.innerHTML =`<span>Le resultat de la division est : ${result}<span>`
            break

    }
}