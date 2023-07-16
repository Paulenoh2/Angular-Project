import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from './shared/student.module';
import { StudentService } from './shared/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pvi-register system manu';
  StudentTile: string ="";
  username:string|undefined ="";
  password:string|undefined ="";

constructor (private router:Router,studentService:StudentService){}

ngOnInit(): void {}


log(){
  this.StudentTile = 'login'
  this.router.navigate(['student-login'])
}


showCaseForm(){
  this.StudentTile = 'create';
  this.router.navigate(['student-create'])
}


routToList(){
  this.StudentTile = 'List of Students';
  this.router.navigate(['/student-list']);
}
create(){
  this.StudentTile = 'create';
  this.showCaseForm();
}

displayList(){
  this.StudentTile = "List of Students";
  this.routToList();
}


}

