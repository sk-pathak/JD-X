if(!sessionStorage.getItem('doNotShow')){
    sessionStorage.setItem('doNotShow','true');

    window.addEventListener('load', function (){
        var content = document.getElementById('init');
        let element = document.getElementById('animater');
        let loader = document.getElementById('loader');
    
        var words = [" PUSH", " PULL"];
        var index = 0;
    
        function alternateWords() {
            content.innerHTML = words[index];
            index = (index + 1) % words.length;
    
            setTimeout(alternateWords, 700); // Change the delay (in milliseconds) between word changes if needed
        }
        setTimeout(function () {
            content.classList.add('slide-down');
            alternateWords();
            element.classList.remove('typewriter');
        }, 1000);
        setTimeout(function () {
            loader.remove();
            let main = document.getElementById('main');
            main.style.display = 'block';
        }, 3000);
    });
}
else{
    document.head.getElementsByTagName("link")[3].href="";
    document.getElementById("loader").style.display="none";
    document.getElementById("main").style.display="unset";
}