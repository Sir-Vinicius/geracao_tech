//https://randomuser.me/api/?results=10
// let api = fetch('https://randomuser.me/api/?results=10');

let users = [];

const cardContainer = document.getElementById('user-cards')

function fetchUsers () {
fetch('https://randomuser.me/api/?results=12')
.then( response => response.json())
.then(data => {
        // console.log(data.results[2].picture)
        users = data.results
        displayUsers(users)
    });
}
//.catch( error => console.error('error:', error ))

function displayUsers(users) {

    let cards = '';

    users.forEach(users => {
        cards += `
        <div class="col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
            <img src="${users.picture.large}" class="card-img-top rounded-circle mx-auto mt-3" alt="Foto de ${users.name.first}" style="width: 100px; height: 100px; object-fit: cover;">
                <div class="card-body text-center">
                    <h5 class="card-title">${users.name.first} ${users.name.last}</h5>
                    <p class="card-text"><strong>Idade:</strong> ${users.dob.age}</p>
                    <p class="card-text"><strong>Email:</strong> ${users.email}</p>
                    <p class="card-text"><strong>Senha:</strong> ${users.login.password}</p>
                    <p class="card-text"><strong>Telefone:</strong> ${users.phone}</p>
                    <p class="card-text"><strong>País:</strong> ${users.location.country}</p>
                </div>
            </div>
        </div>
        `
    });

    cardContainer.innerHTML = cards;
}


fetchUsers();

