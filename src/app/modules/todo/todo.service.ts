import { Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   constructor(
//     private api: ApiService
//   ) { }

//   getTodos() {
//     return this.api.get('/tasks/1')
//   }
// }
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Task } from "./todo";
import { HandleError, HttpErrorHandler } from 'src/app/http-error-handler.service';


@Injectable()
export class TasksService {
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("TasksService");
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>("/api/v1/tasks/get")
      .pipe(catchError(this.handleError("getTasks", [])));
  }
}