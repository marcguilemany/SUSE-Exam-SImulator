window.loadTopic("10 Task Scheduling", [

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
    // SINGLE: cron basic syntax
    {
        type: "SINGLE",
        text: "Which field is the third in a standard crontab entry?",
        options: [
            {text: "Minute", correct: false},
            {text: "Hour", correct: false},
            {text: "Day of Month", correct: true},
            {text: "Month", correct: false}
        ],
        rationale: "Crontab fields: minute, hour, day of month, month, day of week."
    },

    // MULTI: crontab shortcuts
    {
        type: "MULTI",
        text: "Select valid crontab shortcuts. (Select 3)",
        options: [
            {text: "@reboot", correct: true},
            {text: "@daily", correct: true},
            {text: "@weekly", correct: true},
            {text: "@hourlyy", correct: false},
            {text: "@monthy", correct: false}
        ],
        rationale: "Valid shortcuts: @reboot, @daily, @weekly, @monthly, @yearly. Typos are invalid. https://linux.die.net/man/5/crontab"
    },

    // MATCHING: cron vs at
    {
        type: "MATCHING",
        text: "Match the scheduler command to its description.",
        pairs: [
            {term: "cron", def: "Schedules recurring tasks"},
            {term: "at", def: "Schedules one-time tasks"},
            {term: "systemd timers", def: "Schedules tasks with systemd integration"}
        ],
        rationale: "cron=recurring, at=one-shot, systemd timers=modern alternative integrated with systemd."
    },

    // SINGLE: user crontab location
    {
        type: "SINGLE",
        text: "Where is a user's personal crontab stored?",
        options: [
            {text: "/etc/crontab", correct: false},
            {text: "/var/spool/cron/tabs/<username>", correct: true},
            {text: "~/.cron", correct: false},
            {text: "/usr/local/crontab", correct: false}
        ],
        rationale: "User crontabs are stored in /var/spool/cron/tabs/<username>."
    },

    // MULTI: crontab special characters
    {
        type: "MULTI",
        text: "Which special characters can be used in crontab entries? (Select 3)",
        options: [
            {text: "*", correct: true},
            {text: "/", correct: true},
            {text: ",", correct: true},
            {text: "?", correct: false},
            {text: "&", correct: false}
        ],
        rationale: "* for any, / for step, , for multiple values."
    },

    // HOTSPOT: identify next scheduled job
    {
        type: "HOTSPOT",
        text: "Click on the next scheduled job in the crontab output.",
        image: "assets/img/crontab_output.svg",
        target: {x: 40, y: 60},
        rationale: "Understanding the timing and order of jobs is key; the next execution is shown in the first upcoming time slot."
    },

    // SINGLE: at command usage
    {
        type: "SINGLE",
        text: "Which command schedules a job using 'at' to run at 6 PM today?",
        options: [
            {text: "at 18:00 today", correct: true},
            {text: "at 6pm", correct: false},
            {text: "at now + 18h", correct: false},
            {text: "at 18", correct: false}
        ],
        rationale: "'at 18:00 today' schedules a one-time job for 6 PM."
    },

    // MULTI: systemd timer types
    {
        type: "MULTI",
        text: "Select valid systemd timer types. (Select 2)",
        options: [
            {text: "OnBootSec", correct: true},
            {text: "OnCalendar", correct: true},
            {text: "OnStartup", correct: false},
            {text: "EveryMinute", correct: false}
        ],
        rationale: "Valid timer options include OnBootSec, OnCalendar, OnUnitActiveSec, OnUnitInactiveSec."
    },

    // MATCHING: timer vs cron fields
    {
        type: "MATCHING",
        text: "Match cron fields to systemd timer equivalents.",
        pairs: [
            {term: "Minute", def: "OnCalendar='*-*-* *:MM:00'"},
            {term: "Hour", def: "OnCalendar='*-*-* HH:*:00'"},
            {term: "Day of Month", def: "OnCalendar='*-*-DD 00:00:00'"}
        ],
        rationale: "systemd timers can replicate cron schedules using OnCalendar format."
    },

    // SINGLE: disabling a cron job
    {
        type: "SINGLE",
        text: "How can you disable a user's cron job without deleting it?",
        options: [
            {text: "Rename crontab file", correct: false},
            {text: "Comment the line in crontab", correct: true},
            {text: "Move cron job to /tmp", correct: false},
            {text: "Use cron disable command", correct: false}
        ],
        rationale: "Prepending '#' to the line comments it out without deleting it."
    },

    // MULTI: checking scheduled jobs
    {
        type: "MULTI",
        text: "Which commands show currently scheduled jobs? (Select 2)",
        options: [
            {text: "crontab -l", correct: true},
            {text: "atq", correct: true},
            {text: "cron status", correct: false},
            {text: "systemctl status cron", correct: false}
        ],
        rationale: "crontab -l lists user cron jobs; atq lists queued at jobs."
    },

    // HOTSPOT: next timer activation
    {
        type: "HOTSPOT",
        text: "Click on the next activation time for the systemd timer.",
        image: "assets/img/systemd_timers.svg",
        target: {x: 15, y: 35},
        rationale: "systemd timers show NEXT= column, indicating the next execution time."
    },

    // SINGLE: run at specific date
    {
        type: "SINGLE",
        text: "How do you schedule a job with 'at' for 3 PM on December 31?",
        options: [
            {text: "at 15:00 Dec 31", correct: true},
            {text: "at 3pm 31/12", correct: false},
            {text: "at 15 Dec 31", correct: false},
            {text: "at 15:00 31-12", correct: false}
        ],
        rationale: "The 'at' command uses 'at HH:MM Month Day' syntax."
    },

    // MULTI: cron environment variables
    {
        type: "MULTI",
        text: "Which environment variables are commonly set in a cron job? (Select 3)",
        options: [
            {text: "SHELL", correct: true},
            {text: "PATH", correct: true},
            {text: "HOME", correct: true},
            {text: "USERID", correct: false}
        ],
        rationale: "SHELL, PATH, and HOME are standard environment variables for cron jobs."
    },

    // MATCHING: at command states
    {
        type: "MATCHING",
        text: "Match 'at' command job states to their meaning.",
        pairs: [
            {term: "queued", def: "Job waiting to run"},
            {term: "running", def: "Job currently executing"},
            {term: "completed", def: "Job finished successfully"},
            {term: "failed", def: "Job encountered an error"}
        ],
        rationale: "at jobs can be queued, running, completed, or failed."
    },

    // SINGLE: cron syntax trick
    {
        type: "SINGLE",
        text: "Which of the following cron lines will run at 5:30 PM every Friday?",
        options: [
            {text: "30 17 * * 5 /path/to/command", correct: true},
            {text: "17 30 * * 5 /path/to/command", correct: false},
            {text: "30 5 * * 5 /path/to/command", correct: false},
            {text: "30 17 5 * * /path/to/command", correct: false}
        ],
        rationale: "Cron syntax: minute hour day month day-of-week command."
    },

    // MULTI: disabling systemd timer
    {
        type: "MULTI",
        text: "Which commands disable a systemd timer? (Select 2)",
        options: [
            {text: "systemctl disable mytimer.timer", correct: true},
            {text: "systemctl stop mytimer.timer", correct: true},
            {text: "systemctl mask mytimer.timer", correct: true},
            {text: "systemctl remove mytimer.timer", correct: false}
        ],
        rationale: "disable prevents auto-start, stop halts running instance, mask prevents manual start."
    },

    // SINGLE: cron log location
    {
        type: "SINGLE",
        text: "Where are cron logs typically stored in SLES 15?",
        options: [
            {text: "/var/log/cron", correct: true},
            {text: "/var/log/messages", correct: false},
            {text: "/etc/cron/log", correct: false},
            {text: "/tmp/cron.log", correct: false}
        ],
        rationale: "Cron logs are stored in /var/log/cron."
    }

]);