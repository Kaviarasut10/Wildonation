const generateTransactionId = () => {
    return `txn_${Date.now()}`; // Simple unique ID based on timestamp
}
function showQRCode() {
    const amount = document.getElementById("amount").value;
    const upiId = "karthirajaraman13@okhdfcbank"; // Replace with your actual UPI ID

    if (amount && parseFloat(amount) > 0) { // Check if the amount is valid
        const qrCodeImage = document.getElementById("qrCodeImage");
        const transactionId = generateTransactionId();
        // Format the QR code data for Google Pay
        const qrData = `upi://pay?pa=${upiId}&pn=WILDVINE&mc=1234&tid=${transactionId}&tn=Payment for your service&am=${amount}&cu=INR`;
        
        
        // Generate QR code dynamically based on the UPI ID and amount
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
        
        // Show the QR code section
        document.getElementById("qrCodeSection").style.display = "block";
    } else {
        alert("Please select a valid donation amount.");
    }
}

// Form submission logic
const scriptURL = 'https://script.google.com/macros/s/AKfycbzGUfcEzeCjNvjP-IsfBk_lS3VXc3xFHzVNsLzflu9-AHyqzJaBkaKFwExRz4X2qu4f/exec';
const form = document.getElementById('submit-to-google-sheet');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            alert('Donation submitted successfully!');
            console.log('Success!', response);
            form.reset(); // Clear the form after submission
            document.getElementById("qrCodeSection").style.display = "none"; // Hide the QR code after submission
        })
        .catch((error) => {
            alert('There was an error with your submission.');
            console.error('Error!', error.message);
        });
});
