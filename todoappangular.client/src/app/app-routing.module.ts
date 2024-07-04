import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  { path:'test-component', component: TestComponentComponent },
  { path: 'tasks', loadChildren: () => import("./tasks/tasks.module").then(m=>m.TasksModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
