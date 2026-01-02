window.loadTopic("12 Remote Administration", [

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
    },
    {
        type: "MULTI",
        text: "How are the scripts in the /etc/grub.d directory used? (Choose two)",
        options: [
            { text: "The contents of these scripts are incorporated into the /boot/grub2/custom.cfg file.", correct: false },
            { text: "The contents of these scripts are incorporated into the /etc/grub2.d/configFile.", correct: false },
            { text: "The contents of these scripts are incorporated into the /boot/grub2/grub.cfg file.", correct: true },
            { text: "These scripts are taken as input by the mkinitrd command.", correct: false },
            { text: "These scripts are taken as input by the grub2-init command.", correct: false },
            { text: "These scripts are taken as input by the grub2-mkconfig command.", correct: true }
        ],
        rationale: "The <b>grub2-mkconfig</b> command generates the main configuration file (<b>/boot/grub2/grub.cfg</b>). It does this by combining the settings from <code>/etc/default/grub</code> with the executable scripts located in <b>/etc/grub.d/</b>."
    },
    {
        type: "SINGLE",
        text: "Which command would you run to create an updated initial file system, if your server hardware requires additional drivers to be available for the Kernel at boot up?",
        options: [
            { text: "modinitd", correct: false },
            { text: "mkinitrd", correct: true },
            { text: "newinitfs", correct: false },
            { text: "makeinitfs", correct: false },
            { text: "updinitrd", correct: false }
        ],
        rationale: "The <b>mkinitrd</b> command creates an initial RAM disk image (initrd). This image is loaded by the boot loader and makes kernel modules (drivers) available so the kernel can mount the root filesystem. <br><br>If you add hardware drivers or change kernel configurations, you must run <code>mkinitrd</code> to rebuild this image."
    },
    {
        type: "SINGLE",
        text: "In a scenario where you are configuring remote access via RDP (Remote Desktop Protocol), which of the following security measures should you implement to protect the server from unauthorized access?",
        options: [
            { text: "Use a strong password policy for RDP users", correct: true },
            { text: "Allow all incoming connections on port 3389", correct: false },
            { text: "Disable network-level authentication", correct: false },
            { text: "Allow RDP access for all users", correct: false }
        ],
        rationale: "<b>A is correct:</b> Strong passwords are the first line of defense against brute-force attacks, which are very common on RDP ports.<br><br><b>Why the others are insecure:</b><br>- <b>B:</b> Port 3389 should be restricted via firewall to specific IPs or VPNs, never open to the entire internet.<br>- <b>C:</b> Network Level Authentication (NLA) should be <b>enabled</b>, as it authenticates the user before a session is created.<br>- <b>D:</b> Follow the Principle of Least Privilege: only grant access to users who specifically need it."
    },
    {
        type: "MULTIPLE",
        text: "What types of VNC sessions does SUSE Linux Enterprise Server support? (Choose two)",
        options: [
            { text: "Automatic Sessions", correct: false },
            { text: "One-time Sessions", correct: true },
            { text: "Server-initiated Sessions", correct: false },
            { text: "Persistent Sessions", correct: true },
            { text: "Timed Sessions", correct: false }
        ],
        rationale: "<b>Why B and D are correct:</b> SUSE Linux Enterprise Server distinguishes between two main VNC modes:<br>1. <b>One-time Sessions (B):</b> These are started on demand (usually via a browser or vncviewer to a specific port managed by systemd/xinetd). They present a login screen (XDM/GDM), and the session terminates automatically when the user logs out or disconnects.<br>2. <b>Persistent Sessions (D):</b> These are started manually (or via script) using the <code>vncserver</code> command. They run independently of the client connection. You can disconnect, go home, reconnect later, and your windows/applications will still be open exactly as you left them."
    },
    {
        type: "SINGLE",
        text: "You want to restrict access to your server via SSH to just a few specific users. What will you need to do to accomplish this?",
        options: [
            { text: "Modify the Authorized option in the /etc/ssh/sshd_config file.", correct: false },
            { text: "Modify the Permitted option in the ~/.ssh/sshd_config file", correct: false },
            { text: "Modify the Permitted option is the /ssh/sshd_config file.", correct: false },
            { text: "Modify the AllowUsers option in the /etc/ssh/sshd_config file.", correct: true },
            { text: "Modify the Authorized option in the /var/ssh/config file.", correct: false }
        ],
        rationale: "<b>Why D is correct:</b> The main configuration file for the SSH daemon (server) is located at <code>/etc/ssh/sshd_config</code>. To restrict access to specific users, you use the <b>AllowUsers</b> directive (e.g., <code>AllowUsers alice bob</code>). This creates a whitelist; anyone not listed is denied access.<br><br><b>Why others are incorrect:</b><br>- <b>Authorized/Permitted:</b> These are not valid configuration directives for user filtering in sshd.<br>- <b>File Locations:</b> <code>~/.ssh/</code> is for user-specific keys and client config, not server global config. <code>/var/ssh/</code> is not a standard path for configuration."
    },


]);