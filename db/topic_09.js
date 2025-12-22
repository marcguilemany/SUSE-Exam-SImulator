// -------------------------------------------------------------------------
// 09 Privilege Delegation
// -------------------------------------------------------------------------
window.loadTopic("09 Privilege Delegation", [
    {
        type: "SINGLE",
        text: "Which identifier determines the permissions a running process actually has?",
        options: [
            {text: "UID", correct: false},
            {text: "GID", correct: false},
            {text: "EUID (Effective User ID)", correct: true},
            {text: "SID", correct: false}
        ],
        rationale: "The Effective User ID (EUID) defines the permissions used by the kernel to authorize actions."
    },

    {
        type: "SINGLE",
        text: "What is the primary purpose of the SUID permission bit?",
        options: [
            {text: "Allow a file to be executed by any user", correct: false},
            {text: "Execute a program with the file owner's privileges", correct: true},
            {text: "Allow group members to edit the file", correct: false},
            {text: "Restrict file execution", correct: false}
        ],
        rationale: "SUID causes the executable to run with the permissions of the file owner."
    },

    {
        type: "SINGLE",
        text: "A user runs a command via sudo. Which user ID is used by the executed command?",
        options: [
            {text: "The user's UID", correct: false},
            {text: "The user's EUID", correct: false},
            {text: "root's UID", correct: true},
            {text: "The group owner's UID", correct: false}
        ],
        rationale: "sudo runs commands with root privileges unless configured otherwise."
    },

    {
        type: "MULTI",
        text: "Which statements about sudo are true? (Select 2)",
        options: [
            {text: "sudo permissions are configured in /etc/sudoers", correct: true},
            {text: "sudo permanently changes the user's UID", correct: false},
            {text: "sudo allows fine-grained command delegation", correct: true},
            {text: "sudo replaces the need for root entirely", correct: false}
        ],
        rationale: "sudo enables controlled privilege escalation without permanently changing user identity."
    },

    {
        type: "SINGLE",
        text: "Why is editing /etc/sudoers directly with a text editor discouraged?",
        options: [
            {text: "It breaks SELinux", correct: false},
            {text: "Syntax errors can lock out all sudo access", correct: true},
            {text: "The file is read-only", correct: false},
            {text: "sudo ignores manual changes", correct: false}
        ],
        rationale: "visudo performs syntax validation to prevent configuration errors."
    },

    {
        type: "FILL",
        text: "Which command safely edits the sudo configuration file?",
        validAnswers: ["visudo"],
        rationale: "visudo locks the file and checks syntax before saving."
    },

    {
        type: "SINGLE",
        text: "What happens if the SGID bit is set on a directory?",
        options: [
            {text: "Files inherit the owner's UID", correct: false},
            {text: "Files inherit the directory's group ownership", correct: true},
            {text: "Only root can access the directory", correct: false},
            {text: "The directory becomes read-only", correct: false}
        ],
        rationale: "SGID on directories enforces group inheritance for newly created files."
    },

    {
        type: "MULTI",
        text: "Which risks are associated with improper use of SUID binaries? (Select 2)",
        options: [
            {text: "Privilege escalation vulnerabilities", correct: true},
            {text: "Reduced system performance", correct: false},
            {text: "Security exposure if binaries are exploitable", correct: true},
            {text: "Automatic password expiration", correct: false}
        ],
        rationale: "SUID binaries can be abused if they contain vulnerabilities."
    },

    {
        type: "SINGLE",
        text: "Which scenario is best suited for sudo instead of setting SUID on a binary?",
        options: [
            {text: "Allowing users to reboot the system", correct: true},
            {text: "Granting permanent root shells", correct: false},
            {text: "Running untrusted third-party programs", correct: false},
            {text: "Changing file ownership globally", correct: false}
        ],
        rationale: "sudo provides controlled, auditable access to specific administrative actions."
    },

    {
        type: "MATCHING",
        text: "Match the privilege mechanism with its description.",
        pairs: [
            {term: "SUID", def: "Execute with file owner's privileges"},
            {term: "SGID", def: "Execute or create files with group privileges"},
            {term: "sudo", def: "Temporary privilege escalation with auditing"}
        ],
        rationale: "Each mechanism handles privilege delegation differently."
    }

]);
