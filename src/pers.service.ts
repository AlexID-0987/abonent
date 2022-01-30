import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PERSONE } from './app/PERSONE';

@Injectable({
  providedIn: 'root'
})
export class PersService {
url='http://localhost:3000/posts';
person:PERSONE[]=[]
  constructor(private http:HttpClient) { }

  getpersone():Observable<PERSONE[]>{
    return this.http.get<PERSONE[]>(this.url)
  }
}
