import './styles.css';
// import { Todo } from './class/todo.class.js';
// import { TodoList } from './class/todo-list.class.js';
import {Todo,TodoList} from './class';

const todoList = new TodoList();
const tarea= new Todo('aprender javascript');


console.log(tarea);

todoList.nuevoTodo(tarea);
console.log(todoList);