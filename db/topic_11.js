// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

    // -------------------------------------------------------------------------
    // 11 Privilege Delegation
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Which commands allow you to switch your primary group or execute a command with a different group ID? (Select 2)", 
        options: [
            {text: "sg", correct: true},
            {text: "newgrp", correct: true},
            {text: "su", correct: false},
            {text: "chgrp", correct: false}
        ], 
        rationale: "newgrp changes the primary group for the session. sg executes a command as a different group." 
    },


);