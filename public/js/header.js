
document.addEventListener("DOMContentLoaded", function () {
    var currentPath = window.location.pathname; 
    var links = document.getElementsByClassName("element");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    var currentLink = document.querySelector('a[href="' + currentPath + '"]');
    if (currentLink) {
        currentLink.classList.add("active");
    }
});

