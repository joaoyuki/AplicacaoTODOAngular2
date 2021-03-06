import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  constructor() { }

  lastId: number = 0;

  todos: Todo[] = [];

  addTodo(todo: Todo): TodoDataService{

    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoId(id: number): TodoDataService{
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo{
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;

  }

  getAllTodos(): Todo[]{
    return this.todos;
  }

  getTodoById(id: number): Todo{

    return this.todos.filter(todo => todo.id == id).pop();

  }

  toggleTodoComplete(todo: Todo){
    let updateTodo = this.updateTodoById(todo.id, {
      completo: !todo.completo
    });
    return updateTodo;
  }

}
