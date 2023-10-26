function submitForm() {
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
        // Display form data in the popup
        document.getElementById('popupFirstName').textContent = firstName;
        document.getElementById('popupLastName').textContent = lastName;
        document.getElementById('popupDOB').textContent = dob;
        document.getElementById('popupCountry').textContent = country;
        const genderArray = Array.from(gender).map(g => g.value);
        document.getElementById('popupGender').textContent = genderArray.join(', ');
        document.getElementById('popupProfession').textContent = profession;
        document.getElementById('popupEmail').textContent = email;
        document.getElementById('popupMobile').textContent = mobile;

        // Show the popup
        document.getElementById('popup').style.display = 'block';

        // Reset the form
        resetForm();
    } else {
        alert('Please fill in all required fields.');
    }
}

function resetForm() {
    // Reset all form fields
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    // Close the popup and reset the form
    document.getElementById('popup').style.display = 'none';
    resetForm();
}
