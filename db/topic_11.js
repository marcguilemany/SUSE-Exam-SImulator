window.loadTopic("11 Privilege Delegation", [

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
    // MATCHING: UID concepts
    {
        type: "MATCHING",
        text: "Match the UID concept to its description.",
        pairs: [
            {term: "Real UID (RUID)", def: "Identifies the user who started the process"},
            {term: "Effective UID (EUID)", def: "Determines the permissions of the process"},
            {term: "Saved UID", def: "Allows a process to temporarily drop and regain privileges"},
            {term: "Root UID", def: "UID 0, unrestricted system access"}
        ],
        rationale: "The Effective UID controls access checks; Real UID identifies the user; Saved UID enables privilege switching."
    },

    // MATCHING: GID concepts
    {
        type: "MATCHING",
        text: "Match the GID concept to its description.",
        pairs: [
            {term: "Real GID", def: "Primary group of the user"},
            {term: "Effective GID", def: "Group permissions applied to the process"},
            {term: "Supplementary Groups", def: "Additional groups assigned to a user"}
        ],
        rationale: "Processes can belong to multiple groups; Effective GID defines access at runtime."
    },

    // SINGLE: setuid meaning
    {
        type: "SINGLE",
        text: "What is the main effect of the setuid bit on an executable file?",
        options: [
            {text: "The file runs with the permissions of the file owner", correct: true},
            {text: "The file runs only by root", correct: false},
            {text: "The file can be executed by any group", correct: false},
            {text: "The file becomes read-only", correct: false}
        ],
        rationale: "setuid causes the Effective UID of the process to be the file owner's UID."
    },

    // MULTI: setuid / setgid behavior
    {
        type: "MULTI",
        text: "Select all true statements regarding setuid and setgid. (Select 3)",
        options: [
            {text: "setuid is ignored on shell scripts", correct: true},
            {text: "setgid on a directory causes new files to inherit the group", correct: true},
            {text: "setuid always grants full root access", correct: false},
            {text: "setgid can apply to both files and directories", correct: true},
            {text: "setuid works on symbolic links", correct: false}
        ],
        rationale: "setuid is ignored on scripts, setgid works on files and directories, and does not automatically imply root access."
    },

    // MATCHING: sudo vs su
    {
        type: "MATCHING",
        text: "Match the command to its behavior.",
        pairs: [
            {term: "su", def: "Switches user identity after authentication"},
            {term: "su -", def: "Switches user and loads full login environment"},
            {term: "sudo", def: "Executes a command with elevated privileges"},
            {term: "sudo -i", def: "Starts a root login shell"}
        ],
        rationale: "su changes user, sudo runs commands with delegated privileges, -i simulates login shell."
    },

    // SINGLE: sudoers file
    {
        type: "SINGLE",
        text: "Which file defines sudo privileges on a SLES system?",
        options: [
            {text: "/etc/sudo.conf", correct: false},
            {text: "/etc/sudoers", correct: true},
            {text: "/etc/security/sudo", correct: false},
            {text: "/var/lib/sudo", correct: false}
        ],
        rationale: "Sudo permissions are defined in /etc/sudoers and included files."
    },

    // MULTI: sudo best practices
    {
        type: "MULTI",
        text: "Which are recommended best practices when managing sudo privileges? (Select 3)",
        options: [
            {text: "Use visudo to edit sudoers", correct: true},
            {text: "Grant full root access whenever possible", correct: false},
            {text: "Grant least privilege necessary", correct: true},
            {text: "Use groups instead of individual users", correct: true},
            {text: "Disable logging for sudo commands", correct: false}
        ],
        rationale: "visudo prevents syntax errors, least privilege is key, and group-based rules scale better."
    },

    // SINGLE: NOPASSWD meaning
    {
        type: "SINGLE",
        text: "What does the NOPASSWD option in sudoers allow?",
        options: [
            {text: "Run commands without entering a password", correct: true},
            {text: "Disable authentication permanently", correct: false},
            {text: "Skip logging of sudo commands", correct: false},
            {text: "Grant root shell access only", correct: false}
        ],
        rationale: "NOPASSWD allows password-less execution of specific commands."
    },

    // MATCHING: sudoers elements
    {
        type: "MATCHING",
        text: "Match the sudoers element to its meaning.",
        pairs: [
            {term: "ALL=(ALL)", def: "Run commands as any user"},
            {term: "NOPASSWD:", def: "No password required"},
            {term: "%admin", def: "Applies rule to group admin"},
            {term: "/usr/bin/systemctl", def: "Allowed command"}
        ],
        rationale: "sudoers rules define who can run what, as whom, and under which conditions."
    },

    // MULTI: security implications
    {
        type: "MULTI",
        text: "Which are potential security risks of improper privilege delegation? (Select 3)",
        options: [
            {text: "Privilege escalation", correct: true},
            {text: "Unauthorized system modification", correct: true},
            {text: "Increased system performance", correct: false},
            {text: "Audit trail loss", correct: true},
            {text: "Improved accountability", correct: false}
        ],
        rationale: "Poor privilege management can lead to escalation, unauthorized changes, and loss of traceability."
    },
    {
        type: "SINGLE",
        text: "In a systemd service unit, which of the following directives indicates a dependency where the service tries to start the specified units (weak dependency), but does not fail if they are missing?",
        options: [
            { text: "After=", correct: false },
            { text: "Wants=", correct: true },
            { text: "ConditionPathExists=", correct: false },
            { text: "OnFailure=", correct: false }
        ],
        rationale: "<b>Why B is correct:</b> The <code>Wants=</code> directive configures a 'weak' dependency. If Unit A <i>Wants</i> Unit B, systemd will try to start Unit B when Unit A starts. However, if Unit B fails to start, Unit A will <b>continue</b> running (unlike <code>Requires=</code>, which is a strong dependency).<br><br><b>Why others are incorrect:</b><br>- <code>After=</code>: Only controls <b>ordering</b> (wait until X has started), it does not <i>trigger</i> the start of X.<br>- <code>ConditionPathExists=</code>: Checks if a file exists before starting, it's not a unit dependency.<br>- <code>OnFailure=</code>: Specifies units to activate only when this unit fails."
    },
    {
        type: "SINGLE",
        text: "In a systemd service unit, which of the following directives configures a 'weak' dependency, meaning this service will try to start the specified units, but will not fail if those units are missing or fail to start?",
        options: [
            { text: "After=", correct: false },
            { text: "Wants=", correct: true },
            { text: "ConditionPathExists=", correct: false },
            { text: "OnFailure=", correct: false }
        ],
        rationale: "<b>Correction from source:</b> The original dump text describes the behavior of <code>Requisite=</code> (fail if not active) but marks <code>Wants=</code> as correct. To make the question valid:<br><br><b>Wants= (Option B)</b> creates a <b>weak dependency</b>. It attempts to start the referenced unit, but does not strictly require it to succeed.<br><br><b>Comparison:</b><br>- <b>Requires=:</b> Strong dependency (fails if the other unit fails).<br>- <b>After=:</b> Ordering only (waits for the other unit, but doesn't trigger it).<br>- <b>Requisite=:</b> Fails immediately if the other unit is not <i>already</i> active."
    },
    {
        type: "SINGLE",
        text: "You are managing a SUSE Linux Enterprise Server 15 system where a critical application service (app.service) must be part of a custom systemd target (app-stack.target).<br><br>The target should pull in app.service and db.service, ensuring they start after network-online.target. The target must be active in the multi-user.target runlevel.<br><br>Which target unit file configuration is correct?",
        options: [
            { text: "[Unit] Requires=app.service db.service, After=network.target<br>[Install] WantedBy=graphical.target", correct: false },
            { text: "[Unit] Wants=app.service db.service, After=network-online.target<br>[Install] WantedBy=multi-user.target", correct: true },
            { text: "[Unit] After=app.service db.service, Requires=network-online.target<br>[Unit] PartOf=multi-user.target", correct: false },
            { text: "[Unit] Wants=network-online.target, Requires=app.service db.service<br>[Install] WantedBy=default.target", correct: false }
        ],
        rationale: "<b>Why B is correct:</b><br>1. <b>Wants=...:</b> This is the standard way for a Target to 'pull in' or group other units (app and db) without causing a critical failure if one is missing (unlike <code>Requires</code>).<br>2. <b>After=network-online.target:</b> Explicitly meets the requirement to wait for full network connectivity.<br>3. <b>WantedBy=multi-user.target:</b> Meets the requirement to be active in the multi-user runlevel (runlevel 3 equivalent).<br><br><b>Why others are wrong:</b><br>- <b>A:</b> Uses <code>network.target</code> (too early, usually just means service started, not IP assigned) and targets <code>graphical.target</code>.<br>- <b>C:</b> <code>After=app.service</code> would mean the target waits for the app to finish starting before the target considers itself 'started', which is often backwards for a grouping target logic."
    },
]);