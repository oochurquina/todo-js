import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo))

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// todoList.todos[2].imprimirClase();
// newTodo.imprimirClase()

console.log('todos:', todoList.todos);