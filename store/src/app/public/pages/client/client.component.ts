import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
