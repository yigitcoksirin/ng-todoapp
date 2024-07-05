import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { ToDoTask } from '../models/toDoTask';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [TaskService]
})
export class TaskListComponent {
  _tasks:ToDoTask[] = [];
  constructor(
    private taskService: TaskService
  ){}

  ngOnInit():void {
    localStorage.removeItem("tasks");
    
    this.taskService.getTasks().subscribe(data => {
      console.log(data);
      localStorage.setItem("tasks", JSON.stringify(data));
    });

    let lsTasks = localStorage.getItem("tasks")
    if(lsTasks != null){
      this._tasks = JSON.parse(lsTasks)
      console.log(lsTasks)
    }
  }

  addTask(taskText:any){
    const task:ToDoTask = {
      taskId: crypto.randomUUID(),
      text: taskText.value,
      isCompleted: false,
      isDeleted: false,
      isNew: true,
    }
    this._tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(this._tasks));
    taskText.value = "";
  }

  deleteTask(taskId:string){
    if(taskId){
      const task = this._tasks.find(t=>t.taskId == taskId);
      if(task){
        task.isDeleted = true;
        localStorage.setItem("tasks", JSON.stringify(this._tasks));
      }
    } 
  }

  saveChanges(){
    let tasks = localStorage.getItem("tasks");
    if (tasks){
      this.taskService.saveChanges(JSON.parse(tasks)).subscribe({
        next: () => console.log("Saved!"),
        error: (error) => console.log(error)
      });
    }
  }
}
