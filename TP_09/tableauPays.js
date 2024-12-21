function init() {
    fetch("https://digicode.cleverapps.io/json/pays/pollution")
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            return response.json()
        })
        .then(data => {

            const titre = document.querySelector("#titre")
            const annee = document.querySelector("#annee")
            const corps = document.querySelector("#corps")

            titre.innerHTML = `${data.polluant} en ${data.unite}`
            annee.innerHTML = `${data.annee}`

            data.pays.forEach(pays => {
                corps.innerHTML += `<tr>
                            <td><img src=\"https://flagcdn.com/24x18/${pays.code}.png" alt="${pays.nom} flag"></td>
                            <td>${pays.nom}</td>
                            <td>${pays.valeur}</td>
                            <td>${pays.pourcentage}%</td>
                        </tr>`
            });
        })
        .catch(error => {
            console.error(error)
        })
}
