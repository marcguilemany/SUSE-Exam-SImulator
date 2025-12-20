// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

    // -------------------------------------------------------------------------
    // 06 Users and Groups
    // -------------------------------------------------------------------------
    { 
        type: "HOTSPOT", 
        text: "Identify where the added secondary group for a user is displayed in the 'id' command output.", 
        // --- AQUÍ VA TU IMAGEN DEL COMANDO ID ---
        image: "assets/img/id_command_output.png", 
        target: {x: 90, y: 50}, 
        rationale: "Secondary groups appear at the very end of the 'id' command output.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-users.html' target='_blank'>📚 SUSE Docs: User Identity</a>" 
    },

);