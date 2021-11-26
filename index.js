window.onload = function(event) {
    var menuOpen = document.getElementById("menu-bar");
    var menuClose = document.getElementById("menu-close");

    if (menuOpen.addEventListener && menuClose.addEventListener) {
        // all browsers except IE before version 9
        menuOpen.addEventListener("click", toggleNav);
        menuClose.addEventListener("click", toggleNav);
    } else if (menuOpen.attachEvent && menuClose.attachEvent) {
        // IE before version 9
        menuOpen.attachEvent("onclick", toggleNav);
        menuClose.attachEvent("onclick", toggleNav);
    }
};

function toggleNav() {
    var navList = document.getElementById("nav-links-container");
    var barIcon = document.getElementById("menu-bar");
    var closeIcon = document.getElementById("menu-close");

    if (navList.className === "hidden") {
        navList.className = "show";
        barIcon.className = "hidden";
        closeIcon.className = "show";
    } else {
        navList.className = "hidden";
        barIcon.className = "show";
        closeIcon.className = "hidden";
    }
}