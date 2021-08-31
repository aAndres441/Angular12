import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

/**
 * @title mi Interface va arriba 
 */
class Task { 
  id=0;
  lastId = 0;
  nameTask: null;
  commentTask: null;
  email:null;
  tasks:any=[];

  constructor(name:any, texto:any){
    /* this.id = this.id++; */
    this.nameTask = name;
    this.commentTask= texto
  }
  add(){
    this.lastId++;
    this.tasks.push({
      id: this.lastId,
      comentario: this.commentTask
    });
    console.log('ESELENTE');
    this.tostring();
    
  }
  tostring() {
          console.log(this.tasks[0].comentario);
  }
  
}
/* *  termina CLASS  ******** */
interface AnInterface{
  backColor:string;
  letterColor:string;
  text:string;
}
/*  *  termina Interface  ********* */

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})


export class ListadoComponent implements OnInit {

  //para servicio muestraMiUbicacion
  lstStorage:string[]=[];
  lstStorage2:any[]=[];
  listaStorage:[]=[];

  datosTabla: Observable<any[]> = new Observable();
  private subscript: Subscription = new Subscription;
  urlSubs =' https://jsonplaceholder.typicode.com/posts';

  title = ' Add data to Local storage && get service of API in 100s && Geolocation';
  
  taskForm!: FormGroup;
  forbbidenUsernames = ['Guiso', 'Asado']; 

  private response_auto : any = {
    0: 'Agradecemos',
    1: 'DeNada',
    2: 'Impeca'
  };

  private mensajesErrores: any = {
    'name': {
      'required': 'Name obligatorio',
      'minlength': 'El nombre no debe tener menos de 3 caracteres',
      'maxlength': 'El nombre no debe tener mas de 20 caracteres',
    },
    'email': {
      'required': 'e-mail obligatorio',
      'minlength': 'El email no debe tener menos de 8 caracteres.',
      'maxlength': 'El email no debe tener mas de 15 caracteres.',
      'email': 'Foramto correcto  "www.name<b>@</b>exmple.com".',
    },
    'password':{
      'required': 'Pass es obligatorio',
      'minlength': 'El Pass no debe tener menos de 5 caracteres',
    },
    'comment':{
      'required': 'Comment es obligatorio',
      'minlength': 'El comment no debe tener menos de 8 caracteres',
      'maxlength': 'El comment no debe tener mas de 25 caracteres',
    }
  };
  
  hidePass = true;

  ruta:any;
  key = 'myKey'; // para guardar en Local Strorage
  lastId=0;
  total = 0; //para escibir en consola con prompt

  dataColors!:AnInterface;
  backgroundColors='transparent';
  isViewCards=false;  
  submitted: boolean = false; // solo para cambiar valor de envio 

  /* Para Renderer2 */
  @ViewChild('texto_render') elemRender!: ElementRef;
  @ViewChild('google_render') _google: ElementRef | any;
  @ViewChild('b_uscador') b_uscador: ElementRef | any;
  @ViewChild('txt_Buscador') txt_busca_renderer: ElementRef | any;  //para Renderer2
  @ViewChild('search_goog') search_goog: ElementRef | any;  //para Renderer2

  /* Guardara en Local Storage esta lista */
  lstGuardar = [
    { name: 'Martin', lastname: 'kerbell',age: 21 },
    { name: 'Esteban', lastname: 'Quito', age: 341 },
    { name: 'Ana', lastname: 'Carolina', age: 12 }
  ];

  tasks:Task[] = [
    /* { nameTask: 'Rocha', texto: 'Rocha', id: 19 },
    { nameTask: 'Florida', texto: 'Florida', id: 14 },
    { nameTask: 'San Jose', texto: 'San Jose', id: 22 } */
  ];

  constructor(private renderer2: Renderer2,
             private _fb: FormBuilder, 
             private servicioUsu: UsuarioService
             ) { }

  ngOnInit(): void {
    
/* Muestra pos cursor, una al inicio y otra al hacer el primer click */
    this.checkCursor1();

    this.submitted = false;
    this.initTaskForm();

     /* ruta consola */
     this.ruta = window.location;

     /* renders */
     this.dataColors={
       backColor:'yellow',
       text: 'View storage',
       /* text: this.isViewCards.toString(), */
       letterColor:'red'
     }
     this.subscript = this.servicioUsu.onChangeLista
     .subscribe((p:any[])=>{
       this.lstStorage=p;
     })     
  }
  /* termina onInit() */
  
