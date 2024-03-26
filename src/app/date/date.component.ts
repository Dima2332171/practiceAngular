import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent implements OnInit{
  message: string = '';
  items = ['Angular', 'React', 'Vue', 'Bootstrap', 'Node.js'];
  isCollapsed:boolean = true;
  text:string = 'Hello world'
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() {
    setInterval(()=>{
      this.message = new Date().toLocaleTimeString();
    },1000)
  }
  ngOnInit(){

  }

  myEvent(event:any){
    console.log(event)
  }
}
