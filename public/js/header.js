document.addEventListener("DOMContentLoaded", function () {
    var currentPath = window.location.pathname; 
    var links = document.getElementsByClassName("element");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    var currentLink = document.querySelector('a[href="' + currentPath + '"]');
    if (currentLink){
        if(currentPath=="/"){
            currentLink=document.querySelector('a[href="/home"]');
        }
        currentLink.classList.add("active");
    }
});

burg=document.querySelector('.burg')
right=document.querySelector('.right')
main=document.querySelector('.main')
burg.addEventListener('click',()=>{
    right.classList.toggle('vis');
    main.classList.toggle('h-nav');
})