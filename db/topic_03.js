// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(

   // -------------------------------------------------------------------------
    // 03 The Command Line
    // -------------------------------------------------------------------------
        { 
        type: "SINGLE", 
        text: "What is the first file executed by a bash login shell?", 
        options: [
            {text: "/etc/profile", correct: true},
            {text: "/etc/profile.alias", correct: false},
            {text: "~/.profile", correct: false},
            {text: "/etc/bash.bashrc", correct: false}
        ], 
        rationale: "When Bash is invoked as a login shell, it first reads /etc/profile. Then it looks for ~/.bash_profile, ~/.bash_login, or ~/.profile.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-shell.html' target='_blank'>📚 SUSE Docs: Bash Startup</a>" 
    },
    { 
        type: "SINGLE", 
        text: "After the Kernel has been loaded during the boot process, which component handles hardware detection?", 
        options: [
            {text: "udev", correct: true},
            {text: "devmgr", correct: false},
            {text: "initramfs", correct: false}, // initramfs loads modules, but udev handles the events/nodes
            {text: "hal", correct: false}
        ], 
        rationale: "The Kernel starts 'systemd-udevd' (udev) to listen to kernel uevents and create device nodes in /dev." 
    },
    { 
        type: "MULTI", 
        text: "Which bash commands result in a valid arithmetic expansion? (Choose three)", 
        options: [
            {text: "TOTAL=$((5.3+2.2))", correct: false}, // Falso: Bash no soporta decimales
            {text: "TOTAL=$[8/2]", correct: true},        // Verdadero: Sintaxis antigua pero válida para enteros
            {text: "TOTAL=$[8.4/2.1]", correct: false},   // Falso: Decimales
            {text: "TOTAL=$[2.1*4]", correct: false},     // Falso: Decimales
            {text: "TOTAL=$((5+2))", correct: true},      // Verdadero: Sintaxis estándar POSIX
            {text: "((TOTAL++))", correct: true}          // Verdadero: Estilo C para incrementar
        ], 
        rationale: "Bash arithmetic expansion only supports integers. Operations with decimals (floats) like 5.3 or 2.1 will fail. Valid syntaxes include $((...)), $[...] (legacy), and ((...)).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-shell.html#sec-adm-shell-expansion' target='_blank'>📚 SUSE Docs: Shell Expansion</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which command will display the value of the environment variable named TMPDIR?", 
        options: [
            {text: "val $TMPDIR", correct: false},
            {text: "echo $TMPDIR", correct: true},
            {text: "echo TMPDIR", correct: false},
            {text: "show $TMPDIR", correct: false}
        ], 
        rationale: "To view the content of a variable in Bash, use 'echo' with the '$' prefix before the variable name.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-shell.html#sec-adm-shell-vars' target='_blank'>📚 SUSE Docs: Variables</a>" 
    },
    { 
        type: "MATCHING", 
        text: "Match the File Descriptors (Streams) to their ID numbers.", 
        pairs: [
            {term: "STDIN (Input)", def: "0"},
            {term: "STDOUT (Output)", def: "1"},
            {term: "STDERR (Error)", def: "2"}
        ], 
        rationale: "0 is Input, 1 is Output, 2 is Error." 
    },
    { 
        type: "MATCHING", 
        text: "Match the command operators to their logic.", 
        pairs: [
            {term: "||", def: "Run if previous failed"},
            {term: "&&", def: "Run if previous succeeded"},
            {term: ";", def: "Run always (sequential)"},
            {term: "|", def: "Pass output to input"}
        ], 
        rationale: "|| is OR (on failure), && is AND (on success), ; is separator, | is pipe." 
    },
    { 
        type: "SINGLE", 
        text: "Which key is used to autocomplete commands or file paths in the shell?", 
        options: [
            {text: "Enter", correct: false},
            {text: "Tab", correct: true},
            {text: "Space", correct: false},
            {text: "Ctrl+C", correct: false}
        ], 
        rationale: "The Tab key provides auto-completion in Bash." 
    },
    { 
        type: "MULTI", 
        text: "Select two true statements regarding Command History.", 
        options: [
            {text: "The default history size (HISTSIZE) is usually 1000.", correct: true},
            {text: "History is stored in /var/log/history.", correct: false},
            {text: "The file used is ~/.bash_history.", correct: true},
            {text: "History is cleared automatically every reboot.", correct: false}
        ], 
        rationale: "Defaults are HISTSIZE=1000 and the file is ~/.bash_history." 
    },
    { 
        type: "SINGLE", 
        text: "Where should a user define persistent aliases and variables for their shell session?", 
        options: [
            {text: "/etc/profile", correct: false},
            {text: "~/.bashrc", correct: true},
            {text: "/tmp/.profile", correct: false},
            {text: "/var/bashrc", correct: false}
        ], 
        rationale: "~/.bashrc is the standard location for user-specific shell configuration." 
    },
    { 
        type: "SINGLE", 
        text: "Where are the main manual pages (man pages) located in the filesystem?", 
        options: [
            {text: "/etc/man", correct: false},
            {text: "/usr/share/man", correct: true},
            {text: "/var/man", correct: false},
            {text: "/opt/man", correct: false}
        ], 
        rationale: "The standard path is /usr/share/man." 
    },
    { 
        type: "MATCHING", 
        text: "Match the file management commands.", 
        pairs: [
            {term: "rmdir", def: "Removes empty directories"},
            {term: "rm -r", def: "Removes directories with content"},
            {term: "mv", def: "Moves or Renames"},
            {term: "cp -r", def: "Copies directories"}
        ], 
        rationale: "rmdir only works on empty folders. mv is used for renaming." 
    },

);