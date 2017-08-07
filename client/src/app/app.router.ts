import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './about/about.component';
import { UsersComponent }  from './component/users.component';
import { AlertComponent }  from './alert/alert.component';
import { AlertconfirmComponent }  from './alertconfirm/alertconfirm.component';
import { DialogComponent }  from './modaldialog/modaldialog.component';
import { DuallistComponent }  from './duallist/duallist.component';

const router: Routes = [
	{path: 'about', component: AboutComponent},
	{path: 'users', component: UsersComponent},
	{path: 'alert', component: AlertComponent},
	{path: 'alertconfirm', component: AlertconfirmComponent},
	{path: 'dialog1', component: DialogComponent},
	{path: 'duallist', component: DuallistComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router,{ useHash: true });