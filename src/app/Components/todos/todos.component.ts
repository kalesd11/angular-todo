import { Component } from '@angular/core';
import { Todos } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  'todos': Todos[];
  "todo" : string
constructor(){
  this.todos =[
    {
      todo : "Test todo",
      desc : "Test Description",
      active : true
    }
  ]
}
todoAdd(todo:Todos){
  console.log(todo);
  this.todos.push(todo)
  // localStorage.setItem("todos",JSON.stringify(this.todos))
}
delete(todo:Todos){
  const index = this.todos.indexOf(todo)
  this.todos.splice(index,1)
}
}
