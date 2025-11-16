import { Component, inject } from '@angular/core';
import { ToDo, TodoService } from '../../services/todoservice/todo-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-todo-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-todo-component.html',
  styleUrl: './edit-todo-component.scss',
})
export class EditTodoComponent {

  private todos = inject(TodoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id: number = 0;
  title: string = ""
  description: string = ""
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    let todo = this.todos.getTodos().find((t: any) => t.id == this.id)

    if (todo) {
      this.title = todo?.title;
      this.description = todo?.description
    }

  }

  updateRecord() {
    let postObj = {
      id: this.id,
      title: this.title,
      description: this.description,
    }

    this.todos.updateTodo(this.id, postObj);
    this.router.navigate(['/'])
  }
}
