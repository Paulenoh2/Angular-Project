import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/student.module';
import { StudentService } from 'src/app/shared/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  idNumber :string |undefined ="";
  firstName:string | undefined ="";
  lastName:string | undefined ="";
  email:string | undefined ="";
  phoneNumber: string | undefined ="";
  username:string|undefined ="";
  password:string|undefined ="";
  id:any | null =0;

  studentTitle:string = 'create';

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    let param = activatedRoute.snapshot.params['id'];
    if (param) {
      this.studentTitle = 'Edit';
      this.id = param;
      this.getStudentById(Number(this.id));
    } else {
      this.studentTitle = 'Create';
    }
  }


ngOnInit(){}


getStudentById(id:number){
  if(id){

  this.studentService.getStudentById(id).subscribe((student:Student)=>{
    this.idNumber = student.idNumber;
    this.firstName = student.firstName;
    this.lastName =student.lastName;
    this.email = student.email;
    this.phoneNumber = student.phoneNumber;
    this.id = id;


  },(error) =>{
    alert('faild to get student' + this.id);

  }


  );
}

}

createStudent(): void {

  let student: Student = new Student(
    this.firstName,
    this.lastName,
    this.email,
    this.phoneNumber,
    this.idNumber

  );
  student.id = null;

  this.studentService.createStudent(student).subscribe(
    (res) => {
      alert('Successfully Created student');


    },
    (error) => {
      alert('Failed to create student');

    }
  );

}



updateStudent(): void {
  console.log('update method is call')
  let student: Student = new Student(
    this.firstName,
    this.lastName,
    this.email,
    this.phoneNumber,
    this.idNumber,
    this.id
  );

  this.studentService.updateStudent(student).subscribe(
    (res) => {
      alert('Successfully updated student');
      this.routToList();

    },
    (error) => {
      alert('Failed to update student');
    }
  );
}

routToList():void{
  this.router.navigate(['student-list'])
}


submit(){
  if(this.id){
    this.updateStudent();
    this.id = null;
  }else{
    this.createStudent();
  }
}


}
