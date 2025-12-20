// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

   // -------------------------------------------------------------------------
    // 18 System Logging
    // -------------------------------------------------------------------------
    { 
        type: "FILL", 
        text: "Enter the command used to generate a log message manually to the syslog system.", 
        validAnswers: ["logger"], 
        rationale: "The command is 'logger'. 'log' does not exist." 
    },
    { 
        type: "SINGLE", 
        text: "What mechanism triggers logrotate in SLES 15?", 
        options: [
            {text: "Cron daily script", correct: false},
            {text: "Systemd Timer", correct: true},
            {text: "Manual execution only", correct: false}
        ], 
        rationale: "SLES 15 uses a systemd timer (logrotate.timer) instead of a cron job." 
    },
    { 
        type: "SINGLE", 
        text: "What does the term 'action' mean when referring to system logging (rsyslog/syslog-ng)?", 
        options: [
            {text: "An action defines where a log message ends up (file, db, remote).", correct: true},
            {text: "An action defines the severity.", correct: false},
            {text: "An action is used to filter out messages.", correct: false},
            {text: "An action is a process facility.", correct: false}
        ], 
        rationale: "In logging config, the selector filters the message, and the action defines where to write it." 
    },
    { 
        type: "SINGLE", 
        text: "What is the name of the system logging facility in SUSE Linux Enterprise?", 
        options: [
            {text: "mail-log", correct: false},
            {text: "syslog", correct: false},
            {text: "syslog-ng", correct: false},
            {text: "rsyslog / syslog-ng", correct: true} 
        ], 
        rationale: "SLES uses rsyslog or syslog-ng (depending on version/config), but syslog-ng is the traditional robust answer for SLES." 
    },

);