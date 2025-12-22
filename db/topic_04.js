window.loadTopic("04 The Linux Filesystem", [

   // -------------------------------------------------------------------------
    // 04 The Linux Filesystem
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Select the valid device types in Linux. (Choose two)", 
        options: [
            {text: "Pipe", correct: false},
            {text: "null", correct: false}, // 'null' es un dispositivo específico, no un TIPO
            {text: "Redirect", correct: false},
            {text: "udev", correct: false},
            {text: "Network", correct: false},
            {text: "Character", correct: true}, // Dispositivos de caracteres (teclado, ratón, puertos serie)
            {text: "Block", correct: true}      // Dispositivos de bloques (discos duros, USB)
        ], 
        rationale: "In Linux, the main device types handled by the kernel are **Block** devices (storage, buffered) and **Character** devices (streams, unbuffered).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html' target='_blank'>📚 SUSE Docs: Device Types</a>" 
    },
    { 
        type: "MULTI", 
        text: "Which type of files are used for inter-process communications (IPC)? (Choose two)", 
        options: [
            {text: "Socket", correct: true},
            {text: "Character", correct: false},
            {text: "Redirect", correct: false},
            {text: "Array", correct: false},
            {text: "Block", correct: false},
            {text: "Pipe", correct: true}
        ], 
        rationale: "Sockets (s) and Named Pipes (p) are special file types used for communication between processes on the same system." 
    },
    { 
        type: "MULTI", 
        text: "Select the true statements regarding Hard Links vs Symbolic Links (Select 3).", 
        options: [
            {text: "Symbolic links can cross filesystem boundaries.", correct: true},
            {text: "Hard links share the same Inode number.", correct: true},
            {text: "Hard links can point to directories.", correct: false},
            {text: "Symbolic links can point to directories.", correct: true},
            {text: "If you delete the original file, the Hard Link breaks.", correct: false}
        ], 
        rationale: "Hard links are the same file (inode). Soft links are pointers and can cross partitions." 
    },
    { 
        type: "SINGLE", 
        text: "What is VFS (Virtual File System)?", 
        options: [
            {text: "A translation tool for Windows files.", correct: false},
            {text: "A kernel abstraction layer providing a common interface for all filesystems.", correct: true},
            {text: "A specific filesystem type for virtual machines.", correct: false}
        ], 
        rationale: "VFS allows the kernel to treat all filesystems (Ext4, XFS, Btrfs) uniformly." 
    },
    { 
        type: "SINGLE", 
        text: "What are the default filesystems for Root (/) and Home (/home) in SLES 15?", 
        options: [
            {text: "Root: Ext4, Home: XFS", correct: false},
            {text: "Root: Btrfs, Home: XFS", correct: true},
            {text: "Root: XFS, Home: Btrfs", correct: false},
            {text: "Root: LVM, Home: Ext4", correct: false}
        ], 
        rationale: "Btrfs is used for / to enable Snapper rollbacks. XFS is used for /home for performance." 
    },
    // --- HOTSPOT MOUNT (Colocado en Topic 04) ---
    { 
        type: "HOTSPOT", 
        text: "In the mount command output, click on the Mount Options to check if the filesystem is Read-Only (ro) or Read-Write (rw).", 
        image: "assets/img/mount_output.png", 
        target: {x: 85, y: 50}, 
        rationale: "Mount options (rw, ro, nosuid) are displayed inside parentheses at the end of the line.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-filesystems.html' target='_blank'>📚 SUSE Docs: Mounting</a>" 
    },
    { 
        type: "HOTSPOT", 
        text: "Click on the directory where configuration files are stored", 
        image: "assets/img/etc_img.png", 
        target: {x: 35, y: 35}, 
        rationale: "/etc contains configuration files." 
    },
        { 
        type: "SINGLE", 
        text: "You delete a file, but disk space is not freed. What is the most likely reason?", 
        options: [
            {text: "The file is compressed", correct: false},
            {text: "A process still has the file open", correct: true},
            {text: "The filesystem is read-only", correct: false},
            {text: "The inode table is full", correct: false}
        ], 
        rationale: "Disk space is released only when the last file descriptor is closed." 
    },
    { 
        type: "SINGLE", 
        text: "Which command displays inode numbers for files?", 
        options: [
            {text: "ls -l", correct: false},
            {text: "ls -i", correct: true},
            {text: "stat --inode", correct: false},
            {text: "df -i", correct: false}
        ], 
        rationale: "The -i option shows inode numbers." 
    },
    { 
        type: "MULTI", 
        text: "Which characteristics apply to symbolic links? (Select 3)", 
        options: [
            {text: "They have a different inode than the target", correct: true},
            {text: "They can point to directories", correct: true},
            {text: "They break if the target is deleted", correct: true},
            {text: "They share disk blocks with the target", correct: false}
        ], 
        rationale: "Symbolic links are independent files that reference a path." 
    },
    { 
        type: "SINGLE", 
        text: "Which filesystem feature is primarily used by Snapper on SLES?", 
        options: [
            {text: "XFS quotas", correct: false},
            {text: "Btrfs subvolumes and snapshots", correct: true},
            {text: "LVM striping", correct: false},
            {text: "EXT4 journaling", correct: false}
        ], 
        rationale: "Snapper relies on Btrfs snapshots and subvolumes." 
    },
    { 
        type: "SINGLE", 
        text: "Which directory contains runtime system information such as process details?", 
        options: [
            {text: "/sys", correct: false},
            {text: "/proc", correct: true},
            {text: "/run", correct: false},
            {text: "/var", correct: false}
        ], 
        rationale: "/proc is a virtual filesystem exposing kernel and process information." 
    },
    { 
        type: "MULTI", 
        text: "Which directories are typically mounted as separate filesystems on SLES? (Select 2)", 
        options: [
            {text: "/boot", correct: true},
            {text: "/home", correct: true},
            {text: "/bin", correct: false},
            {text: "/etc", correct: false}
        ], 
        rationale: "/boot and /home are commonly separated for stability and data protection." 
    },
    { 
        type: "SINGLE", 
        text: "What happens if the root filesystem (/) becomes full?", 
        options: [
            {text: "Only user processes fail", correct: false},
            {text: "The system may become unstable or unbootable", correct: true},
            {text: "Only log files stop growing", correct: false},
            {text: "The kernel automatically cleans space", correct: false}
        ], 
        rationale: "A full root filesystem can prevent essential system operations." 
    },
    { 
        type: "SINGLE", 
        text: "Which file defines persistent filesystem mounts?", 
        options: [
            {text: "/etc/mtab", correct: false},
            {text: "/proc/mounts", correct: false},
            {text: "/etc/fstab", correct: true},
            {text: "/usr/lib/mounts", correct: false}
        ], 
        rationale: "/etc/fstab defines static mount configuration." 
    },
    { 
        type: "MULTI", 
        text: "Which information can be found in /etc/fstab? (Select 3)", 
        options: [
            {text: "Mount point", correct: true},
            {text: "Filesystem type", correct: true},
            {text: "Mount options", correct: true},
            {text: "Current disk usage", correct: false}
        ], 
        rationale: "fstab defines how filesystems are mounted, not their usage." 
    },
    { 
        type: "SINGLE", 
        text: "Which mount option prevents execution of binaries on a filesystem?", 
        options: [
            {text: "nosuid", correct: false},
            {text: "noexec", correct: true},
            {text: "nodev", correct: false},
            {text: "ro", correct: false}
        ], 
        rationale: "noexec blocks execution of binaries." 
    },
    { 
        type: "MULTI", 
        text: "Which mount options improve filesystem security? (Select 2)", 
        options: [
            {text: "nosuid", correct: true},
            {text: "nodev", correct: true},
            {text: "rw", correct: false},
            {text: "defaults", correct: false}
        ], 
        rationale: "nosuid and nodev enhance security by restricting special permissions and device files." 
    },
]);