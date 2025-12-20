// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

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
    }

);