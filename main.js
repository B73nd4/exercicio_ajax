document.addEventListener("DOMContentLoaded", function () {
    const nome = document.querySelector('#nome');
    const username = document.querySelector('#username');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const avatar = document.querySelector('#avatar');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/B73nd4')
        .then(function(res){
            return res.json();
        })
        .then(function(json) {
            console.log(json);
            nome.innerText = json.name;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            followers.innerText = json.followers;
            following.innerText = json.following;
            repos.innerText = json.public_repos;
            link.href = json.html_url;
        })
})