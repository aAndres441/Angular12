import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map, tap, catchError, finalize } from 'rxjs/operators';

@Injectable(/*{
   providedIn: 'root' }
   /* {providedIn: 'root'} no seria necesario en root si lo usara solo para una cosa*/
   )



export class UsuarioService {

  private unaList:any[] =['pp','KK','Caro','Mango','Lema'];
  private desdeStorage:any[]=[];
  onChangeLista = new Subject<any[]> ();

  /* constructor(private router:Router) {
    this.router.events.subscribe(()=>{
      console.log('Feni');
    });
   } */
   constructor(private http: HttpClient){}

  /* INTERCEPTOR  RESOLVER */


  getFromPlaceholder(url:string):Observable<any>{
/*     let res = this.http.get<any[]>(url).pipe();
 */    let res = this.http.get<any[]>(url);

console.log(JSON.stringify(new Date(Date.now()) ));

    
    return res;
      
    /* .map((res:Response)=>{res.json()}) */
   
  }
  getLista(){
    return this.unaList.slice();// devuelve una copia de la matriz
  }
  addAlgo(dato:string){
    this.unaList.push(dato);
    this.onChangeLista.next(this.unaList.slice());
  }
  borarF(){
    alert('ok');
  }


}