  ngOnDestroy(): void {
    this.subscript.unsubscribe();
  }

  /************ guarda LOCALSTORAGE , convertir pues solos nos permite guardar un string*/
  guardarStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.lstGuardar));
  }

  /* muestra desde storage */
  obtenerStorage() {
    let list = localStorage.getItem(this.key);   
    
    if (list === null) {
      return alert('null lst');
    } else if (typeof (list) === 'number') {
      return alert('Numero');
    } else if (typeof (list) === 'object') {
      return alert('object');
    } else if (typeof (list) === 'string') {
     
      /* tabla dinamica */
     /*  this.creaTabla(list);  */
     
      let res= JSON.parse(list);

      this.creaTabla(res); 
      
      for (let i = 0; i < res.length; i++) {
      //convierto a Task//{ nameTask: 'Rocha', texto: 'Rocha', id: 19 }
        let unTask:Task = new Task(res[i].name,res[i].lastname);
        console.log(i,'-',unTask, ', unTask');
        list+=(JSON.stringify(unTask));
        //el service lo guarda en una lista que me devueve subscribe al final
        this.addAlgo(res[i].name);
        this.addAlgo(res[i].lastname);
      }

     /*  for (let i = 0; i < list.length; i++) {
        this.addAlgo(list[i]);
      } */
      this.subscript = this.servicioUsu.onChangeLista
        .subscribe((p:any[])=>{
        this.lstStorage=p;
        
     })    
      

    /* Mostrar DATOS */ 
    
    console.log('Tipo de dato de localStorage viene: ', typeof (list));  
    console.log('list',list);        
    console.log('JSON.parse(list)',res);  
      return  
    }
  } 
  
  /* obtengo datos de placeholder agregandolos a lista existente lstStorage con datos de storage*/
  getFromPlaceholder(){
    
    this.datosTabla = this.servicioUsu.getFromPlaceholder(this.urlSubs);
    this.datosTabla  // Transformamos el Observable y lo guardamos
      .pipe(map((data) =>data));       
      
    this.datosTabla.subscribe(datos => {
      datos.forEach(element => {
        console.log('ele ',element);
        let dato = element.title.slice(0,10);
        this.addAlgo(dato);
      });
      console.log('datosdatos', datos);  
      this.subscript = this.servicioUsu.onChangeLista
      .subscribe((p:any[])=>{
      this.lstStorage=p  
      });
  });
      
  }

  creaTabla(lst: any) {
    if (lst.length > 0 ) {
       /* let json = JSON.parse(lst) */ //todos los datos del string
      let json = lst  //todos los datos del string, ya con parse
      let tabla = "<table><thead><tr class='tablaHead'>";
      let fila = json[0]; //obtengo primera fila
      let campos = Object.keys(fila);  //obtengo las prop_campos de la tabla
      /* console.log('Fila',fila);
      console.log('campos',campos); */
      // agrega cabeceras
      for (let i = 0; i < campos.length; i++) {
        tabla += "<th>"
        tabla += campos[i];
        tabla += "</th>"      
      }
      tabla += "</tr></thead><tbody>";  //cierro y abro body

      // agregamos registros Fila de cada campo
      for (let i = 0; i< json.length; i++) {
       fila = json[i];
       tabla += '<tr class="fila">';
        //gregamos datos a columnas a cada fila
        for (let j = 0; j < campos.length; j++) {
          tabla += "<td>"
          tabla += fila[campos[j]];
          tabla += "</td>"      
        }
        tabla += '</tr>'; //cierro 
      }
      tabla += '</tbody></table>';

      document.getElementById('demoTabla')!.innerHTML = tabla;

    }else{
      alert("Error, no hay elementos");
      let tabla2="<table><thead><tr><th>"+'Nada'+"</th></tr></thead><tbody></tbody></table>";
      document.getElementById('demoTabla')!.innerHTML = tabla2;
    }

  }
  /* para subscribe */
  addAlgo(dato:string){
    this.servicioUsu.addAlgo(dato);
    this.hidePass=!this.hidePass;
  }
  getLista(){
    let res=this.servicioUsu.getLista();
    console.log('res',res);
    
   /*  .subscribe(data =>{
      this.lstStorage =data;
    }); */
    console.log('LISTAs: (largo)=', this.lstStorage.length,'--', this.lstStorage);
  }
  borrarFila(cod:number){
    if (confirm("Realmente quiere borrarlo?")) {
      this.lstStorage.splice(cod, 1);
      this.servicioUsu.borarF();
    }
  }

  /* eliminar Storage */
  removeStorage() {
    try {
      localStorage.removeItem(this.key);
      this.lstGuardar.splice;
    }
    catch (e) {
      console.log('removeStorage: Error removing key [' +
       this.key + '] from localStorage: ' +
       JSON.stringify(e));
      return false;
    }
    console.log('OK; Is remove key ');
    alert('OK; Is remove key ');
    return true;
  }
  /* ------------ - FORM task  ---------------------------------------------------- */
  onSubmitTask():void{

    console.log('FORM valid', this.taskForm.valid);
    let dato =[ 
      {elname: this.taskForm.value.name},
      {elComment: this.taskForm.value.comment},
      {elmail: this.taskForm.value.email}
    ]

    let aname= this.taskForm.value.name;
    let acomme= this.taskForm.value.comment;
    let unTsk = new Task(aname,acomme);
    console.log('JSON',JSON.stringify(dato));    
    console.log('JSON22',dato);    
    console.log('unTsk',unTsk); 
    
    
    this.submitted = true;
  }

  private initTaskForm():void{
      //this.isViewCards=true;
      this.taskForm = this._fb.group({
        /*nombre: new FormControl('', [Validators.required,
          Validators.minLength(4), 
          Validator_usuarios.nameLength,
          this.forbbidenNames.bind(this),
          Validator_usuarios.nameForbidden ]),*/

          name: new FormControl('', [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),            
            /*this.forbbidenNames.bind(this),
             Validator_usuarios.nameForbidden */
          ]),
     
          password: new FormControl('',[
            Validators.required, 
            Validators.minLength(5)
          ]),

          email: new FormControl('',[Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(25),
                    Validators.email
          ]),

          comment: new FormControl('',[Validators.required,
                  Validators.minLength(8),
                    Validators.maxLength(25)
          ],)

      })      
  }

  forbbidenNames(unControl: FormControl): { [s: string]: boolean } {
    /* clave que pueda interpretarse como una cadena y esto es solo la sintaxis
     de TypeScript, y el retorno debe otro objeto error string para interpretaese boolean*/
    if (this.forbbidenUsernames.indexOf(unControl.value) !== -1) {
      return { nameIsForbiddenObject: true };
    }
    return { nameIsForbiddenObject: true };
  }

  public getError(nameControl: string): string {
    /* recibe el nombre del input y consulta, si fue tocado y
     tiene error, busca en el array de json (mensajesErrores) 
    para retornar el mensaje de error correspondiente. */
    // retorna los datos ingresados en el form
    // console.log( this.formGroup.value);
    /*  console.log('control-',control)
    console.log('eereor-',control.errors)
    console.log('status-',control.status) */
    let error = '';
    const control = this.taskForm.get(nameControl)!;
    if (control.touched && control.errors) {
    
      /* la variable 'control.errors' nos devuelve un par del tipo
       '{"required":true}' */
      let key = Object.keys(control.errors)[0]; 
      /*key es el nombre del error 
      console.log('La key - ',key);    */  
      let value = Object.values(control.errors)[0];
      /* console.log('La value - ',value); */
      /* console.log(this.mensajesErrores[nameControl][key]); */
      error = this.mensajesErrores[nameControl][key];
    }
    return error;
  }

  /************   Task   ************/
    addTask22($event:Event){
    console.log($event);
  }

  addTask(name:any,comment:any){  
    let names = name.value;  
    let commes = comment.value;  

    console.log('NAMES',names, 'COMM', commes);
    
    let nameTask=document.getElementById("nameTask");
    let commentTask=document.getElementById('commentTask');   

    /* creamos un task con incremental id*/
    let tsk = new Task(names,commes);
    /* let tsk = new Task(nameTask,commentTask); */
    /* tsk.id = this.lastId++; */
    tsk.id = tsk.lastId++;
    console.log('JSON', JSON.stringify(tsk));
    
    tsk.add();
   /*  tsk.texto = nameTask?.value; */
   //console.log(JSON.parse(tsk));
   console.log('JSON', JSON.stringify(tsk));
   console.log(tsk);
   
    /* if(nameTask!.onmouseenter=null){
      nameTask?.setAttribute('color','red') 
      console.log('COLOR',nameTask?.getAttribute('color'));
    } */
    
  }

  /* ***************  Renderer2 ************/
     /* ***************   Search  *********** */   
  
     toggleClase():void {   
      const div_search = document.getElementById('searchGoogle');  
      div_search?.classList.toggle('escala');
      console.log("Clase= ", div_search?.className); 
  
     /*  CON RENDERER SOLO PUEDO HACER TOGGLE UNA vez, deberia hacerlo con un bool
      y set, ej: this.renderer2.setAttribute(asIma, 'src', this.img2);
     const rend = this.search_goog.nativeElement;
      this.renderer2.addClass(rend, 'escala'); */
    }

    /* Background colors */
    setColors(){
    this.backgroundColors = this.backgroundColors ? 'blue' : 'yellow';
        //this.background = this.background ? undefined : 'primary';
  }
  
  setRenders(dat:string):void {
    console.log('is' ,this.isViewCards);
    console.log('Parametr', dat);
     /* const asColors = this.elemRender.nativeElement; */
    if(this.isViewCards){
      const asColors = this.elemRender.nativeElement;
      this.renderer2.addClass(asColors,'claseParaRender');
      this.dataColors.text='View storage'    
      this.isViewCards=!this.isViewCards;  
      console.log('this.isViewCards1 ',this.isViewCards);
    }else{
      this.dataColors.text='Add storage'  
      this.dataColors.backColor='yellow'  
/*       this.renderer2.addClass( this.elemRender.nativeElement,'claseParaRender2');  
 */      this.isViewCards=!this.isViewCards;  
      console.log('this.isViewCards2 ',this.isViewCards);      
    }    
  }
  

  /* ***************UPLOAD file *********** */
   /* Carga imagen en el Storage 
   onLoadImg(event: any) {*/
    /* solo usare del parametro event en console, el target,
    de aca el files y el que esta en primer lugar que es su nombre */
