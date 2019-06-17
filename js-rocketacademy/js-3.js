var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

//var todos = ['Fazer Café', 'Estudar JavaScript', 'Acessar Curso'];
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    //Limpa elementos da lista
    listElement.innerHTML = "";

    for(todo of todos){
        //createElement para criar o li
        var todoElement = document.createElement('li');
        //creaTextNode cria o texto do li
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');
        //indexOf conta qual é a posição do elemento da lista
        var pos = todos.indexOf(todo);
        //setAttribute para setar o atributo de um elemento
        linkElement.setAttribute('onclick', 'deleTodo('+ pos +')');

        linkElement.setAttribute('href', '#');
        //Adiciona um child para algum elemento
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
};
renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    //push adiciona no final da array
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
}
btnElement.onclick = addTodo;

function deleTodo(pos) {
    //splice deleta o elemento de uma array
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));

}