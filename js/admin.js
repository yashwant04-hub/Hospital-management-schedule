import { db } from './firebaseConfig.js';
import {
  collection,
  addDoc,
  getDocs
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

const scheduleForm = document.getElementById('scheduleForm');
const schedulesDiv = document.getElementById('schedules');

scheduleForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    patient: document.getElementById('patient').value,
    doctor: document.getElementById('doctor').value,
    datetime: document.getElementById('datetime').value,
    otid: document.getElementById('otid').value,
    anesthesia: document.getElementById('anesthesia').value,
    anesthetist: document.getElementById('anesthetist').value,
    assistant: document.getElementById('assistant').value,
    nurses: document.getElementById('nurses').value,
    materials: document.getElementById('materials').value,
    remarks: document.getElementById('remarks').value,
  };

  try {
    await addDoc(collection(db, 'otSchedules'), data);
    alert('OT Schedule Added!');
    scheduleForm.reset();
    loadSchedules();
  } catch (err) {
    console.error(err);
    alert('Failed to add schedule');
  }
});

const loadSchedules = async () => {
  const snapshot = await getDocs(collection(db, 'otSchedules'));
  schedulesDiv.innerHTML = '';

  snapshot.forEach((doc) => {
    const d = doc.data();
    schedulesDiv.innerHTML += `
      <div class="schedule-card">
        <p><strong>Patient:</strong> ${d.patient}</p>
        <p><strong>Doctor:</strong> ${d.doctor}</p>
        <p><strong>Date & Time:</strong> ${d.datetime}</p>
        <p><strong>OT Room:</strong> ${d.otid}</p>
        <p><strong>Anesthesia:</strong> ${d.anesthesia} (${d.anesthetist})</p>
        <p><strong>Assistant:</strong> ${d.assistant}</p>
        <p><strong>Nurses:</strong> ${d.nurses}</p>
        <p><strong>Materials:</strong> ${d.materials}</p>
        <p><strong>Remarks:</strong> ${d.remarks}</p>
      </div>
    `;
  });
};

loadSchedules();

