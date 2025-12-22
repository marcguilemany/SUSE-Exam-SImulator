// -------------------------------------------------------------------------
// 06 Users and Groups
// -------------------------------------------------------------------------
window.loadTopic("06 Users and Groups", [

    { 
        type: "SINGLE", 
        text: "Which file stores the system-wide list of users on a SLES system?", 
        options: [
            {text: "/etc/group", correct: false},
            {text: "/etc/passwd", correct: true},
            {text: "/etc/shadow", correct: false},
            {text: "/etc/login.defs", correct: false}
        ], 
        rationale: "/etc/passwd contains the list of all user accounts along with basic info.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-adm-users.html#sec-adm-users-file' target='_blank'>📚 SUSE Docs: /etc/passwd</a>" 
    },

    { 
        type: "SINGLE", 
        text: "Which command is used to add a new user interactively in SLES?", 
        options: [
            {text: "useradd", correct: false},
            {text: "adduser", correct: true},
            {text: "usermod", correct: false},
            {text: "passwd", correct: false}
        ], 
        rationale: "`adduser` provides an interactive way to create a user account and set a password." 
    },

    { 
        type: "MULTI", 
        text: "Which of the following are valid ways to assign a user to a secondary group? (Select 2)", 
        options: [
            {text: "usermod -G groupname username", correct: true},
            {text: "adduser username groupname", correct: false},
            {text: "usermod -aG groupname username", correct: true},
            {text: "groupadd -u username groupname", correct: false}
        ], 
        rationale: "usermod -G sets secondary groups (overwrites), while -aG appends to existing groups." 
    },

    { 
        type: "MATCHING", 
        text: "Match the user management files to their purpose.", 
        pairs: [
            {term: "/etc/passwd", def: "Contains user account information"},
            {term: "/etc/shadow", def: "Stores hashed passwords"},
            {term: "/etc/group", def: "Contains group definitions"},
            {term: "/etc/gshadow", def: "Stores group passwords and admin info"}
        ], 
        rationale: "These files manage users and groups: passwd and shadow for accounts, group and gshadow for groups." 
    },

    { 
        type: "SINGLE", 
        text: "What does the 'id' command display for a user?", 
        options: [
            {text: "UID, GID, and secondary groups", correct: true},
            {text: "Only the primary group", correct: false},
            {text: "All users in the system", correct: false},
            {text: "Password expiration info", correct: false}
        ], 
        rationale: "'id' shows the user ID, primary group ID, and any secondary groups." 
    },

    { 
        type: "FILL", 
        text: "What command would you use to change a user's login shell to /bin/bash?", 
        validAnswers: ["chsh -s /bin/bash username"], 
        rationale: "`chsh -s /bin/bash username` changes the login shell of a user." 
    },

    { 
        type: "SINGLE", 
        text: "Which file defines the default settings for new users, like default shell and home directory?", 
        options: [
            {text: "/etc/login.defs", correct: true},
            {text: "/etc/profile", correct: false},
            {text: "/etc/skel/.bashrc", correct: false},
            {text: "/etc/default/useradd", correct: false}
        ], 
        rationale: "/etc/login.defs configures defaults for user creation, e.g., UID range, password aging." 
    },

    { 
        type: "SINGLE", 
        text: "If a user is deleted using 'userdel', which option keeps their home directory?", 
        options: [
            {text: "-r", correct: false},
            {text: "-f", correct: false},
            {text: "-h", correct: false},
            {text: "No option (default keeps home)", correct: true}
        ], 
        rationale: "By default, userdel does not remove the home directory unless -r is specified." 
    },

    { 
        type: "MULTI", 
        text: "Select valid statements regarding primary and secondary groups. (Select 2)", 
        options: [
            {text: "A user can have multiple primary groups", correct: false},
            {text: "A user has exactly one primary group", correct: true},
            {text: "Secondary groups are optional", correct: true},
            {text: "Secondary groups override the primary group", correct: false}
        ], 
        rationale: "Every user has exactly one primary group. Secondary groups are additional and optional." 
    },

    { 
        type: "SINGLE", 
        text: "Which command lists all members of a specific group?", 
        options: [
            {text: "getent group groupname", correct: true},
            {text: "groups groupname", correct: false},
            {text: "cat /etc/passwd | grep groupname", correct: false},
            {text: "id groupname", correct: false}
        ], 
        rationale: "`getent group groupname` queries the group database and shows all members." 
    },

    { 
        type: "SINGLE", 
        text: "What does the '/etc/skel' directory contain?", 
        options: [
            {text: "System-wide configuration files for all users", correct: false},
            {text: "Template files copied to a new user's home directory", correct: true},
            {text: "User logs", correct: false},
            {text: "Binaries for user commands", correct: false}
        ], 
        rationale: "Files in /etc/skel are copied to a new user's home directory upon creation." 
    },

    { 
        type: "FILL", 
        text: "Command to lock a user account to prevent login?", 
        validAnswers: ["passwd -l username"], 
        rationale: "`passwd -l username` locks the password, preventing login." 
    },

    { 
        type: "FILL", 
        text: "Command to unlock a previously locked user account?", 
        validAnswers: ["passwd -u username"], 
        rationale: "`passwd -u username` unlocks the password and allows login." 
    },

    { 
        type: "MULTI", 
        text: "Which of the following are valid fields in /etc/passwd? (Select 4)", 
        options: [
            {text: "Username", correct: true},
            {text: "UID", correct: true},
            {text: "GID", correct: true},
            {text: "Password hash", correct: false},
            {text: "Shell", correct: true},
            {text: "Group members", correct: false}
        ], 
        rationale: "Fields: username, password placeholder (x in modern systems), UID, GID, comment, home dir, shell." 
    },

    { 
        type: "SINGLE", 
        text: "Which command shows the groups the current user belongs to?", 
        options: [
            {text: "id", correct: true},
            {text: "groups", correct: true},
            {text: "getent group", correct: false},
            {text: "whoami", correct: false}
        ], 
        rationale: "`id` and `groups` both show current user's group membership." 
    },

    { 
        type: "MULTI", 
        text: "Which commands can modify group memberships for a user? (Select 2)", 
        options: [
            {text: "usermod", correct: true},
            {text: "groupmod", correct: false},
            {text: "gpasswd", correct: true},
            {text: "groupadd", correct: false}
        ], 
        rationale: "usermod can change groups, gpasswd can manage group membership. groupmod only changes group properties." 
    },

    { 
        type: "SINGLE", 
        text: "What does 'getent passwd username' do?", 
        options: [
            {text: "Displays the UID only", correct: false},
            {text: "Shows user info from system and NIS/LDAP databases", correct: true},
            {text: "Adds a user", correct: false},
            {text: "Deletes a user", correct: false}
        ], 
        rationale: "getent queries the Name Service Switch databases (passwd, group, hosts, etc)." 
    },

    { 
        type: "HOTSPOT", 
        text: "Click on the part of the 'id' command output that shows the secondary groups.", 
        image: "assets/img/id_command_output.png", 
        target: {x: 90, y: 50}, 
        rationale: "Secondary groups are listed after 'groups=' at the end of the 'id' output." 
    },

    { 
        type: "SINGLE", 
        text: "Which of the following commands removes a group?", 
        options: [
            {text: "groupdel groupname", correct: true},
            {text: "delgroup groupname", correct: false},
            {text: "groupremove groupname", correct: false},
            {text: "userdel groupname", correct: false}
        ], 
        rationale: "groupdel deletes an existing group." 
    },

    { 
        type: "MULTI", 
        text: "Which are true about the root user? (Select 3)", 
        options: [
            {text: "UID is 0", correct: true},
            {text: "Cannot be deleted", correct: true},
            {text: "Has unlimited privileges", correct: true},
            {text: "Uses /bin/sh exclusively", correct: false},
            {text: "Cannot belong to secondary groups", correct: false}
        ], 
        rationale: "Root has UID 0, unlimited privileges, cannot be deleted. Shell is configurable, can have secondary groups." 
    }

]);
