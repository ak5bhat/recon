import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface userDetail{
  username: string,
  password: string,
  key: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserDetail: BehaviorSubject<userDetail> = new BehaviorSubject({username:'',password:'',key:''});
  
  constructor() { }
}
