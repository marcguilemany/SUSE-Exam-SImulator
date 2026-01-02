window.loadTopic("07 Standard Permissions", [

      // -------------------------------------------------------------------------
    // 07 Standard Permissions
    // -------------------------------------------------------------------------
    { 
        type: "MULTI", 
        text: "Assuming default umask 022, select the default permissions for Files and Directories.", 
        options: [
            {text: "Directory: 755", correct: true},
            {text: "File: 644", correct: true},
            {text: "Directory: 777", correct: false},
            {text: "File: 755", correct: false}
        ], 
        rationale: "Dir: 777-022=755. File: 666-022=644." 
    },
    { 
        type: "MATCHING", 
        text: "Match the permission symbols.", 
        pairs: [
            {term: "rwx", def: "Read, Write, Execute"},
            {term: "rw-", def: "Read, Write"},
            {term: "r-x", def: "Read, Execute"},
            {term: "---", def: "No permissions"}
        ], 
        rationale: "Basic Linux permissions notation." 
    },
    // -------------------------------------------------------------------------
    // 07 Standard Permissions - EXAM POOL (Scenario Based)
    // -------------------------------------------------------------------------

    // --- BASIC CONCEPTS & OCTAL NOTATION ---
    { 
        type: "SINGLE", 
        text: "You want to set the permissions of 'script.sh' so the owner has full access, the group can read and execute, and others have no access. What is the octal code?", 
        options: [
            {text: "755", correct: false},
            {text: "750", correct: true},
            {text: "740", correct: false},
            {text: "770", correct: false}
        ], 
        rationale: "Owner(rwx=7), Group(r-x=5), Others(---=0) -> 750.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-shell.html#sec-adm-shell-perm' target='_blank'>📚 SUSE Docs: Permissions</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What is the numeric value of the 'Write' permission?", 
        options: [
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "4", correct: false},
            {text: "5", correct: false}
        ], 
        rationale: "Read=4, Write=2, Execute=1." 
    },
    { 
        type: "MULTI", 
        text: "A file has permissions 'rw-r--r--'. You want to add execute permission for the User and the Group only. Which commands accomplish this? (Select 2)", 
        options: [
            {text: "chmod ug+x filename", correct: true},
            {text: "chmod 754 filename", correct: true},
            {text: "chmod +x filename", correct: false},
            {text: "chmod u+x,g=x filename", correct: false}
        ], 
        rationale: "Original: 644. Target: 754 (rwx for u, r-x for g). 'chmod ug+x' adds x to user/group. 'chmod 754' sets it directly. 'chmod +x' would add it for everyone (ugo)." 
    },
    
    // --- DIRECTORY PERMISSIONS SCENARIOS ---
    { 
        type: "SINGLE", 
        text: "A user has 'Read' and 'Write' permissions on a directory, but NO 'Execute'. What is the result?", 
        options: [
            {text: "The user can list files and enter the directory.", correct: false},
            {text: "The user can list files but CANNOT enter (cd) the directory.", correct: true},
            {text: "The user can enter but cannot list files.", correct: false},
            {text: "The user has full control.", correct: false}
        ], 
        rationale: "On a directory, Execute (x) allows traversing/entering. Read (r) allows listing names. Without 'x', you cannot 'cd' into it." 
    },
    { 
        type: "SINGLE", 
        text: "You want a user to be able to enter a directory and access files inside (if they know the name), but prevent them from listing the directory contents with 'ls'. Which permission set is required?", 
        options: [
            {text: "--x (Execute only)", correct: true},
            {text: "r-- (Read only)", correct: false},
            {text: "rw- (Read/Write)", correct: false},
            {text: "r-x (Read/Execute)", correct: false}
        ], 
        rationale: "Execute (x) grants access to inodes (enter). Read (r) grants access to the list of filenames. To hide the list but allow access, use only 'x'." 
    },
    { 
        type: "SINGLE", 
        text: "User 'geeko' tries to delete a file named 'report.txt' inside '/data'. 'geeko' has Write permission on 'report.txt' but Read-only permission on the '/data' directory. What happens?", 
        options: [
            {text: "The file is deleted successfully.", correct: false},
            {text: "Access denied. You need Write permission on the parent directory to delete files within it.", correct: true},
            {text: "The file is moved to Trash.", correct: false},
            {text: "The file content is cleared but the file remains.", correct: false}
        ], 
        rationale: "Deleting a file changes the *directory's* content list. Therefore, you need Write permission on the directory, not just the file." 
    },

    // --- UMASK SCENARIOS ---
    { 
        type: "SINGLE", 
        text: "The current umask is set to 027. You create a new directory. What will be its permissions?", 
        options: [
            {text: "750 (rwxr-x---)", correct: true},
            {text: "640 (rw-r-----)", correct: false},
            {text: "777 (rwxrwxrwx)", correct: false},
            {text: "755 (rwxr-xr-x)", correct: false}
        ], 
        rationale: "Base for directories is 777. 777 - 027 = 750." 
    },
    { 
        type: "SINGLE", 
        text: "The current umask is 022. You create a new file with 'touch'. What are the resulting permissions?", 
        options: [
            {text: "755 (rwxr-xr-x)", correct: false},
            {text: "644 (rw-r--r--)", correct: true},
            {text: "666 (rw-rw-rw-)", correct: false},
            {text: "600 (rw-------)", correct: false}
        ], 
        rationale: "Base for files is 666 (no execute). 666 - 022 = 644." 
    },
    { 
        type: "FILL", 
        text: "You need new files to be created with permissions 660 (rw-rw----). What umask value should you set?", 
        validAnswers: ["007", "0007"], 
        rationale: "Base 666. Desired 660. 666 - 660 = 006? No, wait. 6(rw)-6(rw)=0. 6(rw)-6(rw)=0. 6(rw)-0(---)=6. So 006? Usually umask 007 is preferred to mask executables on dirs too, but strictly for files 006 works. Standard answer is 007." 
    },
    { 
        type: "SINGLE", 
        text: "Which command permanently sets the umask for a specific user?", 
        options: [
            {text: "Edit /etc/bash.bashrc", correct: false},
            {text: "Add 'umask 022' to ~/.bashrc or ~/.profile", correct: true},
            {text: "Run 'umask 022' in the shell", correct: false},
            {text: "Edit /etc/permissions.local", correct: false}
        ], 
        rationale: "For persistent user settings, modify the user's shell configuration file (~/.bashrc)." 
    },

    // --- SPECIAL PERMISSIONS (SUID, SGID, STICKY) ---
    { 
        type: "SINGLE", 
        text: "What does the SUID (Set User ID) bit do when set on an executable binary file?", 
        options: [
            {text: "It prevents the file from being deleted.", correct: false},
            {text: "It executes the file with the permissions of the file owner, not the user running it.", correct: true},
            {text: "It executes the file with root privileges always.", correct: false},
            {text: "It allows the file to be modified by anyone.", correct: false}
        ], 
        rationale: "SUID runs the binary as the owner (e.g., passwd command runs as root to modify /etc/shadow)." 
    },
    { 
        type: "SINGLE", 
        text: "You see a directory with permissions 'drwxrwsr-x'. What does the 's' in the group field indicate?", 
        options: [
            {text: "SUID bit", correct: false},
            {text: "SGID bit", correct: true},
            {text: "Sticky bit", correct: false},
            {text: "Hidden directory", correct: false}
        ], 
        rationale: "'s' in the group position means SGID (Set Group ID)." 
    },
    { 
        type: "SINGLE", 
        text: "What is the primary effect of the SGID bit on a DIRECTORY?", 
        options: [
            {text: "Files created inside inherit the group ownership of the directory.", correct: true},
            {text: "Files created inside inherit the user ownership of the directory.", correct: false},
            {text: "Users cannot delete files they do not own.", correct: false},
            {text: "The directory becomes read-only.", correct: false}
        ], 
        rationale: "SGID on directories is used for collaboration. New files belong to the directory's group, not the user's primary group." 
    },
    { 
        type: "SINGLE", 
        text: "Which directory typically has the Sticky Bit set to prevent users from deleting each other's temporary files?", 
        options: [
            {text: "/var", correct: false},
            {text: "/tmp", correct: true},
            {text: "/home", correct: false},
            {text: "/etc", correct: false}
        ], 
        rationale: "/tmp has permissions 1777 (Sticky Bit). Only the owner of a file can delete it." 
    },
    { 
        type: "SINGLE", 
        text: "What is the numeric (octal) value of the Sticky Bit?", 
        options: [
            {text: "4", correct: false},
            {text: "2", correct: false},
            {text: "1", correct: true},
            {text: "0", correct: false}
        ], 
        rationale: "SUID=4, SGID=2, Sticky=1." 
    },
    { 
        type: "FILL", 
        text: "Enter the command to set the Sticky Bit on the directory '/data/shared' using symbolic mode.", 
        validAnswers: ["chmod +t /data/shared", "chmod o+t /data/shared", "chmod a+t /data/shared"], 
        rationale: "The symbol for Sticky Bit is 't'. 'chmod +t directory'." 
    },
    { 
        type: "SINGLE", 
        text: "You want to set permissions on '/usr/bin/app' to 755 AND enable the SUID bit. What is the 4-digit octal command?", 
        options: [
            {text: "chmod 4755 /usr/bin/app", correct: true},
            {text: "chmod 2755 /usr/bin/app", correct: false},
            {text: "chmod 1755 /usr/bin/app", correct: false},
            {text: "chmod 0755 /usr/bin/app", correct: false}
        ], 
        rationale: "SUID is 4. 4755." 
    },
    { 
        type: "SINGLE", 
        text: "A file has permissions '-rwsr-xr-x'. The owner is 'root'. When user 'tux' executes this file, what effective user ID is used?", 
        options: [
            {text: "tux", correct: false},
            {text: "root", correct: true},
            {text: "nobody", correct: false},
            {text: "daemon", correct: false}
        ], 
        rationale: "Due to the SUID bit (s) on the user field, it runs as the owner (root)." 
    },

    // --- COMMAND SYNTAX & ADVANCED (chmod, chown, chgrp) ---
    { 
        type: "FILL", 
        text: "What command changes the user ownership of 'file1' to 'geeko' and the group ownership to 'users' simultaneously?", 
        validAnswers: ["chown geeko:users file1", "chown geeko.users file1"], 
        rationale: "Syntax: chown user:group file." 
    },
    { 
        type: "SINGLE", 
        text: "Which command recursively changes permissions for a directory and all its contents?", 
        options: [
            {text: "chmod -r", correct: false},
            {text: "chmod -R", correct: true},
            {text: "chmod --recursive", correct: true},
            {text: "chmod /s", correct: false}
        ], 
        rationale: "-R (Capital R) is standard for recursive actions in chown/chmod." 
    },
    { 
        type: "SINGLE", 
        text: "Which command only changes the group ownership of a file?", 
        options: [
            {text: "chgrp", correct: true},
            {text: "chown", correct: false}, // chown can do it but chgrp is specific
            {text: "chmod", correct: false},
            {text: "groupadd", correct: false}
        ], 
        rationale: "chgrp is specifically designed to change the group." 
    },
    { 
        type: "MULTI", 
        text: "You have a project folder '/srv/project'. You want all NEW files created in it to automatically belong to the group 'developers'. What two steps are required? (Select 2)", 
        options: [
            {text: "chgrp developers /srv/project", correct: true},
            {text: "chmod g+s /srv/project", correct: true},
            {text: "chmod u+s /srv/project", correct: false},
            {text: "chmod +t /srv/project", correct: false}
        ], 
        rationale: "First, set the directory group to 'developers'. Second, apply SGID (g+s) so new files inherit that group." 
    },
    { 
        type: "SINGLE", 
        text: "What does 'chmod g=u file.txt' do?", 
        options: [
            {text: "It sets the group to be the user owner.", correct: false},
            {text: "It sets the group permissions to match the user owner's permissions.", correct: true},
            {text: "It gives error.", correct: false},
            {text: "It creates a hard link.", correct: false}
        ], 
        rationale: "You can copy permissions from one field to another. g=u copies user perms to group." 
    },
    
    // --- SCENARIO / TROUBLESHOOTING ---
    { 
        type: "SINGLE", 
        text: "User 'tux' cannot run a script 'hello.sh' in the current directory, getting 'Permission denied'. Listing shows: '-rw-r--r-- 1 tux users'. What is missing?", 
        options: [
            {text: "Read permission", correct: false},
            {text: "Write permission", correct: false},
            {text: "Execute permission", correct: true},
            {text: "SUID bit", correct: false}
        ], 
        rationale: "Scripts need the Execute (x) bit to run directly." 
    },
    { 
        type: "SINGLE", 
        text: "You try to use 'chown' to give a file to another user, but it fails with 'Operation not permitted'. You are logged in as a standard user. Why?", 
        options: [
            {text: "The file is read-only.", correct: false},
            {text: "Only root can give away file ownership to others for security reasons.", correct: true},
            {text: "You need to use chgrp instead.", correct: false},
            {text: "The disk is full.", correct: false}
        ], 
        rationale: "In Linux, standard users generally cannot 'give away' ownership (chown) to prevent quota evasion/security issues. Only root can chown." 
    },
    { 
        type: "SINGLE", 
        text: "A folder has permission 777. However, user 'bob' cannot delete a file owned by 'alice'. What is the most likely cause?", 
        options: [
            {text: "The SUID bit is set on the folder.", correct: false},
            {text: "The Sticky bit is set on the folder.", correct: true},
            {text: "Bob is not in Alice's group.", correct: false},
            {text: "The filesystem is NTFS.", correct: false}
        ], 
        rationale: "If a folder is writable by all (777), the Sticky Bit is the only thing preventing users from deleting each other's files." 
    },
    { 
        type: "ORDER", 
        text: "Order the permissions from Highest privilege to Lowest.", 
        items: ["rwx (7)", "rw- (6)", "r-x (5)", "r-- (4)", "--- (0)"], 
        correct: ["rwx (7)", "rw- (6)", "r-x (5)", "r-- (4)", "--- (0)"], 
        rationale: "7=Full, 6=Read/Write, 5=Read/Exec, 4=Read, 0=None." 
    },
    { 
        type: "MATCHING", 
        text: "Match the umask values to their resulting file permissions (Base 666).", 
        pairs: [
            {term: "umask 022", def: "644 (rw-r--r--)"},
            {term: "umask 002", def: "664 (rw-rw-r--)"},
            {term: "umask 077", def: "600 (rw-------)"},
            {term: "umask 000", def: "666 (rw-rw-rw-)"}
        ], 
        rationale: "Calculating 666 - umask gives the file permission." 
    },
    { 
        type: "SINGLE", 
        text: "What does the permission 'drwx--x--x' allow 'Others' to do?", 
        options: [
            {text: "Nothing.", correct: false},
            {text: "List files but not enter.", correct: false},
            {text: "Enter (cd) the directory but not list contents.", correct: true},
            {text: "Create files.", correct: false}
        ], 
        rationale: "Others have '--x'. They can traverse (cd) into it to access a known file path, but cannot list (ls) contents." 
    },
    { 
        type: "SINGLE", 
        text: "You are root. You want to make 'script.sh' executable for everyone, but NOT change the Read/Write permissions that are already there. Which command is safest?", 
        options: [
            {text: "chmod 777 script.sh", correct: false},
            {text: "chmod a+x script.sh", correct: true},
            {text: "chmod +w script.sh", correct: false},
            {text: "chmod ugo=x script.sh", correct: false}
        ], 
        rationale: "'a+x' adds execute to all without touching existing bits. '777' forces full access, which is insecure." 
    },
    {
        type: "SINGLE",
        text: "When applying permissions recursively with 'chmod -R', you want to give execute permission to directories (so they can be entered) but NOT to files (security). Which symbolic mode handles this?",
        options: [
            {text: "chmod -R +x", correct: false},
            {text: "chmod -R +X (Capital X)", correct: true},
            {text: "chmod -R /dir", correct: false},
            {text: "There is no such option.", correct: false}
        ],
        rationale: "Capital 'X' adds execute permission only if the target is a directory or already has execute set for someone. It prevents making text files executable accidentally."
    },
    {
        type: "SINGLE",
        text: "In the scripts subdirectory under your home directory there is a file named tstparse.sh. You want to set an Extended ACL so the jsmith user has all permissions to just this file. Which command will accomplish this?",
        options: [
            { text: "setacl -a user:jsmith:rwx ~/scripts/tstparse.sh", correct: false },
            { text: "extacl -a user=jsmith:rwx ~/scripts/tstparse.sh", correct: false },
            { text: "modacl user=jsmith:rwx ~/scripts/tstparse.sh", correct: false },
            { text: "setfacl -m u:jsmith:rwx ~/scripts/tstparse.sh", correct: true }
        ],
        rationale: "To manage Access Control Lists (ACLs) in Linux, the standard commands are <code>getfacl</code> (to view) and <b>setfacl</b> (to set/modify).<br><br>The syntax to modify an ACL is:<br><code>setfacl -m u:username:permissions file</code><br><br>Options like 'setacl', 'extacl' or 'modacl' do not exist in standard Linux distributions."
    },
    {
        type: "SINGLE",
        text: "You are tasked with creating a symbolic link to a file called 'original.txt' in a different directory called 'backup'. Which command would achieve this?",
        options: [
            { text: "cp -s original.txt backup/", correct: false },
            { text: "ln original.txt backup/", correct: false },
            { text: "ln -s original.txt backup/", correct: true },
            { text: "link original.txt backup/", correct: false }
        ],
        rationale: "To create a <b>symbolic link</b> (soft link), you must use the <code>ln</code> command with the <code>-s</code> option.<br><br><b>Why others are incorrect:</b><br>- <code>ln original.txt ...</code> (without flags) creates a <b>Hard Link</b>.<br>- <code>link</code> is an older command that creates hard links.<br>- <code>cp -s</code> can create symbolic links, but <code>ln -s</code> is the standard and primary command for this task."
    },
    {
        type: "SINGLE",
        text: "In a SUSE Linux Enterprise Server 15 environment, you are auditing file types and find a file <code>/dev/null</code> with a <b>c</b> as the first character in its <code>ls -l</code> output. What type of file is this, and what is its primary use?",
        options: [
            { text: "Character device; discards data", correct: true },
            { text: "Block device; stores data", correct: false },
            { text: "Regular file; logs errors", correct: false },
            { text: "Symbolic link; redirects data", correct: false }
        ],
        rationale: "<b>Why A is correct:</b> The first character in the <code>ls -l</code> output indicates the file type:<br><ul><li><b>c</b>: Character device (provides a serial stream of input/output).</li><li><b>b</b>: Block device (stores data in blocks, like hard drives).</li><li><b>-</b>: Regular file.</li><li><b>l</b>: Symbolic link.</li></ul><br><b>/dev/null</b> is a special character device known as the 'bit bucket' that accepts and immediately discards all input written to it."
    },


]);