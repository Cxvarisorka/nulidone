document.getElementById("register_form").addEventListener("submit", function(event) { 
    event.preventDefault(); // Prevent form submission

    var formData = {
        iuridiuli_piris_forma: document.getElementById("register_form").elements.iuridiuli_piris_forma.value,
        register_name_iuridiuli: document.getElementById("register_form").elements.register_name_iuridiuli.value,
        company_brand_name: document.getElementById("register_form").elements.company_brand_name.value,
        identification_code: document.getElementById("register_form").elements.identification_code.value,
        tel_founder_ceo: document.getElementById("register_form").elements.tel_founder_ceo.value,
        email: document.getElementById("register_form").elements.email.value,
        short_describe: document.getElementById("register_form").elements.short_describe.value,
        selling_start_date: document.getElementById("register_form").elements.selling_start_date.value,
        work_classification: document.getElementById("register_form").elements.work_classification.value,
        sell_location_country: document.getElementById("register_form").elements.sell_location_country.value,
        start_buisness_country: document.getElementById("register_form").elements.start_buisness_country.value,
        password: document.getElementById("register_form").elements.password.value,
        name: document.getElementById("register_form").elements.name.value,
        lastname: document.getElementById("register_form").elements.lastname.value,
        birthday: document.getElementById("register_form").elements.birthday_date.value,
        person_id: document.getElementById("register_form").elements.person_id.value,
        work_position: document.getElementById("register_form").elements.work_position.value,
        repeat_password: document.getElementById("register_form").elements.password_gameoreba.value,
        register_type: "iuridiuli_vanchuruli_investor"
    };
    console.log(formData);

    if(formData.person_id.length != 11 && String(formData.tel_founder_ceo).length != 9 && (formData.password.length < 6 || formData.password.length > 12) && (formData.password != formData.password_gameoreba)){
        alert("არასწორი მონაცემები, გთხოვთ ყურადღებით შეიყვანოთ თქვენი პირადი ნომერი, ტელეფონის ნომერი და პაროლი!");
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