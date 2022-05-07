function generate(){
    var followers = Math.floor(Math.random() * 999) + 1;
    var likes = Math.floor(Math.random() * 999) + 1;

    document.getElementById("numf").textContent = followers;
    document.getElementById("numl").textContent = likes;
}