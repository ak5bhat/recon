import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Nms } from '../../nms/nms.component';

@Component({
  selector: 'app-ims-view',
  templateUrl: './ims-view.component.html',
  styleUrls: ['./ims-view.component.css']
})
export class ImsViewComponent implements OnInit{

  file?: Nms[];
  searchText: any;
  constructor(private fileService: ApiService, private _router:Router) { }

  ngOnInit() {
    this.fileService.getAll().subscribe((response: File[]) => {
      this.file = response;
    });
  }
}
