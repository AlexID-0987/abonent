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
}
