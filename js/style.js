document.addEventListener('DOMContentLoaded', function () {
    var picker = new Pikaday({ 
        field: document.getElementById('date'),
        format: 'YYYY-MM-DD',
        minDate: new Date(),
        maxDate: new Date(2024, 12, 31),
        onSelect: function() {
            console.log(this.getMoment().format('Do MMMM YYYY'));
        }
    });

    // Prevent manual input in the date field
    document.getElementById('date').addEventListener('keydown', function(event) {
        event.preventDefault();
    });

    document.getElementById('reservation-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let guests = document.getElementById('guests').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;

        let nameRegex = /^[A-Za-z\s]{4,30}$/;
        let phoneRegex = /^\d{6,12}$/;

        let valid = true;

        if (!nameRegex.test(name)) {
            document.getElementById('name-error').textContent = 'Name contain alphabets, spaces, and between 4 to 30 characters';
            valid = false;
        } else {
            document.getElementById('name-error').textContent = '';
        }

        if (!phoneRegex.test(phone)) {
            document.getElementById('phone-error').textContent = 'Phone No. must be between 6 to 12 digits and contain only numbers';
            valid = false;
        } else {
            document.getElementById('phone-error').textContent = '';
        }

        if (!email) {
            document.getElementById('email-error').textContent = 'Please fill out this field.';
            valid = false;
        } else {
            document.getElementById('email-error').textContent = '';
        }

        if (!guests) {
            document.getElementById('guests-error').textContent = 'Please fill out this field.';
            valid = false;
        } else {
            document.getElementById('guests-error').textContent = '';
        }

        if (!date) {
            document.getElementById('date-error').textContent = 'Please fill out this field.';
            valid = false;
        } else {
            document.getElementById('date-error').textContent = '';
        }

        if (!time) {
            document.getElementById('time-error').textContent = 'Please fill out this field.';
            valid = false;
        } else {
            document.getElementById('time-error').textContent = '';
        }

        if (valid) {
            alert('Reservation submitted successfully!');
            document.getElementById('reservation-form').reset();
        }
    });
});