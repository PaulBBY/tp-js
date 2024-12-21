

function calculate(){
    const nb1 = parseFloat(document.querySelector("#nb1").value)
    const nb2 = parseFloat(document.querySelector("#nb2").value)
    const content = document.querySelector("#result")
    if(!nb1 || !nb2){
        content.innerHTML = "<span>Vous devez saisir un nombre</span>" 
        return
    }
    const result = nb1 + nb2
    content.innerHTML = `<span> The result is : ${result}`
    return
}