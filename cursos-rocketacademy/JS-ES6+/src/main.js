class List {
    constructor() {
        this.data = [];
    }
    //Static é uma class usada para receber e devolver resultados
    static soma(a, b) {
        return a + b;
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Luiz';
    }
    mostraUsuario() {
        console.log(this.usuario)
    }
}
const MinhaLista = new TodoList();

/*Esse console logo chama a class soma passando dois valores para realizar a soma
console.log(List.soma(1, 3));*/

/* Const é uma variavel constante não pode ser reatribuida posteriormente apenas Mutada (mutação)
const usuario = {nome: 'Luiz'};
usuario.nome = "Eduardo"
console.log(usuario.nome)
*/

/*Let é uma variavel que pode ter seu valor reatribuido dentro de um escopo
function teste(x){
    let y = 2;
    if (x > 5){
        let y = 4;
        console.log(x, y);
    }
}
console.log(teste(10));*/

/*const arr = [1, 2, 3, 4, 5, 6,]

//Map de uma array passa por todos os valores de uma array
const newArr = arr.map(function(item, index){
    return item + index;
})
console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
})
console.log(sum);

//Usado para filtrar uma array
const filter = arr.filter(function(item){
    return item % 2 === 0;
})
console.log(filter);

//Usado para encontrar determinado valor dentro de uma array
const find = arr.find(function(item){
    return item === 4;
})
console.log(find);*/

/*Metodo de arrow function
const arr = [1, 2, 3, 4, 5, 6,]

const newArr = arr.map(item => item * 2)
console.log(newArr);

const teste = () => 'teste';
console.log(teste);*/

/*Definição de valores padrão
function soma(a = 1, b = 3){
    return a + b;
}
console.log(soma(1));
console.log(soma());*/

/*Conceito de desestruturação
const usuario = {
    nome: 'Luiz',
    idade: 18,
    endereco: {
        rua: 'Liberdade',
        numero: '370',
        bairro: 'Cerejeiras'
    }
}
const {nome, idade, endereco: {rua}} = usuario;

function mostraNome({nome, idade}){
    console.log(nome, idade)
}
mostraNome(usuario);*/

/*Operador REST: pega o resto das propriedades
const usuario = {nome: 'Luiz', email: 'leduardo152@gmail.com', empresa: 'ACCT'};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

function soma (...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3))*/

/*SPREAD: repassar as informações de um objeto para outra estrutura de dados
const arr1 = [1, 2, 3, 4]
const arr2 = [2, 4, 1, 3]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const usuario1 = {nome: 'Luiz', idade: '18'}
const usuario2 = {...usuario1, nome: 'Eduardo'}
console.log(usuario2);*/

/* Templates Literals
const nome = 'Eduardo';
const idade = 18;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);*/

/*Exercicio 1 - Modulo 1 
class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  
    isAdmin() {
      return this.admin === true;
    }
  }
  
  class Admin extends Usuario {
    constructor(email, senha) {
      super(email, senha);
      this.admin = true;
    }
  }
  
  const User1 = new Usuario("email@teste.com", "senha123");
  const Adm1 = new Admin("email@teste.com", "senha123");
  
  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true*/

/*Exercicio 2 - Modulo 1 
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const newArr = usuarios.map(function ({ idade }) {
    return idade;
})
console.log(newArr);

//Usado para filtrar uma array
const filter = usuarios.filter(function ({ empresa }) {
    return empresa === 'Rocketseat';
})
console.log(filter);

//Usado para encontrar determinado valor dentro de uma array
const find = usuarios.find(function ({ empresa }) {
    return empresa === 'Google';
})
console.log(find);

const calculo = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(calculo);*/

/*Exercicio 3 - Modulo 1 
// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item =>  item + 10);
console.log(newArr);
//3.2
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));
//3.3
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
//3.4
const promise = () => new Promise((resolve, reject) => resolve());   
console.log(promise)*/

/*Exercicio 4.1 - Modulo 1 
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);*/

/*Exercicio 4.2 - Modulo 1
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: "Diego", idade: 23 }));*/

/*Exercicio 5.1 - Modulo 1 - REST
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...nums) {
    return nums.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3 */

/*Exercicio 5.2 - Modulo 1 - SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
const usuario2 = {...usuario, nome: 'Gabriel'};
console.log(usuario2);
const usuario3 = {...usuario, cidade: 'Lontras'};
console.log(usuario3);*/

/*Exercicio 6 - Modulo 1 - Template Literals 
const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);*/

/*Exercicio 7 - Modulo 1 - Object Short Syntax 
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
console.log(usuario);*/

/*Exercicio 1 - Modulo 2 
// 1.1
import ClasseUsuario from "./functions";
ClasseUsuario.info();

// 1.2
import { idade } from "./functions";
console.log(idade);

// 1.3
import Usuario, { idade as IdadeUsuario } from "./functions";*/

/*Modulo 3
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
})
/*minhaPromise()
    .then(response => {
        console.log(response)
    })
    .catch(err => {

    });

async function executaPromise(){
    const response = await minhaPromise();

    console.log(response)
}
executaPromise()

import axios from 'axios';

class api {
    static async getUserInfo(username){
        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        console.log(response);
    }
}
api.getUserInfo('LEduard0');;*/
//Aplicação de teste
import api from './api';
class app {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repositorie]')
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true){
        if (loading = true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`)

            const { description, name, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.render();
        } catch (err) {
            alert('Repositorio não foi encontrado');
        }

        this.setLoading(false);
    }
    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('b');
            titleEl.appendChild(document.createTextNode(repo.name))

            let descEl = document.createElement('p')
            descEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl)
        });
    }
}

new app()