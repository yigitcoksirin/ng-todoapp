import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TaskListComponent } from "./task-list/task-list.component";

const routes: Routes = [{
        path: "",
        children: [
            { path: '', component: TaskListComponent},
            { path: 'tasks/list', component: TaskListComponent},
        ]
    }]

@NgModule({
    declarations: [
        TaskListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        TaskListComponent,
    ],
})
export class TasksModule {

}