import { Component } from '@angular/core';
import { TaskService } from '../services/task-service';
import { ToDoTask } from '../models/toDoTask';
import Swal from 'sweetalert2';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [TaskService]
})
export class TaskListComponent {
  _tasks:ToDoTask[] = [];
  isUpdating:boolean = false;
  startingValues:ToDoTask[] = [];
  updatingTask:any | undefined = undefined;
  taskText:string = "";
  isModified:boolean = false;
  isModifiedMessage:string = this.isModified ? "Changes detected, consider saving." : "Everything is up to date";
  constructor(
    private taskService: TaskService
  ){}

  status(){
    if (JSON.stringify(this.startingValues) == JSON.stringify(this._tasks)){
      this.isModified = false;
    } else {
      this.isModified = true;
    }

    this.isModifiedMessage = this.isModified ? "Changes detected, consider saving." : "Everything is up to date";
  }

  ngOnInit():void {
    localStorage.removeItem("tasks");
    this.taskService.getTasks().subscribe(data => {
      localStorage.setItem("tasks", JSON.stringify(data));
      let lsTasks = localStorage.getItem("tasks")
      if(lsTasks){
        this._tasks = JSON.parse(lsTasks)
      }

      this.startingValues = JSON.parse(JSON.stringify(this._tasks));
    });


  }

  addTask(){
    const task:ToDoTask = {
      taskId: crypto.randomUUID(),
      text: this.taskText,
      isCompleted: false,
      isDeleted: false,
      isNew: true,
      isUpdated: false
    }
    this._tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(this._tasks));
    this.taskText = "";
    this.status();
  }

  deleteTask(taskId:string){
    if(taskId){
      const task = this._tasks.find(t=>t.taskId == taskId);
      if(task){
        task.isDeleted = true;
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify(this._tasks));
        this.status();
      }
    } 
  }

  saveChanges(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if(result.isConfirmed){
        let tasks = localStorage.getItem("tasks");
        if (tasks && this.isModified){
          this.taskService.saveChanges(JSON.parse(tasks)).subscribe({
            next: () => console.log("Saved!"),
            error: (error) => console.log(error)
          });
          this.startingValues = JSON.parse(JSON.stringify(this._tasks));
          this.status();
        }
        Swal.fire({
          title: "Saved!",
          text: "Your changes have been saved.",
          icon: "success"
        });
      }
    });
  }

  toggleUpdateMode(task:ToDoTask){
    if(this.isUpdating == true){
      this.isUpdating = false;
      this.updatingTask = undefined;
      this.taskText = "";
    } else {
      this.isUpdating = true;
      this.updatingTask = task;
      this.taskText = task.text;
    }
  }

  updateTask(){
    console.log(this.updatingTask);
      let updatedTask = this._tasks.find(t=>t.taskId == this.updatingTask.taskId);
      if (updatedTask != undefined){
        updatedTask.text = this.taskText;
        updatedTask.isUpdated = true;
        localStorage.setItem("tasks", JSON.stringify(this._tasks));
        this.isUpdating = false;
        this.updatingTask = undefined;
        this.taskText = "";
        this.status();
      }
  }

  checkTask(task:ToDoTask){
    let switchedTask = this._tasks.find(t=>t.taskId == task.taskId);
    if(switchedTask != undefined){
      switchedTask.isCompleted = !switchedTask.isCompleted;
    }
    localStorage.setItem("tasks", JSON.stringify(this._tasks));
    this.status();
  }
}
