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

/*Exercicio 4 - Modulo 1 */
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
console.log(estado);
