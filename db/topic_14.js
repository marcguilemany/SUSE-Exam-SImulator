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
    },
    {
        type: "SINGLE",
        text: "In a situation where you need to revert a logical volume 'data_lv' back to its previous state after making changes, which command would you use if a snapshot named 'data_snapshot' was created?",
        options: [
            { text: "lvmerge data_snapshot", correct: false },
            { text: "lvconvert --merge data_snapshot", correct: true },
            { text: "lvremove data_snapshot", correct: false },
            { text: "lvsnapshot --restore data_snapshot", correct: false }
        ],
        rationale: "<b>Why B is correct:</b> The <code>lvconvert --merge</code> command is the standard method to revert changes in LVM. It takes the snapshot and 'merges' it back into the original volume, effectively rolling back the state. Once the merge is complete, the snapshot is automatically removed.<br><br><b>Note:</b> Commands like <code>lvsnapshot</code> or <code>lvmerge</code> (in this context) do not exist or are not used for restoration."
    },
    {
        type: "SINGLE",
        text: "In a high-availability setup, you must ensure that your LVM configuration survives a system crash. Which command should you run to ensure that your changes are saved (restored) to the metadata area on the disk from a backup?",
        options: [
            { text: "lvscan", correct: false },
            { text: "lvmdiskscan", correct: false },
            { text: "vgextend", correct: false },
            { text: "vgcfgrestore", correct: true }
        ],
        rationale: "<b>Why D is correct:</b> LVM automatically backs up metadata to <code>/etc/lvm/backup/</code> whenever a change is made. However, if a crash corrupts the on-disk metadata headers, you use <b>vgcfgrestore</b> to write that text-based backup back onto the physical volume's metadata area, restoring the configuration.<br><br><b>Why others are incorrect:</b><br>- <code>lvscan</code> and <code>lvmdiskscan</code> are read-only tools to find volumes/disks.<br>- <code>vgextend</code> is used to add new physical disks to a volume group."
    },
    {
        type: "SINGLE",
        text: "What is the primary purpose of the /etc/lvm/lvm.conf file in a SUSE Linux environment?",
        options: [
            { text: "It stores user-defined volume group names.", correct: false },
            { text: "It defines the physical volumes available to the system.", correct: false },
            { text: "It logs all LVM-related commands executed.", correct: false },
            { text: "It contains configuration settings for LVM operations.", correct: true }
        ],
        rationale: "The <b>/etc/lvm/lvm.conf</b> file is the central configuration file for LVM. It controls <b>global behavior</b> such as device scanning filters (which disks LVM allows), locking mechanisms, and logging levels.<br><br><b>Why others are incorrect:</b><br>- <b>A & B:</b> Volume names and physical volume definitions are stored in the <b>metadata headers</b> on the disks themselves, not in a text file.<br>- <b>C:</b> Command history is usually part of the shell history or archived in <code>/etc/lvm/archive</code>, but <code>lvm.conf</code> is for settings, not logging actions."
    },
    


]);