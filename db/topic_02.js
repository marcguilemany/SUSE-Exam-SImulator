window.loadTopic("02 Overview & Install", [

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
        { 
        type: "SINGLE", 
        text: "Which statement best describes the relationship between SLES and openSUSE Leap?", 
        options: [
            {text: "openSUSE Leap is derived from SLES sources.", correct: true},
            {text: "SLES is built from openSUSE Leap packages.", correct: false},
            {text: "They are completely independent distributions.", correct: false},
            {text: "openSUSE Leap is a rolling release.", correct: false}
        ], 
        rationale: "openSUSE Leap shares the same code base as SLES, making it a stable community distribution closely aligned with SUSE Linux Enterprise." 
    },
    { 
        type: "SINGLE", 
        text: "Which SUSE Linux Enterprise component is responsible for managing software repositories and system registration?", 
        options: [
            {text: "zypper", correct: false},
            {text: "YaST", correct: false},
            {text: "SUSE Customer Center (SCC)", correct: true},
            {text: "PackageHub", correct: false}
        ], 
        rationale: "SUSE Customer Center (SCC) manages subscriptions, system registration, and access to update repositories." 
    },
    { 
        type: "MULTI", 
        text: "Which characteristics apply to SUSE Linux Enterprise Server? (Select 2)", 
        options: [
            {text: "Designed for long-term stability", correct: true},
            {text: "Uses a rolling release model", correct: false},
            {text: "Certified for enterprise workloads", correct: true},
            {text: "Unsupported community distribution", correct: false}
        ], 
        rationale: "SLES is designed for enterprise environments with long-term support, stability, and certifications." 
    },
    { 
        type: "SINGLE", 
        text: "What is the primary purpose of SUSE Extensions and Modules?", 
        options: [
            {text: "To replace the base operating system", correct: false},
            {text: "To provide additional functionality on top of SLES", correct: true},
            {text: "To upgrade the kernel automatically", correct: false},
            {text: "To enable community-only packages", correct: false}
        ], 
        rationale: "Extensions and modules extend the functionality of SLES by providing additional software components without replacing the base OS." 
    },
    { 
        type: "SINGLE", 
        text: "Which statement about PackageHub on SLES is correct?", 
        options: [
            {text: "It is fully supported by SUSE for production systems.", correct: false},
            {text: "It provides community packages with limited or no SUSE support.", correct: true},
            {text: "It replaces official SUSE repositories.", correct: false},
            {text: "It is enabled by default on all systems.", correct: false}
        ], 
        rationale: "PackageHub provides additional community packages that are not fully supported by SUSE and are optional." 
    },
    { 
        type: "SINGLE", 
        text: "During the SLES 15 installation process using the Unified Installer, which two modules are selected and installed by default to provide a minimal functional server environment?", 
        options: [
            {text: "Basesystem Module and Server Applications Module", correct: true},
            {text: "Development Tools Module and Desktop Applications Module", correct: false},
            {text: "Containers Module and Legacy Module", correct: false},
            {text: "Public Cloud Module and Web Development Module", correct: false}
        ], 
        rationale: "According to the SUSE manual, the Basesystem and Server Applications modules are the baseline requirements for any standard SLES 15 server deployment.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-register-sle.html#sec-registration-modules' target='_blank'>📚 SUSE Docs: Default Modules</a>" 
    },
    { 
        type: "SINGLE", 
        text: "An administrator needs to deploy multiple SLES 15 instances in an air-gapped data center with no internet access. Which local service should be implemented to proxy registrations and mirror software repositories locally?", 
        options: [
            {text: "RMT (Repository Mirroring Tool)", correct: true},
            {text: "SMT (Subscription Management Tool)", correct: false},
            {text: "SUSE Proxy Server", correct: false},
            {text: "YaST Software Router", correct: false}
        ], 
        rationale: "In SLES 15, SMT has been replaced by RMT (Repository Mirroring Tool). It allows local repository mirroring and system registration within private networks.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-rmt-overview.html' target='_blank'>📚 SUSE Docs: Repository Mirroring Tool</a>" 
    },
    { 
        type: "MULTI", 
        text: "When executing the 'supportconfig' utility to gather diagnostic data for SUSE L3 support, where is the resulting archive saved by default, and what accompanies it for validation? (Select 2)", 
        options: [
            {text: "The compressed archive is saved in /var/log/", correct: true},
            {text: "An MD5 checksum file (.md5) is generated in the same directory", correct: true},
            {text: "The archive is stored under /run/log/supportconfig/", correct: false},
            {text: "A GPG public key is appended to the filename", correct: false}
        ], 
        rationale: "The `supportconfig` command generates a compressed tarball archive along with a matching .md5 checksum file, storing both securely inside `/var/log/`.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-support.html#sec-adm-support-supportconfig' target='_blank'>📚 SUSE Docs: supportconfig Output</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What is the primary operational difference between the SLES 15 'Online Installer' media and the 'Full Package' media?", 
        options: [
            {text: "The Online Installer contains only the architecture installer and fetches all packages via network; the Full Package media includes all packages offline.", correct: true},
            {text: "The Online Installer can only install cloud instances; the Full Package media is for physical servers.", correct: false},
            {text: "The Online Installer does not support btrfs; the Full Package media supports all filesystems.", correct: false},
            {text: "There is no operational difference; they have identical storage size requirements.", correct: false}
        ], 
        rationale: "The Online Installer is a lightweight ISO that pulls everything dynamically during installation from SCC or RMT. The Full Package Media contains everything needed to install the entire operating system without network access.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-install-prep.html' target='_blank'>📚 SUSE Docs: Installation Media</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which of the following describes the options available when SLES reaches GE (end of general support)?", 
        options: [
            {text: "An additional LTSS subscription can be purchased which extends support beyond GE", correct: true},
            {text: "The product will continue to run but with reduced functionality", correct: false},
            {text: "Only patches for critical security vulnerabilities will be published and made available", correct: false},
            {text: "Support is provided for another 6 months beyond GE", correct: false}
        ], 
        rationale: "When a major version of SUSE Linux Enterprise Server reaches the end of its 10-year General Support (GS/GE) phase, it enters the Extended Support phase. To continue receiving maintenance, security fixes, and technical support for critical vulnerabilities during this period, administrators must purchase an additional <b>LTSS (Long Term Service Pack Support)</b> subscription. Without LTSS, the system will keep running normally but will no longer receive any official patches or package updates.<br><br><a href='https://www.suse.com/lifecycle/' target='_blank'>📚 SUSE Product Lifecycle Policy</a>" 
    },
    { 
        type: "SINGLE", 
        text: "After a service pack for SLES is released how many months is the previous service pack supported for?", 
        options: [
            {text: "18", correct: false},
            {text: "6", correct: true},
            {text: "3", correct: false},
            {text: "12", correct: false}
        ], 
        rationale: "When a new SUSE Linux Enterprise Service Pack is released, SUSE provides a standard <b>6-month upgrade window</b>. During this transition period, the previous Service Pack remains fully supported to allow administrators time to plan and execute their migration to the new release. Once this 6-month window closes, you must have upgraded or purchased Long Term Service Pack Support (LTSS) to continue receiving maintenance updates[cite: 1, 2].<br><br><a href='https://www.suse.com/lifecycle/' target='_blank'>📚 SUSE Product Lifecycle Policy</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which statement is true about Package Hub?", 
        options: [
            {text: "All the packages are supported by SUSE", correct: false},
            {text: "Only packages flagged with an S are supported by SUSE", correct: false},
            {text: "Packages from Package Hub require an additional subscription", correct: false},
            {text: "No packages from package hub are supported by SUSE", correct: true}
        ], 
        rationale: "According to the official SUSE training manual, SUSE Package Hub provides access to thousands of community-built packages for SUSE Linux Enterprise Server. While these packages are maintained entirely by the community and are <b>not officially supported by SUSE</b>, installing software from Package Hub does not invalidate or affect the official support contract of your base SLES operating system. Furthermore, Package Hub is an optional free extension that does not require an additional paid subscription.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-sw-cl.html#sec-zypper-packagehub' target='_blank'>📚 SUSE Docs: SUSE Package Hub</a>" 
    },
    { 
        type: "MULTI", 
        text: "Which of the following are extensions available for SUSE Linux Enterprise Server? (Select 2)", 
        options: [
            {text: "Live Patching", correct: true},
            {text: "Base System", correct: false},
            {text: "Containers", correct: false},
            {text: "High Availability", correct: true}
        ], 
        rationale: "In the SUSE Linux Enterprise architecture, there is a strict technical distinction between Modules and Extensions. Extensions, such as <b>High Availability</b> and <b>Live Patching</b>, add specialized advanced features to the system and require a separate paid subscription. On the other hand, <b>Base System</b> and <b>Containers</b> are Modules, which are already included as part of the standard SLES subscription and do not require additional registration codes.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-register-sle.html#sec-registration-modules' target='_blank'>📚 SUSE Docs: Modules and Extensions</a>" 
    },
    
]);
