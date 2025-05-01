document.addEventListener("DOMContentLoaded", function() {
    var btn1 = this.getElementById("btn-1");
    var btn2 = this.getElementById("btn-2");
    var btn3 = this.getElementById("btn-3");
    var btn4 = this.getElementById("btn-4");

    btn1.addEventListener("click", function() {
        applicationsPopup.show();
    });
    
    btn2.addEventListener("click", function() {
        websitesPopup.show();
    });
    
    btn3.addEventListener("click", function() {
        scriptsPopup.show();
    });
    
    btn4.addEventListener("click", function() {
        itHelpPopup.show();
    });
    
});



// Applications Popup
const applicationsPopup = new Popup({
    backgroundColor: "#040404",
    titleColor: "#d8a524",
    borderWidth: "2px",
    borderColor: "#d8a524",
    id: "applications-popup",
    title: "Applications",
    content: `
        Custom-built applications tailored to your needs.
        Examples:
        - A simple inventory management tool for a small business
        - A scheduling app to organize internal meetings
        - A lightweight desktop app for customer records
    `
});

// Websites Popup
const websitesPopup = new Popup({
    backgroundColor: "#040404",
    titleColor: "#d8a524",
    borderWidth: "2px",
    borderColor: "#d8a524",
    id: "websites-popup",
    title: "Websites",
    content: `
        Clean, functional websites designed to represent you.
        Examples:
        - A portfolio website for an artist
        - A landing page for a local shop
        - A blog platform for personal writing
    `
});

// Scripts Popup
const scriptsPopup = new Popup({
    backgroundColor: "#040404",
    titleColor: "#d8a524",
    borderWidth: "2px",
    borderColor: "#d8a524",
    id: "scripts-popup",
    title: "Scripts",
    content: `
        Custom scripts to automate and simplify tasks.
        Examples:
        - A Python script to clean up and organize files
        - A Bash script to back up important data daily
        - A small automation tool for sending reports via email
    `
});

// IT Help Popup
const itHelpPopup = new Popup({
    backgroundColor: "#040404",
    titleColor: "#d8a524",
    borderWidth: "2px",
    borderColor: "#d8a524",
    id: "ithelp-popup",
    title: "IT Help",
    content: `
        Practical IT support for everyday problems.
        Examples:
        - Setting up secure email accounts for a small office
        - Troubleshooting Wi-Fi or network issues
        - Helping with backups and basic device security
    `
});








myPopup.show();