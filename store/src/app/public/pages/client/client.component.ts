/**
 * @title Card and parts of Material with multiple sections
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/**
 * @title Basic select
 */
interface State {
    name: string;
    viewName: string;
    rating: number;
  }

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    imgName:any;
    imgURI='';
    imageLoad:any;
    images:any=[];
    view:boolean=false;
    imagesCount=0;
    hide = true;

    selected = 'option2';

    stateControl = new FormControl('', Validators.required);
    selectFormControl = new FormControl('', Validators.required);
    
    states: State[] = [
        {name: 'Alabama', viewName: 'Alabama', rating:1},
        {name: 'Alabama', viewName: 'Alabama', rating:1},
        {name: 'Alabama', viewName: 'Alabama', rating:1},
        {name: 'California', viewName: 'AlaCaliforniabama', rating:31},
        {name: 'Minnesota', viewName: 'Minnesota', rating:21},
        {name: 'Washington', viewName: 'Washington', rating:33},
        {name: 'New York', viewName: 'New York', rating:8},
        {name: 'Florida', viewName: 'Florida', rating:5},
        {name: 'Hawaii', viewName: 'Hawaii', rating:24}        
      ];

  constructor() { }

  ngOnInit(): void {
      /* this.imgName= href='D:\ORT\AYUDANTIAS\Lenguaje_Angular\Angular12\Angular12\store\src\assets\images\sol.png'; */
      
    
    }

  onLoadImg(event: any) { // solo usare del parametro event el target, de aca el files y el que esta en primer lugar que es su nombre
    console.log('sube ' , event.target.files[0], 'Todo ' , event); 
    console.log(this.view);
    
    this.view = !this.view;

    console.log(this.view);
    
    this.imgName = event.target.files[0].name;
    this.imageLoad = event.target.files[0];
    this.imgURI=event.target.namespaceURI;
   /*  alert('URI '+ this.imgURI); */
   console.log('LABEL' , event.target.namespaceURI);
   

    this.images.push(event.target);
    this.imagesCount++;

    alert('Imagen nombre: ' + this.imgName);  
    console.log('Largo', this.images.length);
    
  }
cambiarVista(){
    this.view = !this.view;
}
/* HASH
ef hash(unaCadena, tamanoTabla):
    suma = 0
    for pos in range(len(unaCadena)):
        suma = suma + ord(unaCadena[pos])

    return suma%tamanoTabla
     */
 /*  int h1(int key)
{
    return key%m;
}
 
int h2(int key)
{
    return 1+(key%(m-1));
}
 
int h(int key,int i)
{
    return (h1(key)+i*h2(key))%m;
}
 
int insert(int key)
{
    int i=0;
    while(true){
        j=h(key,i);
        if (t [j] == NIL) {// Para determinar si la posición actual está vacía
            t[j]=key;
            return j;
        }else{
            i=i+1;
        }
    }
}
 
int search(int key)
{
    i=0;
    while(true){
        j=h(key,i);
        if(t[j]==key){
            return j;
        }else if(t[i]==NIL||i>=m){
            return NIL;
        }else{
            i=i+1;
        }
    }
} */
/* int main()
{
    int n;
    char str[l],com[9];
    for(int i=0;i<m;i++){
        H[i][0]=0;
    }
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%s %s",com,str);
        if(com[0]=='i'){
            insert(str);
        }else{
            if(find(str)){
                printf("yes\n");
            }else{
                printf("no\n");
            }
        }
    }
    return 0;
}
 */

}
