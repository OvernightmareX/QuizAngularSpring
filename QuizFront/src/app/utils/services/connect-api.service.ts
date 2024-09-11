import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Question} from "../types/question";

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {

  apiUrl = environment.apiUrl + "/quiz";

  constructor(private http: HttpClient) { }

  getQuestions(quantity: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl + "?limit=" + quantity).pipe(
      catchError(err => {
        alert("Une erreur est survenue, " + err?.message);
        return of([]);
      })
    );
  }


}
