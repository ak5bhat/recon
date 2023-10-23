import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HeaderComponent } from './loginsuccess/header/header.component';
import { SideNavComponent } from './loginsuccess/side-nav/side-nav.component';
import { NmsComponent } from './loginsuccess/nms/nms.component';
import { UploadImsComponent } from './loginsuccess/ims/upload-ims/upload-ims.component';
import { ImsViewComponent } from './loginsuccess/ims/ims-view/ims-view.component';
import { EditImsComponent } from './loginsuccess/ims/edit-ims/edit-ims.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginsuccessComponent,
    HeaderComponent,
    SideNavComponent,
    NmsComponent,
    UploadImsComponent,
    ImsViewComponent,
    EditImsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
