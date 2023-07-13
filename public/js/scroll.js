// window.onload = function(){
//     window.scrollTo(0, 0);
// };
// let footer = document.querySelector("footer");
// footer.style.scrollSnapAlign = "none";

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

// let a=setTimeout(()=>{
//     footer.style.scrollSnapAlign = "end";
// },10);

// popup
let modal = document.getElementById("myModal");
let btn = document.getElementById("button-addon2");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 