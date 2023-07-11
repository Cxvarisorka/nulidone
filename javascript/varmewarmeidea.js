document.getElementById("register_form").addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevent form submission

    var formData = {
        name: document.getElementById("register_form").elements.name.value,
        lastname: document.getElementById("register_form").elements.lastname.value,
        birthday: document.getElementById("register_form").elements.birthday_date.value,
        person_id: document.getElementById("register_form").elements.person_id.value,
        telephone: document.getElementById("register_form").elements.tel.value,
        email: document.getElementById("register_form").elements.email.value,
        register_type: "var_pizikuri_mewarme_idea"
    };
    console.log(formData);

    if(formData.person_id.length != 11 && String(formData.telephone).length != 9 && (formData.password.length < 6 || formData.password.length > 12)){
        alert("არასწორი მონაცემები, გთხოვთ გადაამოწმოთ!");
    } else{
        axios.post('/your-backend-endpoint', JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response.data); // Handle the response from the backend
        })
        .catch(function(error) {
            console.error(error);
        });
    }
});