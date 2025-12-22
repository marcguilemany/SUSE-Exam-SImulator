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
        image: "assets/img/snapper_list.png",
        target: {x: 20, y: 45},
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
        image: "assets/img/lsblk_btrfs.png",
        target: {x: 65, y: 30},
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
    }

]);