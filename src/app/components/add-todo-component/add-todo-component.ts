import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDo, TodoService } from '../../services/todoservice/todo-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-todo-component.html',
  styleUrl: './add-todo-component.scss',
})
export class AddTodoComponent {

  private todos = inject(TodoService)
  private router = inject(Router)

  newTitle: string = "";
  newDescription: string = "";


  form = new FormGroup({
    newTitle: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    newDescription: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value) {
      const data = this.form.getRawValue();

      let postObj: ToDo = {
        id: Math.floor(Math.random() * 100),
        title: data.newTitle,
        description: data.newDescription
      }
      this.todos.addTodo(postObj);
      this.todos.openSnackBar("Task Added")
      this.router.navigate(['/'])

    }
  }

  addTask() {
    if (!this.newTitle || !this.newDescription) {
      return
    }

    let postObj = {
      id: Math.floor(Math.random() * 10 + 4),
      title: this.newTitle,
      description: this.newDescription
    }

    this.todos.addTodo(postObj);
    this.todos.openSnackBar("Task Added")
    this.router.navigate(['/'])

  }
}
