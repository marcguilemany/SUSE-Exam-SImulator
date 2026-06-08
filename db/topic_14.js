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
    { 
        type: "HOTSPOT", 
        text: "Identify the Striped Logical Volume (RAID 0) layout in the diagram.", 
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
    { 
        type: "SINGLE", 
        text: "What is the critical sequence of commands required to safely reduce the storage allocation size of an LVM logical volume formatted with an ext4 filesystem?", 
        options: [
            {text: "Unmount the volume -> resize2fs (shrink filesystem) -> lvreduce (shrink logical volume)", correct: true},
            {text: "lvreduce (shrink logical volume) -> resize2fs (shrink filesystem) -> mount", correct: false},
            {text: "vgreduce -> lvreduce -> resize_fs", correct: false},
            {text: "LVM logical volumes cannot be reduced once formatted; they must be recreated.", correct: false}
        ], 
        rationale: "You must always reduce the filesystem *before* reducing the Logical Volume container. If you truncate the LV first, you will physically slice off your data block references and corrupt the filesystem.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-lvm.html' target='_blank'>📚 SUSE Docs: LVM Operations</a>" 
    },
    { 
        type: "SINGLE", 
        text: "When creating a LVM snapshot which of the following options is required to indicate the type of logical volume is a snapshot?", 
        options: [
            {text: "--merge", correct: false},
            {text: "-L", correct: false},
            {text: "-n", correct: false},
            {text: "-s", correct: true}
        ], 
        rationale: "To create a traditional point-in-time snapshot of an existing logical volume using the `lvcreate` command, the <b>`-s`</b> (or `--snapshot`) option is strictly required to instruct the LVM subsystem that the new volume is a copy-on-write snapshot rather than a standard independent linear volume. When utilizing this option, you must also specify the size of the snapshot allocation space using `-L` and the target origin logical volume path (e.g., `lvcreate -L 5G -s -n lv_snap /dev/vg1/lv_data`).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-lvm.html' target='_blank'>📚 SUSE Docs: LVM Snapshot Allocation</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which of the following commands will expand the volume group vg2 to include the physical volume /dev/sdf?", 
        options: [
            {text: "vgexpand vg=vg2 /dev/sdf", correct: false},
            {text: "vgextend /dev/sdf vg2", correct: false},
            {text: "vgextend /dev/sdf", correct: false},
            {text: "vgextend vg2 /dev/sdf", correct: true}
        ], 
        rationale: "The <b>`vgextend`</b> command is used to add one or more initialized physical volumes (PVs) into an existing LVM volume group (VG), thereby increasing the total physical storage pool available for logical volume allocations. The mandatory command-line syntax requires passing <b>the name of the target Volume Group first, followed by the block path of the new Physical Volume</b> (e.g., `vgextend vg2 /dev/sdf`). The block device must be previously initialized via `pvcreate` before it can be appended to the group context.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-lvm.html' target='_blank'>📚 SUSE Docs: Modifying LVM Volume Groups</a>" 
    },
    {
        type: "SINGLE",
        text: "In a situation where you need to revert a logical volume \"data_lv\" back to its previous state after making changes, which command would you use if a snapshot named \"data_snapshot\" was created?",
        options: [
            {text: "lvmerge data_snapshot", correct: false},
            {text: "lvconvert --merge data_snapshot", correct: true},
            {text: "lvremove data_snapshot", correct: false},
            {text: "lvsnapshot --restore data_snapshot", correct: false}
        ],
        rationale: "The correct answer is <b>lvconvert --merge data_snapshot</b>. In LVM architecture, to roll back a logical volume to a previous state captured by a snapshot, the `lvconvert` command with the `--merge` option must be used. If the origin volume is closed (unmounted), the merge starts immediately. If the volume is active or mounted, the merge operation is deferred and will automatically execute the next time the logical volume is deactivated and reactivated.<br><br>Commands like `lvmerge` or `lvsnapshot` do not exist in the standard LVM2 utility suite.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-storage-lvm.html' target='_blank'>📚 SUSE Docs: LVM Advanced Volume Management</a>"
    },
    {
        type: "SINGLE",
        text: "What is the primary purpose of the /etc/lvm/lvm.conf file in a SUSE Linux environment?",
        options: [
            {text: "It stores user-defined volume group names.", correct: false},
            {text: "It defines the physical volumes available to the system.", correct: false},
            {text: "It logs all LVM-related commands executed.", correct: false},
            {text: "It contains configuration settings for LVM operations.", correct: true}
        ],
        rationale: "The correct answer is <b>It contains configuration settings for LVM operations.</b>. In SLES 15, `/etc/lvm/lvm.conf` acts as the master configuration file for the LVM2 toolset ecosystem. It houses operational parameters such as disk device scanning filters, metadata allocation policies, locking mechanisms, and auto-activation features. It does not store real-time runtime objects like names of volume groups or lists of active physical volumes, which are dynamically polled directly from disk device metadata fields.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-storage-lvm.html' target='_blank'>📚 SUSE Docs: LVM Configuration Files</a>"
    },
    {
        type: "SINGLE",
        text: "By default, LVM initializes Volume Groups with a default Physical Extent (PE) size of 4MB. An administrator needs to create a new volume group named 'vg_data' using /dev/sdb1, but requires the Physical Extent size to be explicitly set to 16MB instead. Which command should be used?",
        options: [
            {text: "vgcreate -s 16M vg_data /dev/sdb1", correct: true},
            {text: "pvcreate --pe-size 16M /dev/sdb1; vgcreate vg_data /dev/sdb1", correct: false},
            {text: "vgcreate -p 16M vg_data /dev/sdb1", correct: false},
            {text: "lvcreate -s 16M -n vg_data /dev/sdb1", correct: false}
        ],
        rationale: "The correct answer is <b>vgcreate -s 16M vg_data /dev/sdb1</b>. In LVM2 architecture, the size of the Physical Extents (PE) is a property of the Volume Group (VG) itself, not the physical or logical volumes. The <b>`-s`</b> flag (or `--physicalextentsize`) within the `vgcreate` command allows the administrator to override the default 4MB block size using suffixes like M for Megabytes or G for Gigabytes.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-storage-lvm.html' target='_blank'>📚 SUSE Docs: LVM Volume Group Advanced Creation</a>"
    },
    {
        type: "SINGLE",
        text: "An administrator needs to create a new logical volume designed for high-performance databases. The storage traffic must be distributed alternately across three distinct physical volumes (/dev/sdb1, /dev/sdc1, and /dev/sdd1) to leverage parallel I/O operations. Which type of Logical Volume should be created?",
        options: [
            {text: "Linear Logical Volume", correct: false},
            {text: "Striped Logical Volume", correct: true},
            {text: "Mirrored Logical Volume", correct: false},
            {text: "Thin-Provisioned Logical Volume", correct: false}
        ],
        rationale: "The correct answer is <b>Striped Logical Volume</b>. By default, LVM creates 'Linear' volumes where data blocks fill one disk before moving to the next. A 'Striped' volume (similar to RAID 0) interleaves data extents across a specified number of physical devices (`lvcreate -i 3`), multiplying read/write throughput by performing parallel I/O operations across all stripes.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-storage-lvm.html' target='_blank'>📚 SUSE Docs: LVM Volume Types</a>"
    },
]);
