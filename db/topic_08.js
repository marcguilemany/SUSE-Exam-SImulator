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
    },
    {
        type: "SINGLE",
        text: "Which tool should be used to schedule a recurring task that runs every night at 02:00?",
        options: [
            {text: "at", correct: false},
            {text: "cron", correct: true},
            {text: "systemctl", correct: false},
            {text: "nice", correct: false}
        ],
        rationale: "cron is designed for recurring jobs. The 'at' command is used for one-time execution only."
    },

    {
        type: "SINGLE",
        text: "You need to schedule a command to run once, tomorrow at 18:00. Which tool is most appropriate?",
        options: [
            {text: "crontab", correct: false},
            {text: "systemd timer", correct: false},
            {text: "at", correct: true},
            {text: "nohup", correct: false}
        ],
        rationale: "'at' is specifically used for one-time scheduled jobs."
    },

    {
        type: "MULTI",
        text: "Which files control user access to the cron service? (Select 2)",
        options: [
            {text: "/etc/cron.allow", correct: true},
            {text: "/etc/cron.deny", correct: true},
            {text: "/etc/crontab", correct: false},
            {text: "/var/spool/cron", correct: false}
        ],
        rationale: "cron.allow and cron.deny define which users are permitted or denied access to cron."
    },

    {
        type: "SINGLE",
        text: "If both /etc/cron.allow and /etc/cron.deny exist, which file takes precedence?",
        options: [
            {text: "/etc/cron.deny", correct: false},
            {text: "/etc/cron.allow", correct: true},
            {text: "Both are evaluated equally", correct: false},
            {text: "Neither file is used", correct: false}
        ],
        rationale: "If cron.allow exists, only users listed there may use cron, regardless of cron.deny."
    },

    {
        type: "SINGLE",
        text: "Where are user-specific crontab files stored internally on SLES?",
        options: [
            {text: "/etc/crontabs", correct: false},
            {text: "/var/spool/cron/tabs", correct: true},
            {text: "/home/user/.cron", correct: false},
            {text: "/etc/cron.d", correct: false}
        ],
        rationale: "User crontabs are stored in /var/spool/cron/tabs and should not be edited manually."
    },

    {
        type: "MULTI",
        text: "Which components are required for a systemd timer to work? (Select 2)",
        options: [
            {text: "A .timer unit", correct: true},
            {text: "A corresponding .service unit", correct: true},
            {text: "A cron entry", correct: false},
            {text: "An at job", correct: false}
        ],
        rationale: "systemd timers trigger service units. Both the .timer and .service units are required."
    },

    {
        type: "SINGLE",
        text: "Which systemd command lists all active timers?",
        options: [
            {text: "systemctl status timers", correct: false},
            {text: "systemctl list-timers", correct: true},
            {text: "systemctl show timers", correct: false},
            {text: "timectl list", correct: false}
        ],
        rationale: "systemctl list-timers displays all active systemd timers."
    },

    {
        type: "SINGLE",
        text: "You want a scheduled task to survive system reboots and run even if the system was powered off at the scheduled time. Which feature supports this?",
        options: [
            {text: "cron", correct: false},
            {text: "anacron", correct: false},
            {text: "Persistent systemd timers", correct: true},
            {text: "atd", correct: false}
        ],
        rationale: "Persistent systemd timers can trigger jobs that were missed while the system was offline."
    },

    {
        type: "FILL",
        text: "Which command is used to edit the current user's crontab?",
        validAnswers: ["crontab -e"],
        rationale: "crontab -e opens the user's crontab using the default editor."
    },

    {
        type: "MATCHING",
        text: "Match the scheduling tool with its purpose.",
        pairs: [
            {term: "cron", def: "Recurring scheduled jobs"},
            {term: "at", def: "One-time scheduled jobs"},
            {term: "systemd timer", def: "Event-based or time-based scheduling integrated with systemd"}
        ],
        rationale: "Each tool serves a different scheduling use case in SLES."
    }



);