import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


const API = 'http://localhost:3000/'
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string): Observable<Array<Photo>> {
    return this.http.get<Array<Photo>>(`${API}${userName}/photos`);
  }

  listFromUserPaginated(userName: string, page: number): Observable<Array<Photo>> {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http.get<Array<Photo>>(`${API}${userName}/photos`, { params });
  }
}
