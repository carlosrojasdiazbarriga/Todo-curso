export class TodoList {

    constructor(){
        // this.todos = [];
        this.cargarLocalStorages();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorages();
    }

    eliminarTodo(id){
        this.todos=this.todos.filter(todo => todo.id !=  id);
        this.guardarLocalStorages();

    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if (todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorages();
                break;
            }
        }

    }

    eliminarCompletados(){
        this.todos=this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorages();
    }


    guardarLocalStorages(){
        localStorage.setItem('todo',JSON.stringify(this.todos));

    }

    cargarLocalStorages(){

        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];
    }
}