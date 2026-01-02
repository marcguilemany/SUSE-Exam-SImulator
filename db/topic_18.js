window.loadTopic("18 System Logging", [

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

    {
        type: "MATCHING",
        text: "Match the logging component to its primary role.",
        pairs: [
            {term: "journald", def: "Captures structured logs from the kernel and services"},
            {term: "rsyslog", def: "Processes and forwards traditional syslog messages"},
            {term: "logrotate", def: "Manages log file rotation and retention"},
            {term: "supportconfig", def: "Collects system configuration and logs for support"}
        ],
        rationale: "journald is systemd native. rsyslog handles syslog format. logrotate rotates logs. supportconfig packages info for SUSE support."
    },

    {
        type: "MATCHING",
        text: "Match the log file type with its typical location.",
        pairs: [
            {term: "Kernel logs", def: "/var/log/messages"},
            {term: "Service logs (systemd)", def: "Accessed via journalctl"},
            {term: "Rotated logs", def: "/var/log/*.gz"},
            {term: "Support archive", def: "/var/tmp/supportconfig/"}
        ],
        rationale: "Kernel and messages go to /var/log, rotated logs are compressed, supportconfig generates archives."
    },

    {
        type: "MATCHING",
        text: "Match the logging concept to its meaning.",
        pairs: [
            {term: "Forwarding", def: "Sending logs to a remote server"},
            {term: "Filtering", def: "Selecting messages based on priority or facility"},
            {term: "Persistence", def: "Whether logs survive a reboot"},
            {term: "Compression", def: "Reducing size of old logs"}
        ],
        rationale: "journald can filter, compress via logrotate, forward via rsyslog, and store persistent logs."
    },

    {
        type: "MATCHING",
        text: "Match the systemd logging option with its effect.",
        pairs: [
            {term: "Storage=persistent", def: "Logs are saved across reboots"},
            {term: "Storage=volatile", def: "Logs are kept in memory only"},
            {term: "ForwardToSyslog=yes", def: "Sends logs to traditional syslog daemon"},
            {term: "Compress=yes", def: "Compresses old journal files"}
        ],
        rationale: "Persistent/volatile controls disk vs RAM, ForwardToSyslog links to rsyslog, Compress handles journal size."
    },

    {
        type: "MATCHING",
        text: "Match supportconfig options with their purpose.",
        pairs: [
            {term: "-f", def: "Force overwrite existing archive"},
            {term: "-t", def: "Test archive creation without sending"},
            {term: "-o", def: "Specify output file name"},
            {term: "-r", def: "Include only recent logs"}
        ],
        rationale: "supportconfig uses these flags to control archive creation and contents."
    },
    {
        type: "SINGLE",
        text: "On a SUSE Linux Enterprise Server 15 SP5 system, you are investigating a disk space issue caused by large log files. The <code>/etc/logrotate.conf</code> is configured with 'weekly' and 'rotate 4', but <code>/etc/logrotate.d/syslog</code> specifies 'daily' and 'rotate 7' for <code>/var/log/messages</code>.<br><br>A recent spike in logging activity caused <code>/var/log/messages</code> to grow to 2GB before rotation. Which command would you run to manually trigger log rotation for <code>/var/log/messages</code> and verify the rotation occurred?",
        options: [
            { text: "logrotate -f /etc/logrotate.conf", correct: false },
            { text: "systemctl restart logrotate", correct: false },
            { text: "logrotate -v /etc/logrotate.d/syslog", correct: true },
            { text: "logrotate -d /etc/logrotate.d/syslog", correct: false }
        ],
        rationale: "<b>Why C is correct:</b><br>1. <b>Target Specificity:</b> Running logrotate against the specific config file (<code>/etc/logrotate.d/syslog</code>) isolates the action to the problematic log, avoiding side effects on the rest of the system (unlike Option A).<br>2. <b>Verification:</b> The <code>-v</code> (verbose) flag prints the actions taken, satisfying the requirement to 'verify the rotation occurred'.<br><br><b>Why others are incorrect:</b><br>- <b>D:</b> The <code>-d</code> flag is 'debug' or 'dry-run'; it simulates the rotation but <b>does not</b> actually perform it.<br>- <b>B:</b> <code>logrotate</code> is not a daemon service; it is triggered by a timer/cron, so restarting it doesn't trigger an immediate rotation logic."
    },
    {
        type: "SINGLE",
        text: "You are managing a SUSE Linux Enterprise Server 15 SP6 system hosting a web application. The application logs are managed by rsyslog, and you need to ensure that all logs with a priority of 'warning' or higher from the application (facility local0) are sent to a dedicated file /var/log/webapp.log, while other logs continue to /var/log/messages.<br><br>Which configuration snippet should you add to /etc/rsyslog.conf to achieve this without disrupting existing logging?",
        options: [
            { text: "local0.warning /var/log/webapp.log<br>*.* /var/log/messages", correct: false },
            { text: "local0.>=warning /var/log/webapp.log<br>*.*;local0.none /var/log/messages", correct: true },
            { text: "local0.* /var/log/webapp.log<br>*.* /var/log/messages", correct: false },
            { text: "local0.warning /var/log/webapp.log<br>stop", correct: false }
        ],
        rationale: "<b>Why B is correct:</b><br>1. <b>Capture:</b> <code>local0.>=warning</code> (or simply <code>local0.warning</code>) captures messages of priority warning and higher.<br>2. <b>Exclusion (Crucial):</b> The second line <code>*.*;local0.none</code> directs all other logs to <code>/var/log/messages</code> but explicitly <b>excludes</b> <code>local0</code> (using <code>.none</code>). Without this exclusion, your application logs would appear in BOTH files (duplication), which is generally not desired when asking for a 'dedicated' log file."
    }

]);