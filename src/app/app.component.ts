import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = true; 
  user = {
    firstName: '',
  }
  

  onSubmit(){
    this.show = false;
  }
}

export class User{
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public email:string = "",
    public password: string = "",
    public address: string = "",
    public unit: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: string = "",
  ){}
}
