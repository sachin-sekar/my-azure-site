const API_URL = "YOUR_AZURE_FUNCTION_URL"; 
let qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200
});

document.getElementById('passForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const passData = {
        name: document.getElementById('studentName').value,
        room: document.getElementById('roomNo').value,
        reason: document.getElementById('reason').value,
        timestamp: new Date().toISOString()
    };

    try {
    
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(passData),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
           
            const qrText = `PASS:${passData.name}|ROOM:${passData.room}|TIME:${passData.timestamp}`;
            qrcode.makeCode(qrText);
            document.getElementById('qrcode-container').style.display = 'block';
            alert("Gate pass logged successfully!");
        }
    } catch (err) {
        alert("System error. Please contact the warden.");
    }
});
