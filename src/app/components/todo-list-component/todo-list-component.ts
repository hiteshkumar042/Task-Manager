import { Component, inject } from '@angular/core';
import { ToDo, TodoService } from '../../services/todoservice/todo-service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authservice/authservice';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-list-component',
  imports: [CommonModule],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.scss',
})
export class TodoListComponent {

  private todos = inject(TodoService);
  private router = inject(Router);
  public auth = inject(AuthService)

  tasks: ToDo[] = [];
  ngOnInit() {
    this.tasks = this.todos.getTodos()
  }


  removeTask(id: number) {
    this.todos.deleteTodo(id);
    this.tasks = this.todos.getTodos();
  }


  routetoAdd() {
    this.router.navigate(['add'])
  }

  edittask(id: number) {
    this.router.navigate(['edit/', id])
  }


  gotoSetting() {
    this.router.navigate(['setting'])
  }

}
