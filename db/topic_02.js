// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

    // -------------------------------------------------------------------------
    // 02 Overview of SUSE Linux Enterprise
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "The openSUSE Leap version of Linux is designed for which types of user environments? (Select 2)", 
        options: [
            {text: "Environments requiring High-Availability", correct: false},
            {text: "Desktop power users", correct: true},
            {text: "Users requiring only secure terminal access", correct: false},
            {text: "Data Center environments", correct: false},
            {text: "Developers", correct: true}
        ], 
        rationale: "openSUSE Leap is a community distribution built from SLES sources, targeted at Developers and Power Users, whereas SLES is for Data Centers and Enterprise workloads." 
    },
    { 
        type: "SINGLE", 
        text: "What is the standard General Support duration for a major version of SUSE Linux Enterprise Server (excluding LTSS)?", 
        options: [
            {text: "5 Years", correct: false},
            {text: "10 Years", correct: true},
            {text: "13 Years", correct: false},
            {text: "18 Months", correct: false}
        ], 
        rationale: "SLES offers 10 years of General Support plus 3 years of optional Long Term Service Pack Support (LTSS), totaling 13 years.<br><br><a href='https://www.suse.com/lifecycle/' target='_blank'>📚 SUSE Lifecycle</a>" 
    },
    { 
        type: "MULTI", 
        text: "Which statements regarding 'Technology Previews' in SLES 15 are true? (Select 2)", 
        options: [
            {text: "They are fully supported by L3 support.", correct: false},
            {text: "They are suitable for production environments.", correct: false},
            {text: "They are not supported and may be removed at any time.", correct: true},
            {text: "They are included to provide a glimpse into upcoming innovations.", correct: true}
        ], 
        rationale: "Technology Previews are for testing only, are not supported, and SUSE does not guarantee they will become supported features.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-support.html#sec-support-tech-previews' target='_blank'>📚 SUSE Docs: Technology Previews</a>" 
    },
    { 
        type: "MATCHING", 
        text: "Match the SUSE Support Levels to their definitions.", 
        pairs: [
            {term: "Level 1 (L1)", def: "Problem determination and usage support"},
            {term: "Level 2 (L2)", def: "Problem isolation and reproduction"},
            {term: "Level 3 (L3)", def: "Problem resolution and code fixes"}
        ], 
        rationale: "L1 gathers info, L2 reproduces the issue, and L3 involves engineering to fix the code.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-support.html' target='_blank'>📚 SUSE Docs: Support Levels</a>" 
    },
    { 
        type: "FILL", 
        text: "What command line tool is used to register a SLES system with the SUSE Customer Center (SCC)?", 
        validAnswers: ["SUSEConnect"], 
        rationale: "The command is 'SUSEConnect'. It replaced the old 'suse_register'." 
    },
    { 
        type: "SINGLE", 
        text: "Where are the release notes installed locally on a SLES system?", 
        options: [
            {text: "/etc/release-notes", correct: false},
            {text: "/var/log/release-notes", correct: false},
            {text: "/usr/share/doc/release-notes", correct: true},
            {text: "/opt/suse/release-notes", correct: false}
        ], 
        rationale: "Documentation and release notes reside in /usr/share/doc.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-help.html' target='_blank'>📚 SUSE Docs: Documentation Directory</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which directory contains the essential shared libraries needed to boot the system (similar to DLLs in Windows)?", 
        options: [
            {text: "/usr/lib", correct: false},
            {text: "/lib", correct: true},
            {text: "/var/lib", correct: false},
            {text: "/boot/lib", correct: false}
        ], 
        rationale: "/lib contains essential libraries for booting and the root filesystem commands. /usr/lib contains libraries for user-space applications.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-fhs.html' target='_blank'>📚 SUSE Docs: FHS</a>" 
    },
    { 
        type: "MULTI", 
        text: "Which of the following are valid ways to start the YaST tool? (Select 2)", 
        options: [
            {text: "yast (Text/Ncurses mode)", correct: true},
            {text: "yast2 (Graphical mode)", correct: true},
            {text: "start_yast", correct: false},
            {text: "systemctl start yast", correct: false}
        ], 
        rationale: "'yast' typically launches the text interface (ncurses), while 'yast2' tries to launch the graphical interface (Qt/GTK)." 
    },
    { 
        type: "SINGLE", 
        text: "If you need to search for known solutions, error codes, or technical articles, which online resource should you use?", 
        options: [
            {text: "SUSE Bugzilla", correct: false},
            {text: "SUSE Knowledgebase (TIDs)", correct: true},
            {text: "GitHub", correct: false},
            {text: "StackOverflow", correct: false}
        ], 
        rationale: "The SUSE Knowledgebase contains Technical Information Documents (TIDs) for known issues.<br><br><a href='https://www.suse.com/support/kb/' target='_blank'>📚 SUSE Knowledgebase</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What happens if your SLES subscription expires?", 
        options: [
            {text: "The system shuts down immediately.", correct: false},
            {text: "The system continues to run, but access to update repositories is denied.", correct: true},
            {text: "Only the root user can log in.", correct: false},
            {text: "The system automatically reverts to a community version.", correct: false}
        ], 
        rationale: "You lose access to the update channels (patches and security updates), but the OS keeps running." 
    },
    { 
        type: "FILL", 
        text: "What is the name of the system file that maps IP addresses to hostnames locally (before DNS)?", 
        validAnswers: ["/etc/hosts"], 
        rationale: "/etc/hosts is the local lookup table for hostnames." 
    },
    { 
        type: "SINGLE", 
        text: "You want to use the High Availability (HA) or Live Patching repositories. What is required?", 
        options: [
            {text: "Nothing, they are included in the base system.", correct: false},
            {text: "Just an internet connection.", correct: false},
            {text: "A separate License/Registration code for that extension.", correct: true},
            {text: "Root privileges only.", correct: false}
        ], 
        rationale: "Extensions like HA are add-on products that require a specific registration code to enable their repositories." 
    },
    { 
        type: "SINGLE", 
        text: "What command allows you to configure the network settings Graphically?", 
        options: [
            {text: "yast", correct: false},
            {text: "yast2", correct: true},
            {text: "ip addr", correct: false},
            {text: "wicked-gui", correct: false}
        ], 
        rationale: "'yast2' invokes the Qt/GTK graphical interface. 'yast' is for text mode (ncurses)." 
    },
    { 
        type: "MULTI", 
        text: "Select 3 valid SUSE Linux Enterprise 15 Products/Extensions.", 
        options: [
            {text: "SLES (General Purpose)", correct: true},
            {text: "SLE HPC (High Performance Computing)", correct: true},
            {text: "SLE Real Time", correct: true},
            {text: "SLE Macro", correct: false},
            {text: "SUSE Cloud", correct: false},
            {text: "SLE Home", correct: false}
        ], 
        rationale: "The SLE family includes SLES (Server), SLE HPC, SLE Real Time, and SLES for SAP. 'SLE Home' or 'Macro' do not exist as products.<br><br><a href='https://www.suse.com/products/' target='_blank'>📚 SUSE Product Portfolio</a>" 
    },
);