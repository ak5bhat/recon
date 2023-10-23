import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit{
  Status: boolean = false;
  name='';
  // pass = '';

  currentScreen = "";
  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    // console.log(this.route.snapshot)
    console.log(this.route.snapshot.params['username']); //6
    this.name = this.route.snapshot.params['username']
    

  }

  setScreen(ev:string){
    // console.log(typeof(ev));
    this.currentScreen = ev;
  }
}
