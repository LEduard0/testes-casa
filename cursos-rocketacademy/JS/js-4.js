//Function para idade
/*function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return idade >= 18 ? resolve() : reject();
        }, 2000);
    });
}
checaIdade(15)
    .then(function(){
        console.log('Maior que 18');
    })
    .catch(function(){
        console.log('Menor que 18');
    })
*/
var inputElement = document.querySelector('input');
var listElement = document.querySelector('ul');

function renderRepositorios(repositorios) {
    listElement.innerHTML = "";

    for (repo of repositorios) {
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}
function renderLoading(loading) {
    listElement.innerHTML = "";
    const loadElement = document.createTextNode('Carregando...');
    const liElement = document.createElement('li');

    liElement.appendChild(loadElement);
    listElement.appendChild(liElement);
}
function renderError(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}
function listRepositorios() {
    var user = inputElement.value;

    if (!user) return;
    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositorios(response.data);
        })
        .catch(function (reject) {
            renderError();
        })
}

