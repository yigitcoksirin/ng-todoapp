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
    this._tasks = [
      {TaskId: crypto.randomUUID(), Text: "task1", isCompleted:false, isDeleted: false, isNew: true},
      {TaskId: crypto.randomUUID(), Text: "task2", isCompleted:false, isDeleted: false, isNew: true},
      {TaskId: crypto.randomUUID(), Text: "task3", isCompleted:false, isDeleted: false, isNew: true}
    ];
    localStorage.setItem("tasks", JSON.stringify(this._tasks));
  }

  addTask(taskText:any){
    const task:ToDoTask = {
      TaskId: crypto.randomUUID(),
      Text: taskText.value,
      isCompleted: false,
      isDeleted: false,
      isNew: true,
    }
    this._tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(this._tasks));
    taskText.value = "";
  }

  deleteTask(TaskId:string){
    if(TaskId){
      const task = this._tasks.find(t=>t.TaskId == TaskId);
      if(task){
        task.isDeleted = true;
        localStorage.setItem("tasks", JSON.stringify(this._tasks));
      }
    } 
  }

  saveChanges(){
    var tasks = localStorage.getItem("tasks");
    if (tasks){
      this.taskService.saveChanges(tasks);
    }
  }
}
