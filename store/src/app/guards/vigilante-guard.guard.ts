import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuardGuard implements CanActivate, CanActivateChild {
  
  constructor(private router:Router){}
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
  
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Obtenemos la hora actual  
    const hora = new Date().getHours();
    const min = new Date().getMinutes();
    // Comparamos la hora con el maximo permitido
    // Esto sería en caso de que no queremos que 
    // pueda entrar a la página después de los 28 min  
    if (min >= 52 && min <55 ) {
      /* Si la hora es mayor o igual,  
      si la condición para NO cargar la página,
       redireccionamos al loginComponent*/

      this.router.navigate(['/usuarios']);
      
      // Si devolvemos FALSE no de permitirá el acceso
      return false;
    }

    // Si devolvemos TRUE si se permitirá el acceso.
    
      return true;
  }
  

  /* ejemplo servicio 
  constructor(public authService: AuthService, public router: Router) {}

canActivate(): boolean {
if (!this.authService.isAuthenticated()) {
this.router.navigate(['login']);
return false;
}
return true;
*/
}
