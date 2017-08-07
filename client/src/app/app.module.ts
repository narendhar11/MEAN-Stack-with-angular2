import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';


import { AppComponent }  from './app.component';
import { UsersComponent } from './component/users.component';
import { AboutComponent } from './about/about.component';
import { AlertComponent }  from './alert/alert.component';
import { AlertconfirmComponent }  from './alertconfirm/alertconfirm.component';
import { DialogComponent }  from './modaldialog/modaldialog.component';
import { DuallistComponent }  from './duallist/duallist.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule, routes],
  declarations: [ AppComponent, UsersComponent, AboutComponent, AlertComponent, AlertconfirmComponent, DialogComponent, DuallistComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
