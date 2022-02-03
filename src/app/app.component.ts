import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abonent';
  spiner=false
  spin(){
    this.spiner =true
    setTimeout(()=>{
     this.spiner=false
    },5000)
  }
}
