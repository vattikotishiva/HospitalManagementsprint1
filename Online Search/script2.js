document.addEventListener('DOMContentLoaded', () => {
  const patientList = document.getElementById('patient-list');
  const filterSelect = document.getElementById('filter-select');
  const searchForm = document.getElementById('search-form');
  const searchMessage = document.getElementById('search-message');

  // Sample patient data (replace with actual data retrieval logic)
  const patients = [
    { 
      id: 1,
      name: "John Doe",
      age: 30,
      bloodGroup: "A+",
      dateOfJoining: "2022-01-15",
      disease: "Hypertension",
      department: "Cardiology",
      active: true 
    },
    { 
      id: 2,
      name: "Jane Smith",
      age: 25,
      bloodGroup: "O-",
      dateOfJoining: "2022-03-20",
      disease: "Diabetes",
      department: "Endocrinology",
      active: true 
    },
    { 
      id: 3,
      name: "Mike Johnson",
      age: 40,
      bloodGroup: "B+",
      dateOfJoining: "2021-11-05",
      disease: "Asthma",
      department: "Pulmonology",
      active: false 
    },
    // Add more patient data...
    { 
      id: 4,
      name: "Emily Brown",
      age: 35,
      bloodGroup: "AB-",
      dateOfJoining: "2022-02-10",
      disease: "Arthritis",
      department: "Rheumatology",
      active: false 
    },
    // Add more patient data...
    { 
      id: 5,
      name: "David Johnson",
      age: 28,
      bloodGroup: "A-",
      dateOfJoining: "2022-04-01",
      disease: "Migraine",
      department: "Neurology",
      active: true 
    },
    // Add more patient data...
  ];

  // Function to populate patient table
  function populatePatientTable(data) {
    patientList.innerHTML = ''; // Clear previous data
    data.forEach(patient => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>${patient.bloodGroup}</td>
        <td>${patient.dateOfJoining}</td>
        <td>${patient.disease}</td>
        <td>${patient.department}</td>
        <td>${patient.active ? '<span class="active-dot"></span> Active' : 'Old'}</td>
      `;
      patientList.appendChild(row);
    });
  }

  // Function to filter patients based on status
  function filterPatients(status) {
    let filteredPatients = patients;
    if (status === 'active') {
      filteredPatients = patients.filter(patient => patient.active);
    } else if (status === 'old') {
      filteredPatients = patients.filter(patient => !patient.active);
    }
    populatePatientTable(filteredPatients);
  }

  // Initial population of patient table
  populatePatientTable(patients);

  // Event listener for filter selection
  filterSelect.addEventListener('change', (event) => {
    const selectedStatus = event.target.value;
    filterPatients(selectedStatus);
  });

  // Event listener for patient search form submission
  // searchForm.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const patientId = parseInt(document.getElementById('patient-id').value);
  //   searchPatientById(patientId);
  // });

  // Function to search patient by ID
  function searchPatientById() {
    const patientId = document.getElementById('patient-id');
    console.log(patientId);
    const foundPatient = patients.find(patient => patient.id === patientId);
      
    if (foundPatient) {
      showMessage("Patient found!", "success");
      populatePatientTable([foundPatient]); // Display only the found patient
    } else {
      showMessage("Patient not found!");
      populatePatientTable([]); // Clear table if patient not found
    }
  }

  // Function to display search messages
  function showMessage(message, type = "error") {
    searchMessage.textContent = message;
    searchMessage.className = type; // Use className to set the message class
  }
});
