import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

export class Nms {
  constructor(public OLT_NE_ID : string,public OLT : string,public type : string,public PON : string,public Serialnumber : string,public Zone : string,public Site : string){}
}

@Component({
  selector: 'app-nms',
  templateUrl: './nms.component.html',
  styleUrls: ['./nms.component.css']
})
export class NmsComponent implements OnInit {
  nms?: Nms[];
  title = '';

  constructor(private nmsService: ApiService) { }

  ngOnInit(): void {
    this.retrieveNms();
  }

  retrieveNms(): void {
    this.nmsService.getAllNms()
      .subscribe({
        next: (data) => {
          this.nms = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
