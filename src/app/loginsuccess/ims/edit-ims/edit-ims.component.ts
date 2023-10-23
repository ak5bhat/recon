import { Component, OnInit } from '@angular/core';
import { Nms } from '../../nms/nms.component';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-ims',
  templateUrl: './edit-ims.component.html',
  styleUrls: ['./edit-ims.component.css']
})
export class EditImsComponent implements OnInit{
  serialnumber: string = "";
  file = new Nms();
  showAlert = false;

  constructor(private route: ActivatedRoute, private fileService: ApiService) { }

  ngOnInit() {
    this.serialnumber = this.route.snapshot.params['Serialnumber'];
    this.fileService.getById(this.serialnumber).subscribe((data : File) => {
      this.file = data;
    });
  }
  updateFile() {
    this.fileService.updateFile(this.file).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
    });
  }
  closeAlert() {
    this.showAlert = false;
  }


}
