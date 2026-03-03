document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const category = document.getElementById('category').value;
    const room = document.getElementById('room').value;
    const desc = document.getElementById('description').value;
    const id = Math.floor(1000 + Math.random() * 9000);

  
    const complaintList = document.getElementById('complaintList');
    const newComplaint = document.createElement('div');
    newComplaint.className = 'status-card';
    newComplaint.innerHTML = `
        <div class="status-info">
            <strong>#ID-${id}</strong> | Room ${room} (${category})
            <p>${desc}</p>
        </div>
        <span class="badge submitted">Submitted</span>
    `;

   
    complaintList.prepend(newComplaint);
    this.reset();
    alert("Complaint Submitted Successfully! Tracking ID: #ID-" + id);
});
