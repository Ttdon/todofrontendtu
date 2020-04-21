import { Component, OnInit } from '@angular/core';
//import { TodoService } from './todo.service';

import {Task} from './todo';
import {TasksService } from './todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  providers:[TasksService]
})
export class TodoComponent implements OnInit {
    tasks:Task[]
      editTask: Task
    
  constructor(
    private taskService: TasksService
  ) { }
ngOnInit() {
  this.getTasks ()
}
getTasks(): void{
  this.taskService.getTasks().subscribe(tasks =>(this.tasks = tasks))
 
}
add(title: String): void {
  this.editTask = undefined
  title = title.trim()
  if (!title) {
    return;
  }
}
}
