function generate(){
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((json) => {
    console.log(json['value']);
    document.getElementById("avatar").src = json['results'][0]['picture']['large'];
    document.getElementById("pseudo").textContent = "@" + json['results'][0]['login']['username'];


    document.getElementById("firstn").textContent = json['results'][0]['name']['first'];
    document.getElementById("lastn").textContent = json['results'][0]['name']['last'];

    document.getElementById("age").textContent = json['results'][0]['dob']['age'];
    document.getElementById("gender").textContent = json['results'][0]['gender'];


    document.getElementById("country").textContent = json['results'][0]['location']['country'];
    document.getElementById("city").textContent = json['results'][0]['location']['city'];

    document.getElementById("email").textContent = json['results'][0]['email'];
    document.getElementById("phone").textContent = json['results'][0]['phone'];
    })
}