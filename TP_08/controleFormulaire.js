
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("form").addEventListener("submit", function (event){
        event.preventDefault();
        const firstName = document.querySelector("#firstName").value
        const secondName = document.querySelector("#secondName").value
        const date = document.querySelector("#date")
        const content = document.querySelector("#result")
    
        if( !date || !firstName || !secondName){
            content.innerHTML = '<span style="background-color: red; color: white">Error</span>'
            return
        }
        content.innerHTML = '<span>All good</span>'
    
    })
    
    
})

