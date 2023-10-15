import { Component, EventEmitter, Output } from '@angular/core';
import { Todos } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  'todoelem': string;
  'description': string;
  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();
  constructor() {

  }
  onSubmit() {
    
    const todo:Todos = {
      todo : this.todoelem,
      desc : this.description,
      active : true
    }
    this.addTodo.emit(todo);
  }
}
