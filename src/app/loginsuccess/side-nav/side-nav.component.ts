import { Component, EventEmitter, Input,Output } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sideNavStatus: boolean = false;
  
  @Output() currentOption = new EventEmitter(); //for side-nav click 

  constructor(){

  }

  onClickList(name:string){
    console.log("from side-nav.ts when u click on the options: "+ name);
    this.currentOption.emit(name);
  }

  sideNavItems = [
    {
      number: "1",
      name: "Home",
      icon: 'fa-solid fa-house',
      link: "/login"
    },   
    {
      number: "2",
      name: "NMS",
      icon: 'bx bxs-hdd',
      link: "home/Akhil"
    },
    {
      number: "3",
      name: "IMS",
      icon: 'bx bxs-hdd',
      link: "/login"
    },
    {
      number: "4",
      name: "Reconciliation",
      icon: 'fa-solid fa-chart-line',
      link: "/login"
    },
    {
      number: "5",
      name: "Settings",
      icon: 'fa-solid fa-gear',
      link: "/login"
    },
    {
      number: "6",
      name: "About",
      icon: 'fa-solid fa-circle-info',
      link: "/login"
    },
    {
      number: "7",
      name: "Contact",
      icon: 'fa-solid fa-phone',
      link: "/login"
    }

  ]
  
}



