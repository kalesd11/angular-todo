import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './Components/todos/todos.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { RoutingComponent } from './Components/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
