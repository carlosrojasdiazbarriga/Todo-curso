import './styles.css';

import {Todo,TodoList} from './class';

import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();
const tarea= new Todo('aprender javascript :3');


// tarea.completado=true;


console.log(todoList);


crearTodoHtml(tarea);


