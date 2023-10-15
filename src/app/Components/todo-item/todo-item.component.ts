import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() 'todo' : Todos
  @Output() 'deleteTodo' : EventEmitter<Todos> = new EventEmitter()
  todoDelete(todo:Todos){
    this.deleteTodo.emit(todo)
  }
}