/*
   console.log('sube ' , event.target.files[0], 'Todo ' , event);
   this.imgParaLoad = event.target.files[0];
   this.imgParaLoadnombre = event.target.files[0].name;
   this.imgTimeStamp = event.timeStamp;
   console.log('timeStamp ' , event.timeStamp);

   const idAleatorio = Math.random().toString(36).substring(2);

   const file = event.target.files[0]; // el mismo elemento imagen
   const filePath = `uploads/profileId_${idAleatorio}`; // crea una carpeta y sera la ruta
   const refStorage = this.storage.ref(filePath); // referencia

   const task = this.storage.upload(filePath, file); // con esto sube la imagen con su ruta y la imagen
*/
   /* guarda el porcentaje de subida 
   this.uploadPercent = task.percentageChanges();*/

   /* aca obtenemos la ruta de la imagen */
  /*  task.snapshotChanges()
     .pipe(finalize(() => {
       this.imgUrl = refStorage.getDownloadURL();
     }))
     .subscribe();

   alert('Subiendo ' + this.imgParaLoadnombre + '..' + this.imgParaLoad + ' time: ' + this.imgTimeStamp);
 
   this.service.uploadImag(this.imgParaLoad); */
   // this.service.uploadImag2(event);
/* } */

   /* -------------   GEOLOCALIZACION  ------------------- */
    /* Ubicacion */

  miUbicacion(){
      //document.getElementById('map2')!.setAttribute('color','red');
    let localtexto = document.getElementById('localtext');
    const elDiv = document.getElementById("map")!;
    console.log('Div Map = x ', elDiv);

    console.log('Widows= ', window);
    console.log('Navigator= ', window.navigator);
    console.log('Ruta ', this.ruta.href);
    console.log('Geo = ', window.navigator.geolocation.getCurrentPosition);

    if (navigator.geolocation) {
      /* navigator.geolocation.getCurrentPosition(this.showPosition); */
      console.log('Ubicacion ' , navigator.geolocation.getCurrentPosition);
      
    } else {
      elDiv.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  /*  showPosition(position) {
    var a = position.coords.latitude;
    var b = position.coords.longitude;
  
    pos = {a, b}
    console.log(pos);
  } */

  /* Login form */
  onLogin() {
    /* this.authServ.logIn();/
    importar private authServ: AuthGuard, */
  }

  onLogoutGoogle() {
    // this.afAuth;
  }
  
  onLogout() {
    /* this.authServ.logOut(); */
  }

  /*-----------  Respuesta Automatizado ---------------------------- */

  ejecAuto() {
    let error = '';

    document.querySelectorAll('#tbl_auto tr').forEach((cadaTr, index)=>
    {setTimeout(()=>{
      console.log('cadaTr', index);/* cadaTr.click()si fuera enlace a o boton */
      let random = Math.floor(Math.random() * (3 - 0)) + 0; // Retorna un entero aleatorio entre min (0 incluido) y max (3 excluido)
      
      error = this.response_auto[random];
   setTimeout(()=>{
   document.getElementById('txt_auto')!.setAttribute('value','Respuesta-'+index+'-'+error);
   document.getElementById('btn_auto')!.click();
   },1000);
   },1000*index);
   });

  }
 posicion(){
  const clicks = fromEvent(document, 'click'); //evento del buscador
  const posicion = clicks.pipe(
    tap((ev) =>{
      console.log('Procesado ' , ev)
  }, err =>console.log(err),
  ()=>console.log('Completado')
  )
  );//termina pipe
  posicion.subscribe((pos)=>{console.log('posicion',pos);
  })
 }

  /* Posicion Cursor */
  posicionCUrsor() {
    /* posicion de click */
    const clicks = fromEvent(document, 'click');
    const posicion = clicks.pipe(
      tap((ev) => {
        console.log('Procesado ', ev)
      }, err => console.log(err),
        () => console.log('Completado')
      )
    );//termina pipe
    posicion.subscribe((pos) => {
      console.log('posicion', pos);
    })    
  }

  checkCursor1(){ 
    document.addEventListener("mouseover", (evt) => {
      setInterval(this.checkCursor2, 1000);    
      console.log('Cursor 1 = Y', evt.y, 'X ', evt.x);
  });}
 
  checkCursor2() {
    document.onmousemove = (e) => {
      let x = e.pageX;
      let y = e.pageY;
      console.log("Cursor 2 at: " + y + ", " + x);
    }
  }
/* termina posicion click */

}/*termina classe*/
/*   /* -------------   GEOLOCALIZACION  ------------------- */

/*   options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximage: 0
  };
  errores: string[] = [
    'POSITION_UNAVAILABLE', 'POSITION_UNAVAILABLE'
  ];
  x = document.getElementById("map");
 */
/*   miUbicacion() {
    // Si los servicios de geolocalización están disponibles
    if (navigator.geolocation) {
      // Para obtener la ubicación actual llama getCurrentPosition.
      navigator.geolocation.getCurrentPosition(
        this.siHayExito(),
        this.siHayError(),
        { enableHightAccuracy: false, timeout: Infinity, maximage: 0 }
        );
        console.log('sii');
    } else {
      alert("Los servicios de geolocalizaci\363n  no est\341n disponibles");
    }
  } */

/*   success(pos: any) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  }; */

/*   error(err: any) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
 */
/* navigator.geolocation.getCurrentPosition(success, error, options); */

/*  siHayError(error: any) {//errorHandler
   // traduce al castellano los posibles errores
   switch (error.code) {
     case error.PERMISSION_DENIED:
       error = "Permiso denegado por el usuario."
       break;
     case error.POSITION_UNAVAILABLE:
       error = "Posici\363n no disponible." + " " + error.message;
       break;
     case error.TIMEOUT:
       error = "Desconexi\363n por tiempo."
       break;
     case error.UNKNOWN_ERROR:
       error = "Error desconocido." + " " + error.message;
       break;
   }

   var div = document.getElementById("ubicacion")!;
   div.innerHTML = error;
 }
*/
/*  siHayExito(): PositionCallback {
   throw new Error('Function not implemented.');
 } */

  // la función muestraMiUbicacion ahora se llama siHayExito
/* siHayExito2(posicion: any) {
   var latitud = posicion.coords.latitude
   var longitud = posicion.coords.longitude
   var output = document.getElementById("ubicacion")!;
   output.innerHTML = "Latitud: " + latitud + "  Longitud: " + longitud;
 }
*/