import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './Components/routing/routing.component';

const routes: Routes = [
  //add-todo component
  {path:"routes", component:RoutingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
