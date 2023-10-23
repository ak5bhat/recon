import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-upload-ims',
  templateUrl: './upload-ims.component.html',
  styleUrls: ['./upload-ims.component.css']
})
export class UploadImsComponent {

  fileUploadUrl="http://localhost:8080/product/upload";
  data = [];
  showAlert = false;

  constructor( private _http:HttpClient,private fileService:ApiService, private router:Router ) {

   }
  ngOnInit(): void {

   }

  file: any;

  selectFile(event: any) {
    //  console.log(event);
   this.file = event.target.files[0];
   console.log(this.file);
  }


  uploadFile()
  {
    let formData = new FormData()
    formData.append("file",this.file)
    this._http.post(this.fileUploadUrl,formData).subscribe((response :any) => {
        console.log("Excel file is uploaded successfully");
        this.showAlert=true;
      }
    )
 }
  closeAlert() {
  this.showAlert = false;
 }
}
