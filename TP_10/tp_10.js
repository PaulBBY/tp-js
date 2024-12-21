function validateForm (){
    const errorsList=[];
    const form = document.querySelector("#form");
    const currentDate = new Date();
    const formData = new FormData(form);
    const errors = document.querySelector("#errors")

    formData.forEach((value, key) => {
        if(value.trim() === ''){
            errorsList.push(`Field "${key}" is mandatory`);     
           }
    });

    errors.innerHTML += errorsList 
    
}