import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormDeactivateGuard } from 'src/guards/user-form-deactivate.guard';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { RedactitemComponent } from './redactitem/redactitem.component';

const routes: Routes = [
  {path:'content',component:ContentComponent},
  {path:'admin',component:AdminComponent,
canDeactivate:[UserFormDeactivateGuard]},
{path:'redact',component:RedactitemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
