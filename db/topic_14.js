// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

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
        image: "assets/img/lvm_types_diagram.png", 
        target: {x: 50, y: 80}, 
        rationale: "Striped volumes distribute data evenly across multiple disks simultaneously to improve performance.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-lvm.html' target='_blank'>📚 SUSE Docs: LVM Striping</a>" 
    },

);