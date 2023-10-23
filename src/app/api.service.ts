import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from './login/login.component';
import { Observable } from 'rxjs';
import { Nms } from './loginsuccess/nms/nms.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  apiHost = 'http://localhost:3000/';

  loginUserFromRemote(userData: UserDetails): Observable<any> {
    return this._http.post<any>(this.apiHost + 'login', userData)
  }

  registerUserFromRemote(userData: UserDetails): Observable<any> {
    return this._http.post<any>(this.apiHost + 'register', userData)
  }

  getAllNms(): Observable<Nms[]> {
    return this._http.get<Nms[]>(this.apiHost + 'nms');
  }

  getAllIms() {
    return this._http.get(this.apiHost + "/product");
  }

  getById(serialnumber : string) : Observable<File> {
    return this._http.get<File>(this.apiHost + "/product/" + serialnumber);
  }
  
  updateFile(file: File) {
    return this._http.put(this.apiHost + "/update", file);
  }
} 