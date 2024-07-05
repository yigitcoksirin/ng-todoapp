import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToDoTask } from "../models/toDoTask";
import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {
    private url = 'https://localhost:7234/api/task/';


    constructor(
        private http: HttpClient
    ) {}

    getTasks():Observable<ToDoTask[]>{
        return this.http.get<ToDoTask[]>(this.url + "get-tasks");
    }

    saveChanges(tasks:ToDoTask[]):Observable<ToDoTask>{
        return this.http.post<ToDoTask>(this.url + "save-changes", tasks);
    }
}