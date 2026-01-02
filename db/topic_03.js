window.loadTopic("03 The Command Line", [

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
        { 
        type: "SINGLE", 
        text: "You run a command that produces an error message. You want to save ONLY the error output to a file. What should you do?", 
        options: [
            {text: "command > error.txt", correct: false},
            {text: "command 2> error.txt", correct: true},
            {text: "command &> error.txt", correct: false},
            {text: "command | error.txt", correct: false}
        ], 
        rationale: "File descriptor 2 corresponds to STDERR. Redirecting 2> sends only error messages to a file." 
    },
    { 
        type: "SINGLE", 
        text: "A command succeeds only if the previous command was successful. Which operator should be used?", 
        options: [
            {text: "||", correct: false},
            {text: "&&", correct: true},
            {text: ";", correct: false},
            {text: "|", correct: false}
        ], 
        rationale: "The && operator ensures the second command runs only if the first returns exit code 0." 
    },
    { 
        type: "SINGLE", 
        text: "Which exit code indicates that a command executed successfully?", 
        options: [
            {text: "1", correct: false},
            {text: "127", correct: false},
            {text: "0", correct: true},
            {text: "-1", correct: false}
        ], 
        rationale: "In Linux/UNIX systems, an exit code of 0 means success." 
    },
    { 
        type: "MULTI", 
        text: "Which actions can be performed using command history? (Select 3)", 
        options: [
            {text: "Re-execute previous commands", correct: true},
            {text: "Edit a previous command before running it", correct: true},
            {text: "Search for commands interactively", correct: true},
            {text: "Recover deleted files", correct: false},
            {text: "Modify system logs", correct: false}
        ], 
        rationale: "History allows re-running, editing, and searching previous commands using arrow keys, Ctrl+R, or history expansion." 
    },
    { 
        type: "SINGLE", 
        text: "Which key combination searches backward through command history interactively?", 
        options: [
            {text: "Ctrl+C", correct: false},
            {text: "Ctrl+R", correct: true},
            {text: "Ctrl+D", correct: false},
            {text: "Ctrl+Z", correct: false}
        ], 
        rationale: "Ctrl+R performs a reverse incremental search in Bash history." 
    },
    { 
        type: "SINGLE", 
        text: "You need to temporarily set an environment variable for a single command execution. Which syntax is correct?", 
        options: [
            {text: "export VAR=value", correct: false},
            {text: "VAR=value command", correct: true},
            {text: "command VAR=value", correct: false},
            {text: "set VAR=value command", correct: false}
        ], 
        rationale: "Prefixing VAR=value before a command sets the variable only for that command execution." 
    },
    { 
        type: "SINGLE", 
        text: "Which command displays the full path of the executable that would be run?", 
        options: [
            {text: "locate", correct: false},
            {text: "find", correct: false},
            {text: "which", correct: true},
            {text: "whereis -s", correct: false}
        ], 
        rationale: "'which' shows the executable path resolved via the PATH variable." 
    },
    { 
        type: "MULTI", 
        text: "Which statements about the PATH environment variable are true? (Select 2)", 
        options: [
            {text: "It defines directories searched for executables", correct: true},
            {text: "It is read from /etc/passwd", correct: false},
            {text: "Order of directories matters", correct: true},
            {text: "It can only be modified by root", correct: false}
        ], 
        rationale: "PATH is an ordered list of directories searched for commands and can be modified per user." 
    },
    { 
        type: "SINGLE", 
        text: "What happens if you run a command that is not found in any PATH directory?", 
        options: [
            {text: "The command runs with limited privileges", correct: false},
            {text: "The shell returns exit code 127", correct: true},
            {text: "The shell exits immediately", correct: false},
            {text: "The command is searched in /tmp", correct: false}
        ], 
        rationale: "Exit code 127 indicates a command was not found." 
    },
    { 
        type: "SINGLE", 
        text: "Which command allows you to view a text file page by page?", 
        options: [
            {text: "cat", correct: false},
            {text: "less", correct: true},
            {text: "head", correct: false},
            {text: "tail", correct: false}
        ], 
        rationale: "'less' allows interactive, paginated viewing of text files." 
    },
    { 
        type: "MULTI", 
        text: "Which commands can be safely interrupted without terminating the shell session? (Select 2)", 
        options: [
            {text: "A long-running ping command", correct: true},
            {text: "A foreground process using Ctrl+C", correct: true},
            {text: "The bash shell itself", correct: false},
            {text: "systemd", correct: false}
        ], 
        rationale: "Ctrl+C sends SIGINT to the foreground process without closing the shell." 
    },
    { 
        type: "SINGLE", 
        text: "What signal is sent when pressing Ctrl+C?", 
        options: [
            {text: "SIGTERM", correct: false},
            {text: "SIGINT", correct: true},
            {text: "SIGKILL", correct: false},
            {text: "SIGHUP", correct: false}
        ], 
        rationale: "Ctrl+C sends SIGINT (interrupt signal) to the foreground process." 
    },
    { 
        type: "SINGLE", 
        text: "You want to run a command even if the previous one fails. Which operator should you use?", 
        options: [
            {text: "&&", correct: false},
            {text: "||", correct: false},
            {text: ";", correct: true},
            {text: "|", correct: false}
        ], 
        rationale: "The semicolon (;) executes commands sequentially regardless of success or failure." 
    },
    { 
        type: "FILL", 
        text: "Which built-in command displays the exit status of the last executed command?", 
        validAnswers: ["echo $?"], 
        rationale: "The variable $? contains the exit code of the previously executed command." 
    },
    { 
        type: "SINGLE", 
        text: "Which tool provides help pages for shell built-in commands?", 
        options: [
            {text: "man", correct: false},
            {text: "info", correct: false},
            {text: "help", correct: true},
            {text: "apropos", correct: false}
        ], 
        rationale: "The 'help' command provides documentation for Bash built-ins." 
    },
    { 
        type: "MULTI", 
        text: "Which statements about aliases are correct? (Select 2)", 
        options: [
            {text: "Aliases are expanded by the shell", correct: true},
            {text: "Aliases can replace complex commands", correct: true},
            {text: "Aliases persist without configuration files", correct: false},
            {text: "Aliases are executed before shell parsing", correct: false}
        ], 
        rationale: "Aliases are shell expansions and must be defined in shell configuration files to persist." 
    },
    { 
        type: "SINGLE", 
        text: "Which file is commonly used to define system-wide environment variables for login shells?", 
        options: [
            {text: "/etc/profile", correct: true},
            {text: "~/.bashrc", correct: false},
            {text: "/etc/environment", correct: false},
            {text: "~/.profile", correct: false}
        ], 
        rationale: "/etc/profile defines system-wide settings for login shells." 
    },
    { 
        type: "MATCHING", 
        text: "Match the commands to their typical usage.", 
        pairs: [
            {term: "head", def: "Display the beginning of a file"},
            {term: "tail", def: "Display the end of a file"},
            {term: "wc", def: "Count lines, words, or characters"},
            {term: "sort", def: "Order lines of text"}
        ], 
        rationale: "These commands are commonly used together in pipelines." 
    },
    { 
        type: "SINGLE", 
        text: "Why is quoting a variable important in shell scripts?", 
        options: [
            {text: "To increase execution speed", correct: false},
            {text: "To prevent word splitting and globbing", correct: true},
            {text: "To export the variable automatically", correct: false},
            {text: "To make the variable read-only", correct: false}
        ], 
        rationale: "Quoting prevents unintended word splitting and filename expansion." 
    },
    {
        type: "SINGLE",
        text: "What does the following command allow you to do?<br><code>alias c='clear'</code>",
        options: [
            { text: "You can type clear to run the c command.", correct: false },
            { text: "You can type c to run the clear command.", correct: true },
            { text: "Nothing, since there is not a command named alias.", correct: false },
            { text: "It launches a second Login Shell and allows you to rename the clear command to just c.", correct: false },
            { text: "It allows you to rename the clear command to just c and then deletes the clear command.", correct: false }
        ],
        rationale: "The <b>alias</b> command creates a shortcut or 'custom name' for a command. <br>The syntax is <code>alias name='command'</code>.<br>Therefore, <code>alias c='clear'</code> instructs the shell to execute the <code>clear</code> command whenever the user types <code>c</code>."
    },

]);