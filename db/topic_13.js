window.loadTopic("13 Storage Management Fundamentals", [

    // -------------------------------------------------------------------------
    // 13 Storage Management Fundamentals
    // -------------------------------------------------------------------------
    { 
        type: "SINGLE", 
        text: "Which command is used to manage Linux Software RAID (md arrays)?", 
        options: [
            {text: "mdadm", correct: true},
            {text: "yast swraid", correct: false},
            {text: "raidadm", correct: false},
            {text: "dmraid", correct: false}
        ], 
        rationale: "'mdadm' (Multiple Device Admin) is the standard tool for managing software RAID.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-raid.html' target='_blank'>📚 SUSE Docs: Software RAID</a>" 
    },
    { 
        type: "ORDER", 
        text: "Construct the parted command to create a primary XFS partition using the whole disk.", 
        items: ["mkpart", "primary", "xfs", "0%", "100%"], 
        correct: ["mkpart", "primary", "xfs", "0%", "100%"], 
        rationale: "Syntax: mkpart [type] [fs-type] [start] [end]." 
    },
    {
        type: "SINGLE",
        text: "Which command displays all currently mounted filesystems?",
        options: [
            {text: "lsblk", correct: false},
            {text: "mount", correct: true},
            {text: "df", correct: false},
            {text: "blkid", correct: false}
        ],
        rationale: "The mount command without arguments shows all mounted filesystems."
    },

    {
        type: "SINGLE",
        text: "Which file must be modified to make a filesystem mount persistent across reboots?",
        options: [
            {text: "/etc/mtab", correct: false},
            {text: "/etc/fstab", correct: true},
            {text: "/proc/mounts", correct: false},
            {text: "/var/lib/mount", correct: false}
        ],
        rationale: "/etc/fstab defines filesystems that are mounted automatically at boot."
    },

    {
        type: "MULTI",
        text: "Which identifiers can be safely used in /etc/fstab to reference a filesystem? (Select 2)",
        options: [
            {text: "Device name (e.g. /dev/sda1)", correct: false},
            {text: "UUID", correct: true},
            {text: "LABEL", correct: true},
            {text: "Mount ID", correct: false}
        ],
        rationale: "UUIDs and LABELs are persistent and avoid issues caused by changing device names."
    },

    {
        type: "SINGLE",
        text: "You attached a new disk to a system. Which step must be performed before creating a filesystem?",
        options: [
            {text: "Mount the disk", correct: false},
            {text: "Partition the disk", correct: true},
            {text: "Run fsck", correct: false},
            {text: "Add it to /etc/fstab", correct: false}
        ],
        rationale: "A disk must be partitioned before a filesystem can be created on it."
    },

    {
        type: "SINGLE",
        text: "Which command is used to display block devices and their mount points in a tree format?",
        options: [
            {text: "df -h", correct: false},
            {text: "lsblk", correct: true},
            {text: "mount", correct: false},
            {text: "fdisk -l", correct: false}
        ],
        rationale: "lsblk shows block devices, partitions, and mount points hierarchically."
    },

    {
        type: "MULTI",
        text: "Which statements about mounting filesystems are true? (Select 2)",
        options: [
            {text: "Mounting via mount command is temporary", correct: true},
            {text: "fstab mounts apply only to root filesystem", correct: false},
            {text: "A mounted filesystem hides existing directory contents", correct: true},
            {text: "Only root can mount filesystems", correct: false}
        ],
        rationale: "Mounting hides underlying directory contents and is temporary unless defined in fstab."
    },

    {
        type: "SINGLE",
        text: "Which YaST module is used to manage disks, partitions, and filesystems?",
        options: [
            {text: "YaST Boot Loader", correct: false},
            {text: "YaST Storage Manager", correct: true},
            {text: "YaST System Services", correct: false},
            {text: "YaST Hardware Information", correct: false}
        ],
        rationale: "YaST Storage Manager is the central tool for disk and filesystem configuration."
    },

    {
        type: "SINGLE",
        text: "What is the main purpose of the df command?",
        options: [
            {text: "Display disk I/O performance", correct: false},
            {text: "Show filesystem disk space usage", correct: true},
            {text: "List block devices", correct: false},
            {text: "Check filesystem integrity", correct: false}
        ],
        rationale: "df reports disk space usage per filesystem."
    },

    {
        type: "FILL",
        text: "Which command displays filesystem UUIDs?",
        validAnswers: ["blkid"],
        rationale: "blkid prints block device attributes including UUID and filesystem type."
    },

    {
        type: "MATCHING",
        text: "Match the tool to its primary purpose.",
        pairs: [
            {term: "lsblk", def: "List block devices and mount points"},
            {term: "df", def: "Display filesystem disk usage"},
            {term: "mount", def: "Attach a filesystem to the directory tree"}
        ],
        rationale: "Each tool provides different storage-related information."
    },
    {
        type: "SINGLE",
        text: "You need to mount a filesystem at boot time with specific options for 'noexec' and 'nodev'. Which configuration file should be modified, and what would the correct line look like for the device /dev/sdb1 mounted at /mnt/data?",
        options: [
            { text: "/etc/mtab /dev/sdb1 /mnt/data ext4 defaults,noexec,nodev 0 2", correct: false },
            { text: "/etc/fstab /dev/sdb1 /mnt/data ext4 defaults,noexec,nodev 0 2", correct: true },
            { text: "/etc/fstab /mnt/data /dev/sdb1 ext4 defaults,noexec,nodev 0 2", correct: false },
            { text: "/etc/mtab /mnt/data /dev/sdb1 ext4 defaults,noexec,nodev 0 2", correct: false }
        ],
        rationale: "<b>Why B is correct:</b><br>1. <b>File:</b> The file <code>/etc/fstab</code> is used for persistent mount configuration (boot time). <code>/etc/mtab</code> is a dynamic file maintained by the system to list currently mounted filesystems and should not be edited manually.<br>2. <b>Syntax Order:</b> The correct column order in fstab is: <code>[Device] [Mount Point] [Type] [Options] [Dump] [Pass]</code>.<br>Option C reverses the device and mount point, which is incorrect syntax."
    },
    { 
        type: "SINGLE", 
        text: "An administrator needs to look up the exact filesystem UUID of an unmounted disk partition without querying partition tables. Which command provides this metadata mapping dynamically?", 
        options: [
            {text: "blkid", correct: true},
            {text: "fdisk -l", correct: false},
            {text: "df -h", correct: false},
            {text: "mount --status", correct: false}
        ], 
        rationale: "`blkid` specifically identifies block device properties (UUID, Labels, Filesystem format), whereas `df` only interacts with currently mounted filesystems.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html' target='_blank'>📚 SUSE Docs: Block Device Identification</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which of the following parted commands will display the partition information for the first NVMe disk on the first NVMe controller?", 
        options: [
            {text: "parted /dev/nvme0n1 print", correct: true},
            {text: "parted /dev/nvme1 show", correct: false},
            {text: "parted /dev/sda show", correct: false},
            {text: "parted /dev/sda print", correct: false}
        ], 
        rationale: "In Linux device naming conventions, non-volatile memory express devices follow a specific structural nomenclature: <b>`/dev/nvme<controller>n<namespace>`</b>. Therefore, the first NVMe disk (Namespace 1) attached to the first NVMe controller (Controller 0) is represented as <b>`/dev/nvme0n1`</b>. To display the internal partition table structure using the `parted` utility non-interactively, you must pass the device path followed by the sub-command <b>`print`</b> (as `show` is not a valid subcommand in parted).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html' target='_blank'>📚 SUSE Docs: NVMe Device Naming</a>" 
    },
    
]);
