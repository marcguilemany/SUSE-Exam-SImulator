window.loadTopic("17 Software Management", [

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
    },
    {
        type: "MATCHING",
        text: "Match each RPM concept with its correct description.",
        pairs: [
            {term: "RPM Package", def: "Compressed archive containing files and metadata"},
            {term: "Spec File", def: "Defines how an RPM package is built"},
            {term: "GPG Signature", def: "Verifies package authenticity and integrity"}
        ],
        rationale: "RPM packages include metadata. Spec files define build instructions. GPG signatures ensure trust."
    },

    {
        type: "MATCHING",
        text: "Match the RPM database element to its purpose.",
        pairs: [
            {term: "Installed Packages", def: "Tracks software currently installed on the system"},
            {term: "File Ownership", def: "Determines which package owns a file"},
            {term: "Version Information", def: "Stores package version and release data"}
        ],
        rationale: "The RPM database stores detailed metadata about installed software."
    },

    {
        type: "MATCHING",
        text: "Match the software management tool with its main responsibility.",
        pairs: [
            {term: "rpm", def: "Low-level package management"},
            {term: "zypper", def: "High-level dependency resolution"},
            {term: "YaST Software", def: "Graphical package management"}
        ],
        rationale: "rpm works locally, zypper resolves dependencies, YaST provides UI."
    },

    {
        type: "MATCHING",
        text: "Match the package action with the correct behavior.",
        pairs: [
            {term: "Install", def: "Adds a package to the system"},
            {term: "Update", def: "Replaces an installed package with a newer version"},
            {term: "Remove", def: "Deletes package files but keeps configuration files"}
        ],
        rationale: "Remove usually keeps config files unless explicitly erased."
    },

    {
        type: "MATCHING",
        text: "Match the repository component to its function.",
        pairs: [
            {term: "Base URL", def: "Location where packages are downloaded from"},
            {term: "Metadata", def: "Information used to resolve dependencies"},
            {term: "GPG Key", def: "Used to verify repository packages"}
        ],
        rationale: "Repositories rely on metadata and GPG keys for secure package management."
    },

    {
        type: "MATCHING",
        text: "Match the Zypper feature with its description.",
        pairs: [
            {term: "Refresh", def: "Updates repository metadata"},
            {term: "Vendor Change", def: "Switches package provider"},
            {term: "Lock", def: "Prevents package modification"}
        ],
        rationale: "Zypper locks protect packages from upgrades or removal."
    },

    {
        type: "MATCHING",
        text: "Match the dependency concept with its meaning.",
        pairs: [
            {term: "Requires", def: "Package must be present for installation"},
            {term: "Provides", def: "Capabilities offered by a package"},
            {term: "Conflicts", def: "Packages that cannot coexist"}
        ],
        rationale: "These dependency tags control installation logic."
    },

    {
        type: "MATCHING",
        text: "Match the package source with its usage.",
        pairs: [
            {term: "Repository", def: "Central source of signed packages"},
            {term: "Local RPM file", def: "Manual package installation"},
            {term: "Pattern", def: "Group of related packages"}
        ],
        rationale: "Patterns are commonly used in YaST installations."
    },

    {
        type: "MATCHING",
        text: "Match each software management concept with its correct meaning.",
        pairs: [
            {term: "Low-level package tool", def: "Does not resolve dependencies automatically"},
            {term: "High-level package tool", def: "Resolves dependencies using repositories"},
            {term: "Graphical package management", def: "Provides pattern-based installation"}
        ],
        rationale: "rpm is low-level. zypper resolves dependencies. YaST installs via patterns."
    },

    {
        type: "MATCHING",
        text: "Match the RPM-related term with its description.",
        pairs: [
            {term: "Package Integrity", def: "Ensures files are not modified"},
            {term: "Package Authenticity", def: "Ensures package source is trusted"},
            {term: "GPG Signature", def: "Used to verify integrity and authenticity"}
        ],
        rationale: "Integrity = unchanged. Authenticity = trusted source. GPG covers both."
    },

    {
        type: "MATCHING",
        text: "Match the repository element with its role in software management.",
        pairs: [
            {term: "Repository Metadata", def: "Used to calculate dependencies"},
            {term: "Repository URL", def: "Location of package files"},
            {term: "GPG Key", def: "Validates repository packages"}
        ],
        rationale: "Metadata enables dependency resolution, not the packages themselves."
    },

    {
        type: "MATCHING",
        text: "Match the Zypper behavior with the scenario.",
        pairs: [
            {term: "Refresh repositories", def: "Updates metadata before installations"},
            {term: "Vendor change", def: "Switches package provider"},
            {term: "Package lock", def: "Prevents upgrades or removal"}
        ],
        rationale: "Locks override solver decisions."
    },

    {
        type: "MATCHING",
        text: "Match the installation source with its characteristic.",
        pairs: [
            {term: "Pattern", def: "Installs a predefined set of packages"},
            {term: "Repository", def: "Provides signed packages and updates"},
            {term: "Local RPM", def: "Bypasses repository dependency resolution"}
        ],
        rationale: "Local RPM installs do not automatically resolve dependencies."
    },

    {
        type: "MATCHING",
        text: "Match the dependency tag with its effect.",
        pairs: [
            {term: "Requires", def: "Must be present to install"},
            {term: "Provides", def: "Satisfies dependency requirements"},
            {term: "Conflicts", def: "Prevents coexistence of packages"}
        ],
        rationale: "These tags define dependency relationships."
    },

    {
        type: "MATCHING",
        text: "Match the package lifecycle phase with its description.",
        pairs: [
            {term: "Installation", def: "Package files are added to the system"},
            {term: "Upgrade", def: "Older package version is replaced"},
            {term: "Removal", def: "Files are removed but configs may remain"}
        ],
        rationale: "Configuration files are preserved unless erased."
    },
    {
        type: "SINGLE",
        text: "What is the command and options to remove repository number 4?",
        options: [
            { text: "yumrepo -del 4", correct: false },
            { text: "zypper rr 4", correct: true },
            { text: "libzypp --remove-repo 4", correct: false },
            { text: "yast repo-manag", correct: false },
            { text: "rpm -rr 4", correct: false }
        ],
        rationale: "To remove a repository in SUSE, you use the <b>zypper</b> command with the <code>removerepo</code> action, which can be abbreviated as <code>rr</code>. You can specify the repository by its alias, name, or number.<br><br>Command: <code>zypper rr 4</code>"
    },
    {
        type: "MULTI",
        text: "What are the basic components of RPM? (Choose two)",
        options: [
            { text: "RPM Compiler", correct: false },
            { text: "RPM Database", correct: true },
            { text: "RPM Package Manager", correct: true },
            { text: "RPM Packager", correct: false },
            { text: "RPM Editor", correct: false }
        ],
        rationale: "The RPM system consists primarily of two main components:<br>1. <b>The RPM Database:</b> Stores information about all installed packages, their files, and dependencies (located in <code>/var/lib/rpm</code>).<br>2. <b>The RPM Package Manager:</b> The suite of programs (like the <code>rpm</code> command) that allows you to install, query, verify, and remove packages using the data in the database."
    },
    {
        type: "SINGLE",
        text: "If a system administrator needs to install a group of related packages (often called a Pattern in SUSE) using Zypper, which command acts as the standard install command to achieve this?",
        options: [
            { text: "zypper install --group package_group_name", correct: false },
            { text: "zypper in package_group_name", correct: true },
            { text: "zypper install --bundle package_group_name", correct: false },
            { text: "zypper install --set-group package_group_name", correct: false }
        ],
        rationale: "<b>Why B is correct:</b> The command <code>zypper install</code> (or its abbreviation <code>zypper in</code>) is the universal command to install software. Zypper automatically searches for packages, patterns, or capabilities that match the name provided.<br><br><b>Note:</b> While you can be more specific using <code>zypper in -t pattern &lt;name&gt;</code>, the options A, C, and D contain flags (`--group`, `--bundle`) that do not exist in the standard zypper syntax."
    },
    

]);