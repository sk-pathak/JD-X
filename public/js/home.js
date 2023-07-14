fetch("/github/userinfo/OpenLake")
.then(response => response.json())
.then(data=>{
    document.getElementById("repos").innerHTML+=data.public_repos;
});

fetch("https://api.github.com/orgs/OpenLake/members")
.then(response => response.json())
.then(data=>{
    document.getElementById("mems").innerHTML+=data.length;
});

fetch("github/userinfo/OpenLake/repos")
.then(response => response.json())
.then(data=>{
    const sum_star = data.reduce((total, repo) => total + repo.stargazers_count, 0);
    document.getElementById("stars").innerHTML+=sum_star;
    const sum_fork = data.reduce((total, repo) => total + repo.forks, 0);
    document.getElementById("forks").innerHTML+=sum_fork;
})