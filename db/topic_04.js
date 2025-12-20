// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

   // -------------------------------------------------------------------------
    // 04 The Linux Filesystem
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Select the valid device types in Linux. (Choose two)", 
        options: [
            {text: "Pipe", correct: false},
            {text: "null", correct: false}, // 'null' es un dispositivo específico, no un TIPO
            {text: "Redirect", correct: false},
            {text: "udev", correct: false},
            {text: "Network", correct: false},
            {text: "Character", correct: true}, // Dispositivos de caracteres (teclado, ratón, puertos serie)
            {text: "Block", correct: true}      // Dispositivos de bloques (discos duros, USB)
        ], 
        rationale: "In Linux, the main device types handled by the kernel are **Block** devices (storage, buffered) and **Character** devices (streams, unbuffered).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html' target='_blank'>📚 SUSE Docs: Device Types</a>" 
    },
    { 
        type: "MULTI", 
        text: "Which type of files are used for inter-process communications (IPC)? (Choose two)", 
        options: [
            {text: "Socket", correct: true},
            {text: "Character", correct: false},
            {text: "Redirect", correct: false},
            {text: "Array", correct: false},
            {text: "Block", correct: false},
            {text: "Pipe", correct: true}
        ], 
        rationale: "Sockets (s) and Named Pipes (p) are special file types used for communication between processes on the same system." 
    },
    { 
        type: "MULTI", 
        text: "Select the true statements regarding Hard Links vs Symbolic Links (Select 3).", 
        options: [
            {text: "Symbolic links can cross filesystem boundaries.", correct: true},
            {text: "Hard links share the same Inode number.", correct: true},
            {text: "Hard links can point to directories.", correct: false},
            {text: "Symbolic links can point to directories.", correct: true},
            {text: "If you delete the original file, the Hard Link breaks.", correct: false}
        ], 
        rationale: "Hard links are the same file (inode). Soft links are pointers and can cross partitions." 
    },
    { 
        type: "SINGLE", 
        text: "What is VFS (Virtual File System)?", 
        options: [
            {text: "A translation tool for Windows files.", correct: false},
            {text: "A kernel abstraction layer providing a common interface for all filesystems.", correct: true},
            {text: "A specific filesystem type for virtual machines.", correct: false}
        ], 
        rationale: "VFS allows the kernel to treat all filesystems (Ext4, XFS, Btrfs) uniformly." 
    },
    { 
        type: "SINGLE", 
        text: "What are the default filesystems for Root (/) and Home (/home) in SLES 15?", 
        options: [
            {text: "Root: Ext4, Home: XFS", correct: false},
            {text: "Root: Btrfs, Home: XFS", correct: true},
            {text: "Root: XFS, Home: Btrfs", correct: false},
            {text: "Root: LVM, Home: Ext4", correct: false}
        ], 
        rationale: "Btrfs is used for / to enable Snapper rollbacks. XFS is used for /home for performance." 
    },
    // --- HOTSPOT MOUNT (Colocado en Topic 04) ---
    { 
        type: "HOTSPOT", 
        text: "In the mount command output, click on the Mount Options to check if the filesystem is Read-Only (ro) or Read-Write (rw).", 
        image: "assets/img/mount_output.png", 
        target: {x: 85, y: 50}, 
        rationale: "Mount options (rw, ro, nosuid) are displayed inside parentheses at the end of the line.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html' target='_blank'>📚 SUSE Docs: Mounting</a>" 
    },
    { 
        type: "HOTSPOT", 
        text: "Click on the directory where configuration files are stored (/etc).", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Standard-unix-filesystem-hierarchy.svg/800px-Standard-unix-filesystem-hierarchy.svg.png", 
        target: {x: 35, y: 35}, 
        rationale: "/etc contains configuration files." 
    }

);