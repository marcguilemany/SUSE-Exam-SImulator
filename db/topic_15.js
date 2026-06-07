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
    { 
        type: "SINGLE", 
        text: "Due to the Copy-on-Write (CoW) architectural design of the Btrfs filesystem, what operational risk must an administrator monitor when keeping multiple Snapper checkpoints?", 
        options: [
            {text: "Modifying existing data blocks writes new allocations elsewhere, locking the old blocks and consuming additional storage space.", correct: true},
            {text: "Taking a snapshot causes the primary read-only volume to freeze execution for several minutes.", correct: false},
            {text: "Snapper clones the entire system data block array every time a snapshot is executed.", correct: false},
            {text: "System metadata becomes scrambled if the kernel experiences an unexpected power outage.", correct: false}
        ], 
        rationale: "Btrfs snapshots take 0 space initially. However, when files are altered later, the modifications are saved in new blocks, while the old blocks remain preserved to safeguard the snapshot history, increasing overall storage usage.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-snapper.html' target='_blank'>📚 SUSE Docs: Btrfs Snapshots</a>" 
    },
    {
        type: "SINGLE",
        text: "Which command will list the current Btrfs snapshots?",
        options: [
            { text: "btrfs snapshot list", correct: false },
            { text: "snapper display all", correct: false },
            { text: "btrfs subvolume list snapshots", correct: false },
            { text: "snapper list", correct: true }
        ],
        rationale: "While Btrfs snapshots are technically subvolumes, the primary high-level tool used in SLES to manage them is <b>Snapper</b>[cite: 1]. Executing <b>`snapper list`</b> provides a formatted overview of all snapshots for a given configuration, including the snapshot ID, type (pre, post, or single), timestamp, and the description of the event that triggered the creation (such as a Zypper transaction)[cite: 1].<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-snapper.html' target='_blank'>📚 SUSE Docs: Snapper Command Line</a>"
    },
    {
        type: "SINGLE",
        text: "Which command is used to manage Btrfs subvolumes?",
        options: [
            { text: "btrfs subvolume", correct: true },
            { text: "btrfs snapper", correct: false },
            { text: "btrfs filesystem", correct: false },
            { text: "btrfs rescue", correct: false }
        ],
        rationale: "The <b>`btrfs subvolume`</b> command is the native administrative utility for managing the lifecycle of subvolumes within a Btrfs pool[cite: 1]. It allows administrators to create, delete, list, and set default subvolumes, as well as manage quotas and snapshots at the core filesystem level[cite: 1]. While Snapper is used for automated checkpoints, `btrfs subvolume` is essential for manual architectural changes to the filesystem[cite: 1].<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-btrfs.html' target='_blank'>📚 SUSE Docs: Btrfs Administration</a>"
    },
    {
        type: "SINGLE",
        text: "Which of the following lists the valid snapshot types?",
        options: [
            { text: "Pre and Post", correct: false },
            { text: "First, Pre and Post", correct: false },
            { text: "Single, Pre and Post", correct: true },
            { text: "OneOff", correct: false }
        ],
        rationale: "Snapper categorizes snapshots into three specific functional types: <b>Single</b> (for manual or independent snapshots), and the paired <b>Pre and Post</b> snapshots[cite: 1]. Pre/Post pairs are typically generated by tools like Zypper or YaST, marking the system state before and after a significant software change to facilitate an easy rollback if the operation fails or causes instability[cite: 1].<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-snapper.html#sec-snapper-types' target='_blank'>📚 SUSE Docs: Snapper Snapshot Types</a>"
    },
    {
        type: "SINGLE",
        text: "The YaST tool can be used to create and manage Btrfs file systems. True or False?",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        rationale: "YaST includes a specialized module called the <b>Expert Partitioner</b>, which provides a comprehensive graphical interface to format disks with Btrfs, define subvolume structures, and enable snapshotting capabilities during or after installation[cite: 1]. Additionally, the 'YaST Snapper' module allows for the visual management and comparison of Btrfs snapshots without using the terminal[cite: 1].<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-yast-part.html' target='_blank'>📚 SUSE Docs: YaST Expert Partitioner</a>"
    },
    {
        type: "SINGLE",
        text: "A SUSE Linux Enterprise Server 15 system uses a Btrfs file system on /dev/sda1, mounted at /data, with subvolumes @/home and @/logs. The administrator needs to create a snapshot of the @/home subvolume for backup purposes and ensure it is read-only. The snapshot should be stored at /data/@/home_snap.\nWhich commands achieve this, and what is the correct syntax for verifying the snapshot's properties?",
        options: [
            {text: "btrfs subvolume snapshot -r /data/@/home /data/@/home_snap; btrfs subvolume show /data/@/home_snap", correct: true},
            {text: "btrfs snapshot create /data/@/home /data/@/home_snap; btrfs property set /data/@/home_snap ro true; btrfs filesystem show /data", correct: false},
            {text: "btrfs subvolume snapshot /data/home /data/home_snap; btrfs property set /data/home_snap ro true; btrfs subvolume list /data", correct: false},
            {text: "btrfs subvolume create /data/@/home_snap; btrfs snapshot /data/@/home /data/@/home_snap; btrfs subvolume show /data/@/home_snap", correct: false}
        ],
        rationale: "The correct answer is <b>btrfs subvolume snapshot -r /data/@/home /data/@/home_snap; btrfs subvolume show /data/@/home_snap</b>.<br><br>In Btrfs management, creating an atomic copy of a subvolume requires the `btrfs subvolume snapshot` structure, and appending the `-r` flag natively forces the snapshot to be marked as read-only instantly upon creation. To verify its structural parameters and readonly status flags, the `btrfs subvolume show` command acts as the standard inspection tool. Legacy or shortened syntaxes like `btrfs snapshot` are completely invalid.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html#sec-filesystems-btrfs-snapshots' target='_blank'>📚 SUSE Docs: Btrfs Subvolume and Snapshot Management</a>"
    },
]);
