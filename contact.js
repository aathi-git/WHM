function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture the current timestamp
    const currentTimestamp = new Date().toLocaleString();

    // Update the hidden input field with the timestamp
    document.getElementById('timestamp').value = currentTimestamp;

    // Now, submit the form
    document.getElementById('contactForm').submit();
}
