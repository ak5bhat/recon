import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SignupComponent } from './signup/signup.component';
import { NmsComponent } from './loginsuccess/nms/nms.component';
import { UploadImsComponent } from './loginsuccess/ims/upload-ims/upload-ims.component';
import { ImsViewComponent } from './loginsuccess/ims/ims-view/ims-view.component';
import { EditImsComponent } from './loginsuccess/ims/edit-ims/edit-ims.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'home/:username', component:LoginsuccessComponent},
  {path:'home/:username/nmsData', component:NmsComponent},
  {path:'home/:username/uploadIms', component: UploadImsComponent},
  {path:'home/:username/Ims', component:ImsViewComponent},
  {path:'home/:username/editIms', component:EditImsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
