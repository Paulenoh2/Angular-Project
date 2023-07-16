import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student.module';
import { StudentService } from 'src/app/shared/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  studentTitle:string = "Welcome to List of Students";

 students:Student[] = [];

  constructor(private studentService:StudentService,private router:Router){}

ngOnInit(): void {
  this.getAllStudents();
}


getAllStudents():void{
  this.studentService.getAllStudents().subscribe ((data) =>{
    this.students = data;
  },(error) =>{
    alert('Error Occured while getting all students' + error);
  }
  );
}

deleteStudentById(id: number): void {
  this.studentService.deleteStudentById(id).subscribe(
    (result) => {
 this.getAllStudents();
 alert('delete student was successful')
      console.log('delete student was successful')
    },
    (error) => {
      console.log(error);
      this.getAllStudents();
      //  alert('the was an error ');
    }
  );
}


populateStudent(student: Student):void{
  this.studentTitle = 'update';
  this.router.navigate(['student-edit' ,student.id]);

}

showCreateForm(){
   this.studentTitle = 'create';
   this.router.navigate(['/student-create'])

  }


logOut():void{
  this.router.navigate(['student-login']);
}
}
