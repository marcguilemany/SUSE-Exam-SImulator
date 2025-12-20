// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

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

);