window.loadTopic("14 Logical Volume Management", [

  // -------------------------------------------------------------------------
    // 14 Logical Volume Management
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Select the commands used to display information about Physical Volumes. (Select 3)", 
        options: [
            {text: "pvs", correct: true},
            {text: "pvdisplay", correct: true},
            {text: "pvscan", correct: true},
            {text: "pvshow", correct: false},
            {text: "fdisk", correct: false}
        ], 
        rationale: "pvs (summary), pvdisplay (verbose), and pvscan (scan & list) are the correct tools." 
    },
    { 
        type: "ORDER", 
        text: "Order the steps to create a usable LVM mount.", 
        items: ["pvcreate", "vgcreate", "lvcreate", "mkfs", "mount"], 
        correct: ["pvcreate", "vgcreate", "lvcreate", "mkfs", "mount"], 
        rationale: "Physical Vol -> Vol Group -> Logical Vol -> Format (Filesystem) -> Mount." 
    },
    { 
        type: "SINGLE", 
        text: "You need to remove a PV that has data on it. What command must be run first?", 
        options: [
            {text: "pvmove", correct: true},
            {text: "vgreduce", correct: false},
            {text: "pvremove", correct: false}
        ], 
        rationale: "pvmove evacuates data to other disks in the VG. Only then can you reduce/remove." 
    },
    // --- HOTSPOT LVM (Colocado en Topic 14) ---
    { 
        type: "HOTSPOT", 
        text: "Identify the Striped Logical Volume (RAID 0) layout in the diagram.", 
        // --- AQUÍ VA TU IMAGEN DE LVM ---
        image: "assets/img/lvm_types_diagram.svg", 
        target: {x: 50, y: 80}, 
        rationale: "Striped volumes distribute data evenly across multiple disks simultaneously to improve performance.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-lvm.html' target='_blank'>📚 SUSE Docs: LVM Striping</a>" 
    },

    {
        type: "SINGLE",
        text: "What is the correct order of LVM components from physical storage to usable filesystem?",
        options: [
            {text: "LV → VG → PV", correct: false},
            {text: "PV → VG → LV", correct: true},
            {text: "Disk → LV → VG", correct: false},
            {text: "VG → PV → LV", correct: false}
        ],
        rationale: "Physical Volumes are grouped into Volume Groups, which contain Logical Volumes."
    },

    {
        type: "SINGLE",
        text: "Which LVM component represents a physical disk or partition?",
        options: [
            {text: "Logical Volume (LV)", correct: false},
            {text: "Volume Group (VG)", correct: false},
            {text: "Physical Volume (PV)", correct: true},
            {text: "Filesystem", correct: false}
        ],
        rationale: "A Physical Volume is a disk or partition initialized for use with LVM."
    },

    {
        type: "MULTI",
        text: "Which operations can be performed on a Logical Volume? (Select 2)",
        options: [
            {text: "Resize the volume", correct: true},
            {text: "Move it to another VG", correct: false},
            {text: "Create snapshots", correct: true},
            {text: "Convert it to a PV", correct: false}
        ],
        rationale: "Logical Volumes can be resized and snapshotted within a Volume Group."
    },

    {
        type: "SINGLE",
        text: "What is the primary benefit of using LVM?",
        options: [
            {text: "Improved filesystem performance", correct: false},
            {text: "Flexible disk space management", correct: true},
            {text: "Automatic backups", correct: false},
            {text: "Kernel-level encryption", correct: false}
        ],
        rationale: "LVM allows flexible resizing and management of storage."
    },

    {
        type: "SINGLE",
        text: "Which command displays detailed information about volume groups?",
        options: [
            {text: "lvdisplay", correct: false},
            {text: "vgdisplay", correct: true},
            {text: "pvdisplay", correct: false},
            {text: "lsblk", correct: false}
        ],
        rationale: "vgdisplay shows detailed information about volume groups."
    },

    {
        type: "SINGLE",
        text: "Which statement about LVM snapshots is true?",
        options: [
            {text: "They are full copies of the original data", correct: false},
            {text: "They store only changes after snapshot creation", correct: true},
            {text: "They replace backups", correct: false},
            {text: "They require system reboot", correct: false}
        ],
        rationale: "LVM snapshots use copy-on-write and store only changed blocks."
    },

    {
        type: "MULTI",
        text: "Which tasks can be performed using YaST LVM module? (Select 2)",
        options: [
            {text: "Create volume groups", correct: true},
            {text: "Resize logical volumes", correct: true},
            {text: "Configure RAID controllers", correct: false},
            {text: "Modify kernel parameters", correct: false}
        ],
        rationale: "YaST provides graphical management of LVM structures."
    },

    {
        type: "SINGLE",
        text: "What happens if a Volume Group runs out of free extents?",
        options: [
            {text: "All logical volumes become read-only", correct: false},
            {text: "No further LVs can be extended", correct: true},
            {text: "The VG is deleted", correct: false},
            {text: "The filesystem is corrupted", correct: false}
        ],
        rationale: "Logical volumes cannot be extended if no free space remains in the VG."
    },

    {
        type: "FILL",
        text: "Which command initializes a disk or partition as a Physical Volume?",
        validAnswers: ["pvcreate"],
        rationale: "pvcreate prepares a device for use with LVM."
    },

    {
        type: "MATCHING",
        text: "Match the LVM component to its description.",
        pairs: [
            {term: "PV", def: "Physical storage device"},
            {term: "VG", def: "Pool of storage"},
            {term: "LV", def: "Usable logical block device"}
        ],
        rationale: "LVM abstracts physical storage into flexible logical volumes."
    }


]);