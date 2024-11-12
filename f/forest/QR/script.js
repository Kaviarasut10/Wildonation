/* function showQRCode() {
    const amount = document.getElementById("amount").value;
    if (amount) {
        const qrCodeImage = document.getElementById("qrCodeImage");
        qrCodeImage.src = "paytm.jpg";
        document.getElementById("qrCodeSection").style.display = "block";
    } else {
        alert("Please enter a donation amount.");
    }

}*/
function showQRCode() {
    const amount = document.getElementById("amount").value;
    const upiId = "kaviarasut10@oksbi"; // Replace with your actual UPI ID

    if (amount) {
        const qrCodeImage = document.getElementById("qrCodeImage");
        
        // Format the QR code data for Google Pay
        const qrData = `upi://pay?pa=${upiId}&pn=WILDVINE&mc=1234&tid=txnId&tn=Payment for your service&am=${amount}&cu=INR&url=https://your-website.com`;
        
        // Generate QR code dynamically based on the UPI ID and amount
        qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
        
        // Show the QR code section
        document.getElementById("qrCodeSection").style.display = "block";
    } else {
        alert("Please enter a donation amount.");
    }
}


