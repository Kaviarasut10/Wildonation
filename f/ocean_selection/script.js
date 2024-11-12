document.getElementById('donateButton').addEventListener('click', function() {
    const selectedOceans = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(checkbox => checkbox.value);

    if (selectedOceans.length === 0) {
        alert('Please select at least one ocean to donate to.');
    } else {
        alert('Thank you for choosing to donate to: ' + selectedOceans.join(', '));
        // Here you can add your donation processing logic
    }
});
