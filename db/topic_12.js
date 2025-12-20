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
    }

);