import {Todo, TodoList} from '../class';
import {todoList} from '../index';


const divTodolist = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorfiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
  const htmltodo = 
  `<li class="${ (todo.completado) ? 'completed': ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmltodo;

    divTodolist.append(div.firstElementChild);

    return div;
};


//eventos

txtInput.addEventListener('keyup',(event) =>{
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});


divTodolist.addEventListener('click',(event)=>{
    const nombreElemnto = event.target.localName;
    const todoElemnto = event.target.parentElement.parentElement;
    const todoId = todoElemnto.getAttribute('data-id');


    if(nombreElemnto.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemnto.classList.toggle('completed')
    }else if (nombreElemnto.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodolist.removeChild(todoElemnto);
    }
});

btnBorrar.addEventListener('click', ()=>{
    todoList.eliminarCompletados();
    for (let i= divTodolist.children.length-1; i>=0; i--){
        const element = divTodolist.children[i];

        if(element.classList.contains('completed')){
            divTodolist.removeChild(element);
        }
    }
});


ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if(!filtro){return;}

    anchorfiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const element of divTodolist.children){
        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');

        switch(filtro){
            
            case 'Pendientes':
                if(completado){
                    element.classList.add('hidden');
                }
            break;
            case 'Completados':
                if(!completado){
                    element.classList.add('hidden');
                }
            break;
        }
    }
});