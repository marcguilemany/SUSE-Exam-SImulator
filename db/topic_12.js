// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

    // -------------------------------------------------------------------------
    // 12 Remote Administration
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Which of the following are considered native remote administration utilities in SLES? (Select 2)", 
        options: [
            {text: "ssh", correct: true},
            {text: "vnc", correct: true},
            {text: "putty", correct: false},
            {text: "ftp", correct: false}
        ], 
        rationale: "SSH (CLI) and VNC (Graphical) are the standard supported tools. Putty is a 3rd party Windows client." 
    },
    { 
        type: "SINGLE", 
        text: "Regarding VNC security in SLES 15, which statement is true about default connections?", 
        options: [
            {text: "VNC is based on Telnet so encryption is impossible.", correct: false},
            {text: "The VNC Client checks for a TLS encrypted connection by default.", correct: true},
            {text: "It uses a self-signed SSL certificate automatically trusted by all clients.", correct: false},
            {text: "The server prompts for a password configured during installation only.", correct: false}
        ], 
        rationale: "SLES 15 supports TLS encryption for VNC. If a connection is not encrypted, the client usually displays a warning '(Connection not encrypted!)'.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-remote-admin.html#sec-vnc-secure' target='_blank'>📚 SUSE Docs: VNC Security</a>" 
    },
        { 
        type: "SINGLE", 
        text: "You want to run a long process on a remote server and keep it running even if your SSH connection drops. Which command allows this?", 
        options: [
            {text: "screen", correct: true},
            {text: "bg", correct: false},
            {text: "tty-release", correct: false},
            {text: "detach", correct: false}
        ], 
        rationale: "The 'screen' (or 'tmux') command allows you to detach and reattach sessions.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-shell.html' target='_blank'>📚 SUSE Docs: Screen</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What is the default TCP port a VNC Client uses to connect to the first display (:1)?", 
        options: [
            {text: "5901", correct: true},
            {text: "5900", correct: false},
            {text: "5801", correct: false},
            {text: "3389", correct: false}
        ], 
        rationale: "VNC starts at 5900. Display :0 is 5900, Display :1 is 5901, etc." 
    },
    {
        type: "SINGLE",
        text: "Which protocol is the default and recommended method for secure remote administration on SLES?",
        options: [
            {text: "Telnet", correct: false},
            {text: "SSH", correct: true},
            {text: "RDP", correct: false},
            {text: "VNC", correct: false}
        ],
        rationale: "SSH provides encrypted communication and secure authentication."
    },

    {
        type: "SINGLE",
        text: "What is the primary advantage of SSH key-based authentication over password authentication?",
        options: [
            {text: "It is faster to type", correct: false},
            {text: "It enables graphical sessions", correct: false},
            {text: "It improves security by eliminating password transmission", correct: true},
            {text: "It automatically grants root access", correct: false}
        ],
        rationale: "SSH keys remove the need to transmit passwords and are resistant to brute-force attacks."
    },

    {
        type: "MULTI",
        text: "Which files are involved in SSH key-based authentication? (Select 2)",
        options: [
            {text: "~/.ssh/id_rsa", correct: true},
            {text: "~/.ssh/authorized_keys", correct: true},
            {text: "/etc/ssh/ssh_config", correct: false},
            {text: "/var/log/secure", correct: false}
        ],
        rationale: "The private key resides in id_rsa, and the public key is stored in authorized_keys."
    },

    {
        type: "SINGLE",
        text: "Where should the public SSH key of a user be placed on the remote system?",
        options: [
            {text: "~/.ssh/id_rsa", correct: false},
            {text: "~/.ssh/authorized_keys", correct: true},
            {text: "/etc/ssh/sshd_config", correct: false},
            {text: "/var/lib/ssh", correct: false}
        ],
        rationale: "authorized_keys contains the public keys allowed to authenticate."
    },

    {
        type: "SINGLE",
        text: "Which configuration file controls the behavior of the SSH daemon?",
        options: [
            {text: "/etc/ssh/ssh_config", correct: false},
            {text: "/etc/ssh/sshd_config", correct: true},
            {text: "~/.ssh/config", correct: false},
            {text: "/etc/services", correct: false}
        ],
        rationale: "sshd_config defines server-side SSH settings."
    },

    {
        type: "MULTI",
        text: "Which statements about VNC are true? (Select 2)",
        options: [
            {text: "VNC provides remote graphical access", correct: true},
            {text: "VNC traffic is encrypted by default", correct: false},
            {text: "VNC can be tunneled through SSH for security", correct: true},
            {text: "VNC replaces SSH completely", correct: false}
        ],
        rationale: "VNC itself is not encrypted, but SSH tunneling secures the connection."
    },

    {
        type: "SINGLE",
        text: "Which remote access technology is commonly used to connect to Linux systems from Windows clients with a graphical desktop?",
        options: [
            {text: "SSH", correct: false},
            {text: "VNC", correct: false},
            {text: "RDP", correct: true},
            {text: "Telnet", correct: false}
        ],
        rationale: "RDP is widely used by Windows clients and supported on SLES."
    },

    {
        type: "SINGLE",
        text: "You want to prevent direct root login via SSH. Which option should be configured?",
        options: [
            {text: "PermitRootLogin no", correct: true},
            {text: "AllowRootSSH false", correct: false},
            {text: "RootLogin disabled", correct: false},
            {text: "DenyRootAccess yes", correct: false}
        ],
        rationale: "The PermitRootLogin directive controls root SSH access."
    },

    {
        type: "FILL",
        text: "Which command copies your public SSH key to a remote host for passwordless login?",
        validAnswers: ["ssh-copy-id"],
        rationale: "ssh-copy-id installs the public key into authorized_keys on the remote host."
    },

    {
        type: "MATCHING",
        text: "Match the remote administration method to its typical use case.",
        pairs: [
            {term: "SSH", def: "Secure command-line administration"},
            {term: "VNC", def: "Remote graphical desktop access"},
            {term: "RDP", def: "Windows-compatible remote desktop access"}
        ],
        rationale: "Each tool is suited to a different remote administration scenario."
    }


);