let selectedAmount = 0;

function selectDonation(amount, plants) {
    selectedAmount = amount;
    document.getElementById('selected-amount').innerText = `Selected Donation: ₹${amount} - ${plants} Street`;
    document.querySelector('.qr-code-container').style.display = 'none';
}

function generateQRCode() {
    if (selectedAmount > 0) {
        const qrContainer = document.getElementById('qrcode');
        qrContainer.innerHTML = ""; // Clear previous QR code

        // Generate the QR code
        QRCode.toCanvas(qrContainer, `Donation Amount: ₹${selectedAmount}`, function (error) {
            if (error) console.error(error);
        });

        // Show the QR code container
        document.querySelector('.qr-code-container').style.display = 'block';
    } else {
        alert("Please select a donation plan.");
    }
}
