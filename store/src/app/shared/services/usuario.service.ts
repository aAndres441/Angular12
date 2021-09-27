import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { map, tap, catchError, finalize } from 'rxjs/operators';
//import {express} from 'express';
//import cors from 'cors';
//import { createServer } from "http";


@Injectable(/*{
   providedIn: 'root' }
   /* {providedIn: 'root'} no seria necesario en root si lo usara solo para una cosa*/
   )



export class UsuarioService {

  private unaList:any[] =['Caro','Mango','Lema','Manu'];
  /*  private unaList:any[] =[
    {name:'Caro',comment:'Mango',gender:'Lema',id:100},
    {name:'Caro',comment:'Mango',gender:'Lema',id:100},
    {name:'Caro',comment:'Mango',gender:'Lema',id:100},
    {name:'Caro',comment:'Mango',gender:'Lema',id:100},]; */
  private desdeStorage:any[]=[];
  onChangeLista = new Subject<any[]> ();

  constructor(private http: HttpClient,private router:Router) {

    /* this.router.events.subscribe(()=>{
      console.log('Feni', this.router.events);
    }); */

    

    //llamo a funcion async

//this.init();
 

  }
  

 /*  async  init() {    
    const express = require('express');   
    const cors = require('cors'); 
    const app = express();
    app.use(cors()); //peticiones de origen cruzado
   
    const PORT2 = 3003;
    //const PORT = process.env.PORT || 2002;
    //const httpServer = createServer(app);

    app.get('/',(_req: any,_res: any) => {
      _res.send({data:'Well well, Hello My World view!!!!'});
  });

    app.listen(PORT2, () => {
      console.log('escukie', PORT2,  `http://localhost:${PORT2} API`);
      //abro navegador con este puerto.OJO poner comillas invertidas

    });
  } */

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
