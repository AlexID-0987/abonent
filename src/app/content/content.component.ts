import { Component, OnInit } from '@angular/core';
import { PersService } from 'src/pers.service';
import { PERSONE } from '../PERSONE';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
pe:PERSONE[]=[]
  constructor(private serv:PersService) { }

  ngOnInit(): void {
    this.getapi()
  }
 getapi(){
   this.serv.getpersone().subscribe((a)=>this.pe=a)
 }
}
