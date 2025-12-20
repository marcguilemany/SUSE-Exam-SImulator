// Aseguramos que el array global existe, si no, lo creamos
window.examData = window.examData || [];

// Añadimos las preguntas de este tema
window.examData.push(


   // -------------------------------------------------------------------------
    // 16 Network Management Fundamentals
    // -------------------------------------------------------------------------
    { 
        type: "FILL", 
        text: "Which file contains the main configuration for the default NTP service (chrony) in SLES 15?", 
        validAnswers: ["/etc/chrony.conf"], 
        rationale: "SLES 15 uses Chrony by default, so the file is /etc/chrony.conf. (Legacy NTP used /etc/ntp.conf).<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-time.html' target='_blank'>📚 SUSE Docs: Time Sync</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which command shows the current routing table?", 
        options: [
            {text: "ipconfig -rd", correct: false},
            {text: "ip route show", correct: true},
            {text: "cat /etc/sysconfig/routes", correct: false},
            {text: "netstat -i", correct: false}
        ], 
        rationale: "'ip route show' (or 'ip r') is the standard command. 'ipconfig' is Windows. /etc/sysconfig/routes shows static routes, not the live table.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-network.html' target='_blank'>📚 SUSE Docs: Routing</a>" 
    },
    { 
        type: "SINGLE", 
        text: "What protocol is used by tools like 'ping' for network troubleshooting?", 
        options: [
            {text: "TCP", correct: false},
            {text: "ICMP", correct: true},
            {text: "UDP", correct: false}
        ], 
        rationale: "ICMP (Internet Control Message Protocol) is used for diagnostics." 
    },
    { 
        type: "FILL", 
        text: "Which file contains the configuration for DNS nameservers?", 
        validAnswers: ["/etc/resolv.conf"], 
        rationale: "/etc/resolv.conf is where you define the 'nameserver' IP addresses." 
    },
    { 
        type: "SINGLE", 
        text: "What is the default network management service for SUSE Linux Enterprise Server 15 (Server installation)?", 
        options: [
            {text: "NetworkManager", correct: false},
            {text: "wicked", correct: true},
            {text: "systemd-networkd", correct: false},
            {text: "ifup", correct: false}
        ], 
        rationale: "Wicked is the default for servers. NetworkManager is default for desktops/laptops.<br><br><a href='https://documentation.suse.com/sles/15-SP5/html/SLES-all/cha-network.html' target='_blank'>📚 SUSE Docs: Network Managers</a>" 
    },
    { 
        type: "SINGLE", 
        text: "Which command is used to apply changes made to the wicked configuration files without rebooting?", 
        options: [
            {text: "systemctl restart network", correct: false},
            {text: "wicked ifreload all", correct: true},
            {text: "wicked apply", correct: false},
            {text: "ifup -a", correct: false}
        ], 
        rationale: "'wicked ifreload all' reapplies configuration from files." 
    },
    { 
        type: "SINGLE", 
        text: "Where are the network interface configuration files stored in SLES 15?", 
        options: [
            {text: "/etc/network/interfaces", correct: false},
            {text: "/etc/sysconfig/network", correct: true},
            {text: "/var/lib/wicked", correct: false},
            {text: "/usr/lib/network", correct: false}
        ], 
        rationale: "The standard path is /etc/sysconfig/network/ifcfg-*." 
    },

    // --- CONFIGURATION FILES ---
    { 
        type: "FILL", 
        text: "What is the file name to configure the interface 'eth0'?", 
        validAnswers: ["ifcfg-eth0", "/etc/sysconfig/network/ifcfg-eth0"], 
        rationale: "Configuration files are named 'ifcfg-' followed by the interface name." 
    },
    { 
        type: "MULTI", 
        text: "Which variables are mandatory in an 'ifcfg' file for a static IP configuration? (Select 2)", 
        options: [
            {text: "BOOTPROTO='static'", correct: true},
            {text: "DHCP='no'", correct: false},
            {text: "IPADDR='192.168.1.10'", correct: true},
            {text: "GATEWAY='192.168.1.1'", correct: false}
        ], 
        rationale: "BOOTPROTO defined the method, and IPADDR defines the address. Gateway is often global or in routes." 
    },
    { 
        type: "SINGLE", 
        text: "Which file defines the order in which the system looks up hostnames (e.g., files vs dns)?", 
        options: [
            {text: "/etc/resolv.conf", correct: false},
            {text: "/etc/hosts", correct: false},
            {text: "/etc/nsswitch.conf", correct: true},
            {text: "/etc/host.conf", correct: false}
        ], 
        rationale: "/etc/nsswitch.conf controls the order (hosts: files dns)." 
    },

    // --- IP COMMAND (IPROUTE2) ---
    { 
        type: "SINGLE", 
        text: "Which command has replaced 'ifconfig' and 'route' in modern Linux distributions?", 
        options: [
            {text: "netstat", correct: false},
            {text: "ip (iproute2)", correct: true},
            {text: "nmcli", correct: false},
            {text: "iw", correct: false}
        ], 
        rationale: "The 'ip' command suite replaces the deprecated net-tools." 
    },
    { 
        type: "FILL", 
        text: "Enter the command to show all IP addresses assigned to interfaces.", 
        validAnswers: ["ip addr", "ip addr show", "ip a"], 
        rationale: "'ip addr' (or 'ip a') displays addresses." 
    },
    { 
        type: "ORDER", 
        text: "Construct the command to add the IP 10.0.0.5/24 to interface eth0 temporarily.", 
        items: ["ip", "addr", "add", "10.0.0.5/24", "dev", "eth0"], 
        correct: ["ip", "addr", "add", "10.0.0.5/24", "dev", "eth0"], 
        rationale: "Syntax: ip addr add [IP] dev [IFACE]." 
    },
    { 
        type: "SINGLE", 
        text: "How do you view the kernel routing table using the 'ip' command?", 
        options: [
            {text: "ip route show", correct: true},
            {text: "ip table list", correct: false},
            {text: "route -n", correct: false},
            {text: "netstat -r", correct: false}
        ], 
        rationale: "'ip route show' is the modern command. 'route' and 'netstat' are legacy." 
    },

    // --- HOSTNAME & DNS ---
    { 
        type: "FILL", 
        text: "Which command allows you to permanently set the system hostname (modifying /etc/hostname)?", 
        validAnswers: ["hostnamectl set-hostname", "hostnamectl"], 
        rationale: "hostnamectl set-hostname <name> updates the static hostname." 
    },
    { 
        type: "SINGLE", 
        text: "You modify /etc/resolv.conf manually, but after a reboot, your changes are lost. Why?", 
        options: [
            {text: "You didn't run 'mkinitrd'.", correct: false},
            {text: "The file is managed by 'netconfig' and overwritten by Wicked/NetworkManager.", correct: true},
            {text: "The file system is read-only.", correct: false},
            {text: "You need to edit /etc/hosts instead.", correct: false}
        ], 
        rationale: "netconfig merges DNS settings from DHCP and static config. To make manual changes persistent, disable netconfig updates or edit /etc/sysconfig/network/config." 
    },
    { 
        type: "MULTI", 
        text: "Which tools can be used to query DNS servers for debugging? (Select 2)", 
        options: [
            {text: "dig", correct: true},
            {text: "ping", correct: false},
            {text: "host", correct: true},
            {text: "dns-check", correct: false}
        ], 
        rationale: "'dig' and 'host' are standard DNS query tools. 'nslookup' is also valid but older." 
    },

    // --- TROUBLESHOOTING & PORTS ---
    { 
        type: "SINGLE", 
        text: "Which command replaces 'netstat' to display listening sockets and ports?", 
        options: [
            {text: "ss", correct: true},
            {text: "ip sock", correct: false},
            {text: "sockstat", correct: false},
            {text: "ps -net", correct: false}
        ], 
        rationale: "'ss' (socket statistics) is the modern replacement for netstat." 
    },
    { 
        type: "FILL", 
        text: "Enter the command options for 'ss' to show TCP (t), UDP (u), Listening (l) sockets with Numeric (n) ports.", 
        validAnswers: ["-tuln", "-tulpn", "-nult"], 
        rationale: "ss -tuln is the standard combo to check open ports." 
    },
    { 
        type: "MATCHING", 
        text: "Match the well-known ports to their services.", 
        pairs: [
            {term: "22", def: "SSH"},
            {term: "80", def: "HTTP"},
            {term: "443", def: "HTTPS"},
            {term: "53", def: "DNS"}
        ], 
        rationale: "Standard IANA ports." 
    },

    // --- FIREWALL & OTHERS ---
    { 
        type: "SINGLE", 
        text: "What is the default Firewall management tool in SLES 15?", 
        options: [
            {text: "SuSEfirewall2", correct: false},
            {text: "firewalld", correct: true},
            {text: "iptables-services", correct: false},
            {text: "nftables-cli", correct: false}
        ], 
        rationale: "SLES 15 replaced SuSEfirewall2 with firewalld." 
    },
    { 
        type: "SINGLE", 
        text: "Which directory contains the 'local' hosts file mapping IPs to names?", 
        options: [
            {text: "/etc/sysconfig/hosts", correct: false},
            {text: "/etc/hosts", correct: true},
            {text: "/var/lib/hosts", correct: false}
        ], 
        rationale: "/etc/hosts is the local lookup table." 
    },
    { 
        type: "SINGLE", 
        text: "You want to check the full path to a remote host to see where packets are dropping. Which command do you use?", 
        options: [
            {text: "ping", correct: false},
            {text: "traceroute", correct: true},
            {text: "route", correct: false},
            {text: "netcat", correct: false}
        ], 
        rationale: "traceroute (or tracepath) shows the hops packets take." 
    },
    { 
        type: "SINGLE", 
        text: "What allows the kernel to assign predictable network interface names (e.g., eth0 vs ens33)?", 
        options: [
            {text: "udev", correct: true},
            {text: "wicked", correct: false},
            {text: "biosdevname", correct: false},
            {text: "ipv6", correct: false}
        ], 
        rationale: "udev rules are responsible for consistent device naming based on firmware/topology." 
    }

);