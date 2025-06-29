import { db } from './firebaseConfig.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Format datetime
const formatDateTime = (datetimeStr) => {
  const d = new Date(datetimeStr);
  return d.toLocaleString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

// Load OT Schedules
const loadOTSurgeryData = async () => {
  const container = document.getElementById('surgeryContainer');
  if (!container) return;

  container.innerHTML = "<p>Loading surgery data...</p>";

  try {
    const snapshot = await getDocs(collection(db, "otSchedules"));
    if (snapshot.empty) {
      container.innerHTML = "<p>No scheduled surgeries found.</p>";
      return;
    }

    container.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      container.innerHTML += `
        <div class="surgery-card">
          <h3>🧑‍⚕️ Patient: ${data.patient}</h3>
          <p><strong>Doctor:</strong> ${data.doctor}</p>
          <p><strong>Date & Time:</strong> ${formatDateTime(data.datetime)}</p>
          <p><strong>OT ID:</strong> ${data.otid}</p>
          <p><strong>Anesthesia:</strong> ${data.anesthesia} (${data.anesthetist || 'N/A'})</p>
          ${data.assistant ? `<p><strong>Assistant:</strong> ${data.assistant}</p>` : ""}
          ${data.nurses ? `<p><strong>Nurses:</strong> ${data.nurses}</p>` : ""}
          <p><strong>Materials:</strong> ${data.materials || 'N/A'}</p>
          <p><strong>Remarks:</strong> ${data.remarks || 'None'}</p>
        </div>
        <hr/>
      `;
    });
  } catch (error) {
    container.innerHTML = `<p style="color: red;">❌ Failed to load OT schedules: ${error.message}</p>`;
    console.error("OT Schedule Load Error:", error);
  }
};

// Load Doctors
const loadDoctorList = async () => {
  const docContainer = document.getElementById('doctorContainer');
  if (!docContainer) return;

  docContainer.innerHTML = "<p>Loading doctors...</p>";

  try {
    const snapshot = await getDocs(collection(db, "doctors"));
    if (snapshot.empty) {
      docContainer.innerHTML = "<p>No doctor data found.</p>";
      return;
    }

    docContainer.innerHTML = "";
    snapshot.forEach(doc => {
      const d = doc.data();
      docContainer.innerHTML += `
        <div class="doctor-card">
          <h4>👨‍⚕️ Dr. ${d.name}</h4>
          <p><strong>Specialization:</strong> ${d.specialization}</p>
          <p><strong>Email:</strong> ${d.email}</p>
        </div>
        <hr/>
      `;
    });
  } catch (error) {
    docContainer.innerHTML = `<p style="color: red;">❌ Failed to load doctor data: ${error.message}</p>`;
    console.error("Doctor Data Load Error:", error);
  }
};

// Load based on current page
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('surgeryContainer')) {
    loadOTSurgeryData();
  }
  if (document.getElementById('doctorContainer')) {
    loadDoctorList();
  }
});


