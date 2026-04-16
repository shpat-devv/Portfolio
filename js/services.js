document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByClassName("services-button");
    var btn1 = buttons[0];
    var mobile_btn1 = buttons[1];
    var btn2 = buttons[2];
    var mobile_btn2 = buttons[3];
    var btn3 = buttons[4];
    var mobile_btn3 = buttons[5];
    var btn4 = buttons[6];
    var mobile_btn4 = buttons[7];

    btn1.addEventListener("click", function () {
        applicationsPopup.show();
    });

    mobile_btn1.addEventListener("click", function () {
        applicationsPopup.show();
    });

    btn2.addEventListener("click", function () {
        websitesPopup.show();
    });

    mobile_btn2.addEventListener("click", function () {
        websitesPopup.show();
    });

    btn3.addEventListener("click", function () {
        scriptsPopup.show();
    });

    mobile_btn3.addEventListener("click", function () {
        scriptsPopup.show();
    });

    btn4.addEventListener("click", function () {
        itHelpPopup.show();
    });

    mobile_btn4.addEventListener("click", function () {
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
        Usual price range without custom backend: 100CHF - 500CHF
        Usual price range with custom backend: 500CHF - 2000CHF
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
        Usual price range without custom backend: 50CHF - 100CHF
        Usual price range with custom backend: 100CHF - 500CHF
    `
});

// Scripts Popup
const scriptsPopup = new Popup({
    backgroundColor: "#040404",
    titleColor: "#d8a524",
    borderWidth: "2px",
    borderColor: "#d8a524",
    id: "scripts-popup",
    title: "Backend",
    content: `
        Usual price range: 50CHF - 500CHF
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
        Usual price range: 10CHF - 100CHF
    `
});

