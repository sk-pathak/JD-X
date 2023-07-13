window.onload = function(){
    window.scrollTo(0, 0);
};
var footer = document.querySelector("footer");
footer.style.scrollSnapAlign = "none";

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));
let a=setTimeout(()=>{
    footer.style.scrollSnapAlign = "end";
},10);