// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

       // -------------------------------------------------------------------------
    // 09 System Service Management
    // -------------------------------------------------------------------------
    { 
        type: "SINGLE", 
        text: "How do you safely modify a systemd service configuration without editing the vendor file in /usr/lib?", 
        options: [
            {text: "Use 'systemctl edit service_name'", correct: true},
            {text: "Edit /usr/lib/systemd/system/file directly", correct: false},
            {text: "Use 'systemctl modify'", correct: false}
        ], 
        rationale: "systemctl edit creates a drop-in file in /etc/systemd/system/....d/ to override settings safely." 
    },

);