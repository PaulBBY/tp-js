function init() {

    fetch("https://restcountries.com/v2/all")
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            return response.json()
        })
        .then(data => {


          const body = document.querySelector("#body");
           data.forEach(country => {
                body.innerHTML += 
                    `<tr>
                        <td> ${country.name} </td>
                        <td> ${country.capital} </td>
                        <td> ${country.population} </td>
                        <td> ${country.region} </td>
                    </Tr>`
           });

        })
        .catch(error => {
            console.error(error)
        })


}

let sortDirection = { country: 'asc', population: 'asc' };

function onSort(){

}