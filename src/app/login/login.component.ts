import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LoginService } from '../login.service';

export class UserDetails {
  username: String | undefined;
  empid: bigint | undefined;
  firstName: String | undefined;
  middleName: String | undefined;
  lastName: String | undefined;
  mobile: String | undefined;
  email: String | undefined;
  password: String | undefined;
  key: String | undefined;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  registration = new UserDetails();
  fmsg = '';
  loginFailed = false;
  public loginForm!: FormGroup
  username: string | undefined;
  password: string | undefined;
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     username: [''],
  //     password: ['']
  //   })
  // }
  // login(): void {
  //   this._service.loginUserFromRemote(this.registration).subscribe(
  //     data => {
  //       console.log("respose received");
  //       this._router.navigate(['/loginsuccess'])
  //     },
  //     error => {
  //       console.log("Exception occured"),
  //         this.msg = "*Enter valid Username/Password";
  //     }
  //   )
  // }

  onSubmit = (formDetails: NgForm) => {
    const formDetail = formDetails.value;
    this.apiService.loginUserFromRemote(formDetail).subscribe(
      (response)=>{
        if(response.status == 'failure'){
          this.loginFailed = true;
          this.fmsg = response.message;
        }
        else {
            let username = response.payload.username;
            let password = response.payload.password;
            let key = response.payload.key;
            this.loginService.currentUserDetail.next({username,password,key});
            this.router.navigate(['home',username]);
          }
        }
    )
  }
}
