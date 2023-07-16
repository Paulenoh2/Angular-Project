import { Component } from '@angular/core';
  import { Student } from 'src/app/shared/student.module';
  import { StudentService } from 'src/app/shared/student.service';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string|undefined ="";
  password:string|undefined ="";

  constructor(private studentService:StudentService,private router:Router){}

ngOnInit(): void{

}

studentLogin():void{
  if(this.username == 'admin' && this.password =="admin"){
    alert('Admin successfully Login')
    this.router.navigate(['student-list']);
    
    
  }else if(this.username =='teller' && this.password == "teller"){
    alert('Teller successfully login')
    this.router.navigate(['student-list']);
  }else if(this.username == "account" && this.password =="account"){
    alert('accounter successfully login')
    this.router.navigate(['student-list']);
}else{
  alert('Invalid username and password');
}

}


}

