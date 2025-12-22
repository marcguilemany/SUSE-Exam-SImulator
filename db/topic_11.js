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
    }

);