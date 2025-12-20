// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

       // -------------------------------------------------------------------------
    // 10 Task Scheduling
    // -------------------------------------------------------------------------
    { 
        type: "FILL", 
        text: "Enter the crontab line to run a script at 10:35, on the 28th of every month, AND every Friday.", 
        validAnswers: ["35 10 28 * 5"], 
        rationale: "Min(35) Hour(10) Dom(28) Month(*) Dow(5). Note: Day of Month and Day of Week is an OR (Union) condition." 
    },
    { 
        type: "SINGLE", 
        text: "How often is a script in /etc/cron.weekly executed?", 
        options: [
            {text: "Once a day", correct: false},
            {text: "Once a week", correct: true},
            {text: "Once a month", correct: false}
        ], 
        rationale: "As the name suggests, it runs once every 7 days." 
    },
    { 
        type: "FILL", 
        text: "Command to edit the current user's crontab?", 
        validAnswers: ["crontab -e"], 
        rationale: "crontab -e opens the editor defined in $EDITOR." 
    },

);