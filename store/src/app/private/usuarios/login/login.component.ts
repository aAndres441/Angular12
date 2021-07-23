import { Component, Input, OnInit } from '@angular/core';
import { NgForm, NgModel, FormGroup, FormControl, Validators, FormArray, FormControlName, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUsuForm!: FormGroup;

  submitted: boolean = false; // solo para cambiar valor de envio
  statuses = ['Ocupado', 'Disponible', 'Proximo'];

  genderSelected:string='nada1';
  statusSelected:string='';
  areaSelected='';

  title='Andres A';

  errorClasse:any
  @Input() classErrorCustom! :boolean ; 
  
  constructor(private route: ActivatedRoute, 
          private router: Router,
          private _fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.submitted = false; // solo para cambiar valor de envio
    this.initForm();    
  }
  /* forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  } */
  private initForm(): void {    
    /* this.loginUsuForm = new FormGroup({ */
      this.loginUsuForm = this._fb.group({
        name: new FormControl(this.title, [Validators.required,Validators.minLength(4)]),
        password: new FormControl('', [Validators.required,Validators.minLength(4)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        age: new FormControl('', Validators.required),     
        status: new FormControl(''),
        reactivo: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        comment: new FormControl('', [Validators.required])
    });

     /* solo para mostrar cada vez que cambia un input*/
     this.loginUsuForm.valueChanges.subscribe(
      (valor) => console.log ('valueChanges',valor, '***el email ' ,this.loginUsuForm.get('email')?.status,'OOOO',this.loginUsuForm.get('email')
    ));
  }

  onSubmit() {   
    
    console.log(this.loginUsuForm.valid);
    console.log(this.loginUsuForm.value);
    const dato =[ 
      {elPass: this.loginUsuForm.value.password},
      {elName: this.loginUsuForm.value.name},
      {elmail: this.loginUsuForm.value.email},
      {elage: this.loginUsuForm.value.age},
      {elstatus: this.loginUsuForm.value.status},
      {loscomment: this.loginUsuForm.value.comment}
    ]
    this.submitted = true;

    console.log('El DATO ', dato);
    alert('JSON'+JSON.stringify(dato));
    console.log('JSON'+JSON.stringify(dato));    
    
  }

  getname() { return this.loginUsuForm.get('name'); }

  /* btn cancel */
  onCancel(){
    alert('Ruta ' + this.route);
    console.log('route',this.router.config);
    console.log('snapshot',this.route.snapshot.url);
    
    this.router.navigate(['../listado'], {relativeTo: this.route});
  }

  /* para clase de error */
  isInvalidField(elField: string): string {
    const validado = this.loginUsuForm.get(elField);
    return (!validado?.valid && validado?.touched)
      ? 'is-invalid' : validado?.touched ? 'is-valid' : '';
  }

  /* Para imput */
  changeElErrorClase(e:any){
    this.errorClasse=e;
    console.log('E', e, 'errorClasse', this.errorClasse);
  }

}
