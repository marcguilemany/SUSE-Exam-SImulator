// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

      // -------------------------------------------------------------------------
    // 17 Software Management
    // -------------------------------------------------------------------------
        { 
        type: "MULTI", 
        text: "Which statements about 'rpm -U' vs 'rpm -F' are true? (Select 2)", 
        options: [
            {text: "-U (Upgrade) installs the package even if not previously installed.", correct: true},
            {text: "-F (Freshen) installs the package even if not previously installed.", correct: false},
            {text: "-U removes binaries from the database only.", correct: false},
            {text: "-F installs the package ONLY if an older version is already installed.", correct: true}
        ], 
        rationale: "-U (Upgrade) = Install or Update. -F (Freshen) = Update only (must exist)." 
    },
    { 
        type: "SINGLE", 
        text: "Which zypper command lists available patches (updates) needed by your system?", 
        options: [
            {text: "zypper lp", correct: true},
            {text: "zypper patch", correct: false}, // Esto INSTALA los parches
            {text: "zypper up", correct: false},
            {text: "zypper list-updates", correct: false}
        ], 
        rationale: "'lp' stands for 'list-patches'. 'patch' installs them." 
    },
    { 
        type: "HOTSPOT", 
        text: "In the filename 'bash-4.4-23.1.x86_64.rpm', click specifically on the 'Release' number.", 
        image: "assets/img/rpm_release.svg", 
        target: {x: 48, y: 55}, // Apunta al '23.1' en la imagen generada
        rationale: "RPM naming convention is: Name-Version-Release.Arch.rpm.<br>In 'bash-4.4-23.1', 'bash' is the Name, '4.4' is the Version, and '23.1' is the Release (SUSE build number).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-sw-cl.html' target='_blank'>📚 SUSE Docs: RPM Naming</a>" 
    },
    { 
        type: "SINGLE", 
        text: "You have added a new directory to /etc/exports. Which command makes it available without restarting the service?", 
        options: [
            {text: "exportfs -r", correct: true},
            {text: "/usr/sbin/rpc.mountd -restart", correct: false},
            {text: "systemctl restart nfs", correct: false},
            {text: "mount -a", correct: false}
        ], 
        rationale: "'exportfs -r' (reexport) refreshes the list of exported directories from /etc/exports without disconnecting active clients.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-nfs.html' target='_blank'>📚 SUSE Docs: Exporting NFS</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What is required to access updates for SLE?", 
        options: [
            {text: "A Software Subscription", correct: false},
            {text: "Nothing", correct: false},
            {text: "Account Registration", correct: false},
            {text: "An account with SUSE Customer Center", correct: false},
            {text: "An account with SUSE Customer Center and a SLE Product Key", correct: true}
        ], 
        rationale: "To access repositories and updates, you need to register with SCC using a Product Key." 
    },
    { 
        type: "MULTI", 
        text: "What two commands will you use if you are going to compile and install from source code? (Choose two)", 
        options: [
            {text: "compile", correct: false},
            {text: "make install", correct: true},
            {text: "assemble", correct: false},
            {text: "./configure", correct: true},
            {text: "./compile", correct: false}
        ], 
        rationale: "The standard workflow is usually: ./configure, make, and make install." 
    },
    { 
        type: "SINGLE", 
        text: "What is the command to remove repository number 4?", 
        options: [
            {text: "yumrepo -del 4", correct: false},
            {text: "zypper rr 4", correct: true},
            {text: "rpm -e 4", correct: false},
            {text: "yast remove 4", correct: false}
        ], 
        rationale: "`zypper rr` stands for removerepo." 
    },
    { 
        type: "FILL", 
        text: "Which rpm flag displays a progress bar with hash marks (#) during installation?", 
        validAnswers: ["-h", "--hash"], 
        rationale: "-h (hash) prints hashes. -v is just verbose text." 
    },
    { 
        type: "SINGLE", 
        text: "In the package name 'bash-4.4-23.1.x86_64.rpm', which part is the Release?", 
        options: [
            {text: "4.4", correct: false},
            {text: "23.1", correct: true},
            {text: "x86_64", correct: false}
        ], 
        rationale: "Format is Name-Version-Release. Release (23.1) is the SUSE build number." 
    }

);