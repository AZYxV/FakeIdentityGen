
function random(firstname){
    return firstname[Math.floor(Math.random()*firstname.lenght)];
};

const firstname = ['Nathan','Emma'];

const lastname = ['Pauzin','Sichouc'];


console.log(random(firstname));