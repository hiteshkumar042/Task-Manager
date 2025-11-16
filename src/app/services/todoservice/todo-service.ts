import { Injectable } from '@angular/core';


export interface ToDo {
  id: number,
  title: string,
  description: string
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {


  private toDos: ToDo[] = [

  ]


  getTodos() {
    let data = localStorage.getItem('task')
    return data ? JSON.parse(data) : []

  }

  addTodo(todo: ToDo) {
    let todolist = this.getTodos();
    todolist.push(todo)
    this.saveTodos(todolist)
  }

  private saveTodos(todos: ToDo[]) {
    localStorage.setItem('task', JSON.stringify(todos));
  }

  gettoDobyId(id: number) {
    let todo = this.toDos.find(t => t.id == id);
    return todo;
  }

  updateTodo(id: number, todoUpdated: any) {
    let todos = this.getTodos();
    todos = todos.map((t: any) => t.id === id ? todoUpdated : t)

    if (todos) {
      this.saveTodos(todos);
    }
  }

  deleteTodo(id: number) {
    let todos = this.getTodos();
    todos = todos.filter((t: any) => t.id !== id);
    this.saveTodos(todos);
  }
}
