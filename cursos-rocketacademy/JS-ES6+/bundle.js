"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  } //Static é uma class usada para receber e devolver resultados


  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }], [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Luiz';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();
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

/*Exercicio 4 - Modulo 1 */

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);
