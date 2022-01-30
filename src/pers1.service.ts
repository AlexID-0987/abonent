import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PERSONE1 } from './app/PERSONE1';

@Injectable({
  providedIn: 'root'
})
export class Pers1Service {
url='http://localhost:3000/posts';
peoples:PERSONE1[]=[]
  constructor(private http:HttpClient) { }

  getpeoples():Observable<PERSONE1[]>{
    return this.http.get<PERSONE1[]>(this.url)
  }
  addpeoples(data:any){
    this.http.post<PERSONE1[]>(this.url,{name:data.na,surename:data.su,age:data.ag,education:[data.e1,data.e2,data.e3],faculty:[data.f1,data.f2,data.f3],abonentId:data.abId})
    .subscribe((a)=>{console.warn(this.peoples)})
  }
}
