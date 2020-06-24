import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(`http://localhost:3000/${userName}/photos`);
  }
}
