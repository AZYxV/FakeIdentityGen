function generate(){

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);

            document.getElementById("avatar").src = data['results'][0]['picture']['large'];
            document.getElementById("pseudo").textContent = "@" + data['results'][0]['login']['username'];


            document.getElementById("firstn").textContent = data['results'][0]['name']['first'];
            document.getElementById("lastn").textContent = data['results'][0]['name']['last'];

            document.getElementById("age").textContent = data['results'][0]['dob']['age'];
            document.getElementById("gender").textContent = data['results'][0]['gender'];


            document.getElementById("country").textContent = data['results'][0]['location']['country'];
            document.getElementById("city").textContent = data['results'][0]['location']['city'];

            document.getElementById("email").textContent = data['results'][0]['email'];
            document.getElementById("phone").textContent = data['results'][0]['phone'];
        }
      });
}