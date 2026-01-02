window.loadTopic("15 Btrfs Management", [

// -------------------------------------------------------------------------
// 15 Btrfs Management
// -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Which statements regarding subvolumes in a BtrFS filesystem are true? (Choose two)", 
        options: [
            {text: "Every subvolume must have the same quota.", correct: false},
            {text: "Subvolumes can be mounted separately using -o sub=...", correct: true},
            {text: "Every subvolume must begin with '@'.", correct: false},
            {text: "Multiple virtual filesystems can be created inside the BtrFS filesystem.", correct: true}
        ], 
        rationale: "BtrFS subvolumes act like independent file trees and can be mounted individually." 
    },

    {
        type: "SINGLE",
        text: "Why does SLES use Btrfs as the default filesystem for the root (/) filesystem?",
        options: [
            {text: "Better performance for databases", correct: false},
            {text: "Support for snapshots and rollback", correct: true},
            {text: "Mandatory encryption support", correct: false},
            {text: "Smaller disk usage", correct: false}
        ],
        rationale: "Btrfs enables snapshots and system rollback via Snapper, which is critical for system recovery."
    },

    {
        type: "SINGLE",
        text: "Which SUSE tool is commonly used to manage Btrfs snapshots?",
        options: [
            {text: "Timeshift", correct: false},
            {text: "Snapper", correct: true},
            {text: "rsnapshot", correct: false},
            {text: "cron", correct: false}
        ],
        rationale: "Snapper is the standard SUSE tool for managing Btrfs snapshots."
    },

    {
        type: "MULTI",
        text: "Which statements about Btrfs snapshots are true? (Select 2)",
        options: [
            {text: "Snapshots are created instantly", correct: true},
            {text: "Snapshots are full copies of the data", correct: false},
            {text: "Snapshots can be used to rollback system changes", correct: true},
            {text: "Snapshots replace regular backups", correct: false}
        ],
        rationale: "Btrfs snapshots are copy-on-write and enable fast rollback, but they are not backups."
    },

    {
        type: "SINGLE",
        text: "Which YaST module allows managing Btrfs snapshots graphically?",
        options: [
            {text: "YaST Storage Manager", correct: false},
            {text: "YaST Boot Loader", correct: false},
            {text: "YaST Snapper", correct: true},
            {text: "YaST System Services", correct: false}
        ],
        rationale: "YaST Snapper provides graphical snapshot management."
    },

    // --- HOTSPOT 1 ---
    {
        type: "HOTSPOT",
        text: "In the Snapper list output, identify the CURRENT snapshot used by the running system.",
        image: "assets/img/snapper_list.svg",
        target: {x: 4, y: 56},
        rationale: "The current snapshot is marked as 'current' and represents the active system state."
    },

    {
        type: "SINGLE",
        text: "What happens when you rollback to a previous Btrfs snapshot?",
        options: [
            {text: "Only user files are restored", correct: false},
            {text: "The system reverts to the selected snapshot state", correct: true},
            {text: "The snapshot is deleted", correct: false},
            {text: "The system immediately reboots", correct: false}
        ],
        rationale: "Rollback reverts the filesystem state to the chosen snapshot."
    },

    // --- HOTSPOT 2 ---
    {
        type: "HOTSPOT",
        text: "Click on the filesystem type used for the root (/) filesystem in the lsblk output.",
        image: "assets/img/lsblk_btrfs.svg",
        target: {x: 23, y: 68},
        rationale: "On SLES, the root filesystem is typically formatted as Btrfs."
    },

    {
        type: "MATCHING",
        text: "Match the Btrfs feature with its description.",
        pairs: [
            {term: "Snapshot", def: "Point-in-time filesystem state"},
            {term: "Rollback", def: "Restore a previous filesystem state"},
            {term: "Snapper", def: "Tool to manage Btrfs snapshots"}
        ],
        rationale: "These concepts are fundamental to Btrfs management in SLES."
    },
    {
        type: "HOTSPOT",
        text: "In the btrfs usage output, click on the line that shows the RAID profile used for Metadata.",
        image: "assets/img/btrfs_usage.svg",
        target: {x: 25, y: 75}, // Apunta a "Metadata,DUP:..."
        rationale: "On a default SLES installation with a single disk, Btrfs is configured to use the <b>DUP</b> profile for Metadata (duplicating it for safety) while using the <b>single</b> profile for Data."
    },
    {
        type: "SINGLE",
        text: "In a SLE201v15 lab (or SLES 15 environment), you are configuring a system to use Btrfs with snapshots for system recovery. Given that you ran the command <code>snapper create --type pre</code> before a system update, which command restores the system to the pre-update state?",
        options: [
            { text: "btrfs subvolume snapshot", correct: false },
            { text: "snapper undochange", correct: false },
            { text: "snapper --config root restore", correct: false },
            { text: "snapper rollback", correct: true }
        ],
        rationale: "<b>Why D is correct:</b> The <b>snapper rollback</b> command is designed to revert the entire system (root filesystem) to a previous snapshot state. It works by setting the default Btrfs subvolume to the specified snapshot, so the system boots into that state on the next restart.<br><br><b>Why B is incorrect:</b> <code>snapper undochange</code> reverts modifications to specific files within the currently running system but does not switch the bootable root subvolume."
    },
    {
        type: "SINGLE",
        text: "A SUSE Linux Enterprise Server 15 system uses a Btrfs file system on /dev/sda1, mounted at /data, with subvolumes @/home and @/logs. The administrator needs to create a snapshot of the @/home subvolume for backup purposes and ensure it is read-only.<br><br>The snapshot should be stored at /data/@/home_snap. Which commands achieve this, and what is the correct syntax for verifying the snapshot’s properties?",
        options: [
            { text: "btrfs subvolume snapshot -r /data/@/home /data/@/home_snap; btrfs subvolume show /data/@/home_snap", correct: true },
            { text: "btrfs snapshot create /data/@/home /data/@/home_snap; btrfs property set /data/@/home_snap ro true; btrfs filesystem show /data", correct: false },
            { text: "btrfs subvolume snapshot /data/home /data/home_snap; btrfs property set /data/home_snap ro true; btrfs subvolume list /data", correct: false },
            { text: "btrfs subvolume create /data/@/home_snap; btrfs snapshot /data/@/home /data/@/home_snap; btrfs subvolume show /data/@/home_snap", correct: false }
        ],
        rationale: "<b>Why A is correct:</b><br>1. <b>Command:</b> The correct command to take a snapshot is <code>btrfs subvolume snapshot</code>.<br>2. <b>Read-Only Flag:</b> The <code>-r</code> flag creates a read-only snapshot immediately. This is preferred for backups over creating a R/W snapshot and changing it later.<br>3. <b>Verification:</b> <code>btrfs subvolume show &lt;path&gt;</code> displays detailed information about a specific subvolume, including its 'Read-Only' status and UUIDs."
    },
    {
        type: "SINGLE",
        text: "You want to create a snapshot of a subvolume named 'work' in /mnt/data and send it to a remote Btrfs file system. Which command sequence accomplishes this?",
        options: [
            { text: "btrfs send /mnt/data/work | ssh user@remote 'btrfs receive /mnt/backup'", correct: false },
            { text: "btrfs send -r /mnt/data/work | ssh user@remote 'btrfs receive /mnt/backup'", correct: false },
            { text: "btrfs snapshot /mnt/data/work /mnt/data/work_snapshot; btrfs send /mnt/data/work_snapshot | ssh user@remote 'btrfs receive /mnt/backup'", correct: true },
            { text: "btrfs snapshot /mnt/data/work /mnt/data/work_snapshot; btrfs send /mnt/data/work_snapshot", correct: false }
        ],
        rationale: "<b>Why C is correct:</b> The process of replicating Btrfs data involves three steps: <br>1. Create a snapshot of the source subvolume (usually with <code>-r</code> for read-only, though the option text omits it, it is the implied correct workflow).<br>2. Use <code>btrfs send</code> to generate a data stream from that snapshot.<br>3. Pipe that stream to <code>ssh</code> which executes <code>btrfs receive</code> on the remote end.<br><br><b>Why others are incorrect:</b><br>- <b>A:</b> You cannot run <code>btrfs send</code> directly on a live, changing read-write subvolume; you must snapshot it first.<br>- <b>B:</b> <code>btrfs send</code> does not use a <code>-r</code> flag; the read-only property belongs to the snapshot, not the send command.<br>- <b>D:</b> Missing the destination component (the pipe to ssh)."
    },
    

]);