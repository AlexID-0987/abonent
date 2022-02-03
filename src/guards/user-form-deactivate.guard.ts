import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from 'src/app/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class UserFormDeactivateGuard implements CanDeactivate<AdminComponent> {
  canDeactivate(
    component:AdminComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm("Hi,you have unsaved changes, continue:");
  }
  
}
