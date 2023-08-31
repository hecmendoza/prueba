import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user!: string | null;
  pass!: string | null;
  
  constructor(
    private router: Router) {
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.user = localStorage.getItem("user");
      this.pass = localStorage.getItem("pass");
      
      if(this.user == "admin" && this.pass == "admin"){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
