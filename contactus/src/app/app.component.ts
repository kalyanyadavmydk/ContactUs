import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactus';

  constructor(private http:HttpClient){}
  formupdate(form:NgForm){
    var array={
      firstname:form.value.firstname,
      lastname:form.value.lastname,
      email:form.value.email,
      comment:form.value.comment
    }
    this.http.post<any>('http://localhost:3000/contactus',array).subscribe((data)=>{
      console.log(data)
    })
  }
}
