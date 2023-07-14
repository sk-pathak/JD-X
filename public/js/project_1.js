window.onload = function(){
    window.scrollTo(0, 0);
};
document.getElementsByClassName("temp")[0].style.scrollSnapAlign="none";
var footer = document.querySelector("footer");
footer.style.scrollSnapAlign = "none";


fetch("/github/repoinfo/OpenLake/Activity-Tracker")
.then(response => response.json())
.then(data=>{
    document.getElementById("stars_count").innerHTML+=data.stargazers_count;
    document.getElementById("issues").innerHTML+=data.open_issues_count;
    document.getElementById("fork_count").innerHTML+=data.forks_count;
});

fetch("https://api.github.com/repos/OpenLake/Activity-Tracker/pulls")
.then(response => response.json())
.then(data=>{
    document.getElementById("pulls").innerHTML+=data.length;
});

fetch("/github/commitinfo/OpenLake/Activity-Tracker")
.then(response => response.json())
.then(data=>{
    document.getElementById("commit").innerHTML+="By " + data[0].commit.author.name + " on " + data[0].commit.author.date;
});