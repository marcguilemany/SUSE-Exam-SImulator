window.loadTopic("08 Process Management", [

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
    },
    {
        type: "SINGLE",
        text: "While trying to terminate an unresponsive process, you notice that it is in a 'stopped' state (status T). What command would you use to resume its execution regardless of whether it is a shell job or a background daemon?",
        options: [
            { text: "kill -CONT <PID>", correct: true },
            { text: "fg", correct: false },
            { text: "bg", correct: false },
            { text: "resume <PID>", correct: false }
        ],
        rationale: "<b>Why A is correct:</b> The command <code>kill -CONT</code> sends the <b>SIGCONT</b> signal (Signal 18) to the process. This is the specific kernel signal required to wake up a process from a Stopped (T) state.<br><br><b>Why others are incorrect:</b><br>- <b>fg/bg:</b> These are shell built-ins that only work on 'jobs' started within the <i>current</i> shell session. They cannot resume a daemon or a process owned by another user/session.<br>- <b>resume:</b> This is not a standard Linux command for process management."
    },
    {
        type: "SINGLE",
        text: "You are developing a script that needs to run a command in the background and immediately return control to the terminal (shell). Which of the following syntax would you use to accomplish this?",
        options: [
            { text: "command > /dev/null", correct: false },
            { text: "command &", correct: true },
            { text: "command;", correct: false },
            { text: "command & disown", correct: false }
        ],
        rationale: "<b>Why B is correct:</b> Appending the ampersand (<b>&</b>) to a command causes the shell to run the command in the background as a subshell or job, immediately returning the prompt to the user so they can continue working.<br><br><b>Why others are incorrect:</b><br>- <b>A:</b> Redirects output to null, but the shell still waits for the command to finish.<br>- <b>C:</b> The semicolon simply marks the end of a command (like a newline); it runs sequentially.<br>- <b>D:</b> While <code>& disown</code> also backgrounds the task, <code>disown</code> is a separate step used specifically to remove the job from the shell's job table (so it survives the shell closing). The primary operator for background execution is just <code>&</code>."
    },
    {
        type: "SINGLE",
        text: "You are debugging a process with PID 45678 on a SUSE Linux Enterprise Server 15 system that is not responding to SIGTERM. You need to send a SIGABRT signal to generate a core dump for analysis. Which command sends this signal?",
        options: [
            { text: "kill -INT 45678", correct: false },
            { text: "kill -TERM 45678", correct: false },
            { text: "kill -HUP 45678", correct: false },
            { text: "kill -ABRT 45678", correct: true }
        ],
        rationale: "<b>Why D is correct:</b> The command <code>kill -ABRT</code> (or <code>kill -6</code>) sends the <b>SIGABRT</b> signal. This signal is specifically designed to tell a process to abort execution immediately and (usually) generate a core dump file for debugging purposes.<br><br><b>Why others are incorrect:</b><br>- <b>INT:</b> (Signal 2) Equivalent to pressing Ctrl+C.<br>- <b>TERM:</b> (Signal 15) The default 'polite' kill signal.<br>- <b>HUP:</b> (Signal 1) Hangup, often used to reload configuration files."
    },
    



]);