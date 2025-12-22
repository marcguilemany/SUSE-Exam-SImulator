window.loadTopic("05 Text Editors (Vim)", [


  // -------------------------------------------------------------------------
    // 05 Text Editors (Vim)
    // -------------------------------------------------------------------------
    { 
        type: "FILL", 
        text: "In Vim, what command is used to quit without saving (force quit)?", 
        validAnswers: [":q!", "q!"], 
        rationale: ":q! forces exit discarding changes." 
    },
    { 
        type: "FILL", 
        text: "In Vim, what command opens a new empty window horizontally?", 
        validAnswers: [":new", "new"], 
        rationale: ":new opens a new window. :split splits the current one." 
    },
    { 
        type: "SINGLE", 
        text: "Which of the following represents the two main modes in Vim (often used in exams)?", 
        options: [
            {text: "Insert and Command (or Normal)", correct: true},
            {text: "Input and Output", correct: false},
            {text: "Write and Read", correct: false}
        ], 
        rationale: "Exams often categorize modes into Insert (typing) and Command/Normal (actions)." 
    },
    { 
        type: "MATCHING", 
        text: "Match the Vim movement keys.", 
        pairs: [
            {term: "h", def: "Left"},
            {term: "j", def: "Down"},
            {term: "k", def: "Up"},
            {term: "l", def: "Right"}
        ], 
        rationale: "h(left), j(down), k(up), l(right) allows movement without leaving the home row." 
    },
    // -------------------------------------------------------------------------
    // 05 Text Editors (Vim Focus)
    // -------------------------------------------------------------------------
    
    // --- MODES & BASICS ---
    { 
        type: "SINGLE", 
        text: "Which key allows you to enter 'Insert Mode' before the cursor position?", 
        options: [
            {text: "a", correct: false},
            {text: "i", correct: true},
            {text: "o", correct: false},
            {text: "r", correct: false}
        ], 
        rationale: "'i' inserts before the cursor, 'a' appends after the cursor.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-vim.html' target='_blank'>📚 SUSE Docs: Vim Modes</a>" 
    },
    { 
        type: "SINGLE", 
        text: "How do you switch from Insert Mode back to Command (Normal) Mode?", 
        options: [
            {text: "Ctrl+C", correct: false},
            {text: "Enter", correct: false},
            {text: "Esc", correct: true},
            {text: ":q", correct: false}
        ], 
        rationale: "The 'Esc' key is the standard way to return to Normal Mode." 
    },
    { 
        type: "MATCHING", 
        text: "Match the command to enter Insert Mode.", 
        pairs: [
            {term: "i", def: "Insert before cursor"},
            {term: "a", def: "Append after cursor"},
            {term: "o", def: "Open new line below"},
            {term: "O", def: "Open new line above"}
        ], 
        rationale: "i(nsert), a(ppend), o(pen line) are the primary ways to start typing." 
    },

    // --- NAVIGATION ---
    { 
        type: "SINGLE", 
        text: "In Command Mode, which key moves the cursor to the very end of the file?", 
        options: [
            {text: "gg", correct: false},
            {text: "G", correct: true},
            {text: "$", correct: false},
            {text: "L", correct: false}
        ], 
        rationale: "'G' goes to the last line. 'gg' goes to the first line." 
    },
    { 
        type: "SINGLE", 
        text: "Which key moves the cursor to the end of the current line?", 
        options: [
            {text: "0", correct: false},
            {text: "$", correct: true},
            {text: "e", correct: false},
            {text: "A", correct: false}
        ], 
        rationale: "'$' moves to the end of the line. '0' moves to the beginning." 
    },
    { 
        type: "FILL", 
        text: "Enter the command (key) used to move the cursor to the top (first line) of the file.", 
        validAnswers: ["gg", "1G"], 
        rationale: "'gg' immediately jumps to the top of the file." 
    },
    { 
        type: "MATCHING", 
        text: "Match the navigation keys.", 
        pairs: [
            {term: "h", def: "Left"},
            {term: "j", def: "Down"},
            {term: "k", def: "Up"},
            {term: "l", def: "Right"}
        ], 
        rationale: "Standard Vi navigation keys." 
    },

    // --- EDITING (COPY / PASTE / DELETE) ---
    { 
        type: "SINGLE", 
        text: "Which command deletes the character directly under the cursor?", 
        options: [
            {text: "x", correct: true},
            {text: "d", correct: false},
            {text: "r", correct: false},
            {text: "del", correct: false}
        ], 
        rationale: "'x' deletes the character under the cursor (like Del key)." 
    },
    { 
        type: "SINGLE", 
        text: "How do you copy (yank) the current line?", 
        options: [
            {text: "cc", correct: false},
            {text: "yy", correct: true},
            {text: "dd", correct: false},
            {text: "cp", correct: false}
        ], 
        rationale: "'yy' (yank yank) copies the current line into the buffer." 
    },
    { 
        type: "SINGLE", 
        text: "How do you paste the content of the buffer after the cursor?", 
        options: [
            {text: "p", correct: true},
            {text: "P", correct: false},
            {text: "v", correct: false},
            {text: "ins", correct: false}
        ], 
        rationale: "'p' pastes after the cursor/line. 'P' pastes before." 
    },
    { 
        type: "FILL", 
        text: "Enter the command to delete the current line.", 
        validAnswers: ["dd"], 
        rationale: "'dd' deletes (cuts) the entire current line." 
    },
    { 
        type: "SINGLE", 
        text: "Which command undoes the last change?", 
        options: [
            {text: "Ctrl+z", correct: false},
            {text: "u", correct: true},
            {text: "U", correct: false},
            {text: ":undo", correct: false}
        ], 
        rationale: "'u' allows you to undo the last action." 
    },
    { 
        type: "SINGLE", 
        text: "How do you 'Redo' a change that was undone?", 
        options: [
            {text: "Ctrl+r", correct: true},
            {text: "r", correct: false},
            {text: "R", correct: false},
            {text: "Ctrl+u", correct: false}
        ], 
        rationale: "'Ctrl+r' is the standard Redo command in Vim." 
    },

    // --- SEARCH & REPLACE ---
    { 
        type: "SINGLE", 
        text: "Which character is used to start a forward search?", 
        options: [
            {text: "?", correct: false},
            {text: "/", correct: true},
            {text: ":", correct: false},
            {text: "s", correct: false}
        ], 
        rationale: "Typing '/' followed by text searches forward. '?' searches backward." 
    },
    { 
        type: "SINGLE", 
        text: "After searching with '/', which key moves to the Next occurrence?", 
        options: [
            {text: "n", correct: true},
            {text: "N", correct: false},
            {text: "Enter", correct: false},
            {text: "Space", correct: false}
        ], 
        rationale: "'n' goes to next, 'N' goes to previous." 
    },
    { 
        type: "FILL", 
        text: "Enter the command to replace ALL occurrences of 'old' with 'new' in the entire file.", 
        validAnswers: [":%s/old/new/g", ":%s/old/new/g"], 
        rationale: ":%s/old/new/g (The % selects all lines, g means global per line)." 
    },
    { 
        type: "MULTI", 
        text: "Which of the following commands will Save and Quit? (Select 2)", 
        options: [
            {text: ":wq", correct: true},
            {text: ":w", correct: false},
            {text: ":x", correct: true},
            {text: ":q!", correct: false}
        ], 
        rationale: ":wq (write quit) and :x (exit) both save changes and close the editor." 
    },
    { 
        type: "FILL", 
        text: "Enter the command to quit Vim WITHOUT saving changes (discarding them).", 
        validAnswers: [":q!", "q!"], 
        rationale: ":q! forces quit." 
    },
    { 
        type: "SINGLE", 
        text: "You want to save the file but keep it open. Which command do you use?", 
        options: [
            {text: ":w", correct: true},
            {text: ":s", correct: false},
            {text: ":wq", correct: false},
            {text: "ZZ", correct: false}
        ], 
        rationale: ":w (write) saves the buffer to disk without exiting." 
    },

    // --- ADVANCED / BUFFERS ---
    { 
        type: "SINGLE", 
        text: "Is it possible to open more than one file in Vim without running a second instance?", 
        options: [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ], 
        rationale: "Yes, using :e filename, :split, :vsplit or opening with 'vim file1 file2'." 
    },
    { 
        type: "SINGLE", 
        text: "Which command splits the window vertically?", 
        options: [
            {text: ":split", correct: false},
            {text: ":vsplit", correct: true},
            {text: ":hsplit", correct: false},
            {text: ":vert", correct: false}
        ], 
        rationale: ":vsplit creates a vertical split. :split creates a horizontal one." 
    },
    { 
        type: "SINGLE", 
        text: "How do you enter Visual Block Mode (column selection)?", 
        options: [
            {text: "v", correct: false},
            {text: "V", correct: false},
            {text: "Ctrl+v", correct: true},
            {text: "Shift+v", correct: false}
        ], 
        rationale: "'v' is character visual, 'V' is line visual, 'Ctrl+v' is block visual." 
    },
    { 
        type: "SINGLE", 
        text: "Which Vim mode allows you to insert or append text?", 
        options: [
            {text: "Normal Mode", correct: false},
            {text: "Insert Mode", correct: true},
            {text: "Command-Line Mode", correct: false},
            {text: "Visual Mode", correct: false}
        ], 
        rationale: "Insert mode is used to input text. You can enter it using 'i', 'I', 'a', or 'A'.<br><br><a href='https://vimhelp.org/usr_01.txt.html' target='_blank'>📚 Vim Docs: Insert Mode</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What command in Normal Mode deletes the current line in Vim?", 
        options: [
            {text: "dd", correct: true},
            {text: "D", correct: false},
            {text: "x", correct: false},
            {text: "dl", correct: false}
        ], 
        rationale: "'dd' deletes the entire current line including the newline character." 
    },
    { 
        type: "MULTI", 
        text: "Select the commands that move the cursor to the beginning of a line in Normal Mode.", 
        options: [
            {text: "^", correct: true},
            {text: "0", correct: true},
            {text: "$", correct: false},
            {text: "gg", correct: false},
            {text: "H", correct: false}
        ], 
        rationale: "0 moves to column 1, ^ moves to first non-blank character, $ to end, gg to top of file." 
    },
    { 
        type: "SINGLE", 
        text: "Which command in Normal Mode allows you to undo the last change?", 
        options: [
            {text: "u", correct: true},
            {text: "Ctrl+r", correct: false},
            {text: ":redo", correct: false},
            {text: "zz", correct: false}
        ], 
        rationale: "'u' undoes the last change; 'Ctrl+r' redoes it." 
    },
    { 
        type: "FILL", 
        text: "Fill in the blank: To search for the next occurrence of a pattern in Vim, you use the command '/' followed by the ______.", 
        validAnswers: ["pattern", "text", "string"], 
        rationale: "Use '/' followed by the search pattern to find occurrences. Press 'n' for next match." 
    },
    { 
        type: "SINGLE", 
        text: "Which Vim command writes the file to disk and quits the editor?", 
        options: [
            {text: ":w", correct: false},
            {text: ":q", correct: false},
            {text: ":wq", correct: true},
            {text: ":x!", correct: false}
        ], 
        rationale: ":wq writes changes and exits Vim." 
    },
    { 
        type: "MULTI", 
        text: "Which of the following commands can be used to move multiple lines in Vim?", 
        options: [
            {text: "V to select lines and then :m", correct: true},
            {text: "dd followed by p", correct: true},
            {text: ":move", correct: true},
            {text: ":copy", correct: false}
        ], 
        rationale: "You can visually select lines (V) and move them, or cut (dd) and paste (p), or use :move command." 
    },
    { 
        type: "SINGLE", 
        text: "You want to replace all occurrences of 'foo' with 'bar' in the entire file. Which command do you use?", 
        options: [
            {text: ":%s/foo/bar/g", correct: true},
            {text: ":s/foo/bar", correct: false},
            {text: ":g/foo/bar", correct: false},
            {text: ":%replace foo bar", correct: false}
        ], 
        rationale: ":%s/foo/bar/g replaces all occurrences in the file; ':s' alone affects only the current line." 
    },
    { 
        type: "SINGLE", 
        text: "Which command allows you to visually select text character by character in Vim?", 
        options: [
            {text: "v", correct: true},
            {text: "V", correct: false},
            {text: "Ctrl+v", correct: false},
            {text: "gg", correct: false}
        ], 
        rationale: "'v' enters character-wise Visual Mode; 'V' is line-wise, 'Ctrl+v' is block-wise." 
    },
    { 
        type: "SINGLE", 
        text: "How do you enter Command-Line Mode from Normal Mode?", 
        options: [
            {text: "Press ':'", correct: true},
            {text: "Press '/'", correct: false},
            {text: "Press 'i'", correct: false},
            {text: "Press 'v'", correct: false}
        ], 
        rationale: "':' enters Command-Line Mode to execute commands like :w, :q, :s etc." 
    },

]);