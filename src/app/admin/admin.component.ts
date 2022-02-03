import { Component, OnInit } from '@angular/core';
import { Pers1Service } from 'src/pers1.service';
import { PERSONE1 } from '../PERSONE1';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 pe1:PERSONE1[]=[]
 visib:boolean=false
 NAME:string=" "
 SUR:string=" "
 AGE:string=" "
 ED1:string=" "
 F1:string=" "
 ST1:string=" "
 GR1:string=" "
 ED2:string=" "
 F2:string=" "
 ST2:string=" "
 GR2:string=" "
 ED3:string=" "
 F3:string=" "
 ST3:string=" "
 GR3:string=" "
 ABID:string=" "
  constructor(private service:Pers1Service) { }

  ngOnInit(): void {
    this.getapiform()
  }
  getapiform(){
    this.service.getpeoples().subscribe((item)=>this.pe1=item)
  }
  additem(data:any){
    this.service.addpeoples(data)
  }
  delete(id:Number){
    this.service.deletepeoples(id)
  }
  chac(){
    this.visib=!this.visib
  }
  update(num:any){
    let n=this.NAME;
    let s=this.SUR;
    let a=this.AGE;
    let e1=this.ED1;
    let f1=this.F1;
    let st1=this.ST1;
    let gr1=this.GR1;
    let e2=this.ED2;
    let f2=this.F2;
    let st2=this.ST2;
    let gr2=this.GR2;
    let e3=this.ED3;
    let f3=this.F3;
    let st3=this.ST3;
    let gr3=this.GR3;
    let ab=this.ABID;
    const obj={id:num,name:n,surename:s,age:a,education:[e1,e2,e3],faculty:[f1,f2,f3],start:[st1,st2,st3],graduate:[gr1,gr2,gr3],abonentId:ab}
    this.service.updatePeople(num,obj)
  }
  
}
