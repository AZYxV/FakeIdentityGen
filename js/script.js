function generate(){

    const firstname = ['Nathan','Emma','Theo','Guillaume','Mateo','Jean'];
    const lastname = ['Strickland','Tate','Edwards','Gibbs','Whittle','Mills'];

    const randomfirst = firstname[Math.floor(Math.random() * firstname.length)];
    const randomlast = lastname[Math.floor(Math.random() * lastname.length)];

    var pseudo = "@" + randomfirst + "." + randomlast;

    var followers = Math.floor(Math.random() * 999) + 1;
    var likes = Math.floor(Math.random() * followers) + 1;

    document.getElementById("pseudo").textContent = pseudo;

    document.getElementById("numf").textContent = followers;
    document.getElementById("numl").textContent = likes;

    document.getElementById("firstn").textContent = randomfirst;
    document.getElementById("lastn").textContent = randomlast;
}