// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

       // -------------------------------------------------------------------------
    // 08 Process Management
    // -------------------------------------------------------------------------
    { 
        type: "SINGLE", 
        text: "Which process has a higher priority (more CPU time)? Nice -15 or Nice 7?", 
        options: [
            {text: "-15", correct: true},
            {text: "7", correct: false}
        ], 
        rationale: "Lower numbers = Higher priority. -20 is max, 19 is min." 
    },
    { 
        type: "MULTI", 
        text: "Which commands can display CPU and Memory usage per process? (Select 2)", 
        options: [
            {text: "top", correct: true},
            {text: "ps aux", correct: true},
            {text: "free", correct: false},
            {text: "uptime", correct: false}
        ], 
        rationale: "top is real-time, ps aux gives a detailed snapshot including %CPU and %MEM." 
    },
    { 
        type: "FILL", 
        text: "What command is used to find the PID of a process by its name?", 
        validAnswers: ["pidof", "pgrep"], 
        rationale: "pidof or pgrep are the correct tools. 'pid' is not a command." 
    }

);