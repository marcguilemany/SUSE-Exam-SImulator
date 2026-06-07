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
    },
    { 
        type: "SINGLE", 
        text: "You want to completely prevent a specific service from being started, either automatically at boot or manually by any user or other dependent service. Which command achieves this?", 
        options: [
            {text: "systemctl mask <service_name>", correct: true},
            {text: "systemctl disable <service_name>", correct: false},
            {text: "systemctl stop <service_name>", correct: false},
            {text: "systemctl unmount <service_name>", correct: false}
        ], 
        rationale: "`systemctl mask` links the unit file to `/dev/null`, preventing it from being started under any circumstance. `disable` only removes boot symlinks, but it can still be started manually.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-systemd.html' target='_blank'>📚 SUSE Docs: Masking Units</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which command switches the system to the default system target?", 
        options: [
            {text: "systemctl isolate", correct: false},
            {text: "systemctl default", correct: true},
            {text: "systemctl get-default", correct: false},
            {text: "systemctl isolate get-default", correct: false}
        ], 
        rationale: "The <b>`systemctl default`</b> command tells systemd to immediately switch the running state of the operating system to its default target configuration (which is typically a symlink pointing to `multi-user.target` or `graphical.target`). While `systemctl get-default` only queries and displays the name of that target, and `systemctl isolate` requires you to specify a target name manually to change states, `systemctl default` acts as a direct shortcut to enforce the system's baseline boot target without needing further parameters.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-systemd.html' target='_blank'>📚 SUSE Docs: Managing System Targets</a>" 
    },
{
        type: "MULTI",
        text: "How are the scripts in the /etc/grub.d directory used? (Select 2)",
        options: [
            {text: "The contents of these scripts are incorporated into the /boot/grub2/custom.cfg file.", correct: false},
            {text: "The contents of these scripts are incorporated into the /etc/grub2.d/configfile.", correct: false},
            {text: "The contents of these scripts are incorporated into the /boot/grub2/grub.cfg file.", correct: true},
            {text: "These scripts are taken as input by the mkinitrd command.", correct: false},
            {text: "These scripts are taken as input by the grub2-init command.", correct: false},
            {text: "These scripts are taken as input by the grub2-mkconfig command.", correct: true}
        ],
        rationale: "The correct answers are <b>The contents of these scripts are incorporated into the /boot/grub2/grub.cfg file</b> and <b>These scripts are taken as input by the grub2-mkconfig command</b>.<br><br>In SLES 15, GRUB2 configuration is modular. The main boot loader file `/boot/grub2/grub.cfg` should never be edited manually. Instead, administrators modify the general settings in `/etc/default/grub` and custom execution scripts within the <b>`/etc/grub.d/`</b> directory. When the <b>`grub2-mkconfig -o /boot/grub2/grub.cfg`</b> command is executed, it parses those scripts as input to construct and overwrite the final compiled configuration file.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-grub2.html' target='_blank'>📚 SUSE Docs: GRUB2 Configuration Architecture</a>"
    },
    {
        type: "SINGLE",
        text: "What starts the Linux Kernel during the boot process?",
        options: [
            {text: "initd", correct: false},
            {text: "The Boot Loader", correct: false},
            {text: "systemd", correct: false},
            {text: "The udev process", correct: false},
            {text: "BIOS or UEFI depending on the hardware architecture", correct: true}
        ],
        rationale: "The correct answer according to the mock test is <b>BIOS or UEFI depending on the hardware architecture</b>. The firmware (BIOS/UEFI) initializes the hardware components and targets the boot device to execute the bootstrap process, which subsequently passes control to the boot loader to launch the vmlinuz kernel.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-boot.html' target='_blank'>📚 SUSE Docs: Linux Boot Process Architecture</a>"
    },
    {
        type: "SINGLE",
        text: "You want to add two new custom items to the GRUB2 boot menu. Which file should you modify to accomplish this?",
        options: [
            {text: "/etc/grub.d/custom.cfg", correct: false},
            {text: "/etc/default/grub", correct: false},
            {text: "/etc/boot/grub.cfg", correct: false},
            {text: "/boot/grub2/menu.cfg", correct: false},
            {text: "/boot/grub2/custom.cfg", correct: true}
        ],
        rationale: "The correct answer is <b>/boot/grub2/custom.cfg</b>. In SLES 15, the shell script `/etc/grub.d/41_custom` automatically includes a directive to check for and source an external file named `custom.cfg` located inside the main bootloader directory (`/boot/grub2/`). Any manual boot entries added here are dynamically parsed by GRUB2 at boot time without requiring the administrator to manually regenerate the main configuration using `grub2-mkconfig`.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-grub2.html' target='_blank'>📚 SUSE Docs: Customizing the GRUB2 Boot Menu</a>"
    },
    

]);
